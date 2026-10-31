# Run through build-audio.mjs; synthesis dependencies are isolated by uv.
import json
import os
from pathlib import Path
import subprocess
import sys
import tempfile

import numpy as np
import onnxruntime as ort
import soundfile as sf
from kokoro_onnx import Kokoro

model_dir = Path(os.environ["KOKORO_MODEL_DIR"]).expanduser()
options = ort.SessionOptions()
options.intra_op_num_threads = min(4, os.cpu_count() or 1)
session = ort.InferenceSession(
    str(model_dir / "kokoro-v1.0.onnx"),
    sess_options=options,
    providers=["CPUExecutionProvider"],
)
engine = Kokoro.from_session(session, str(model_dir / "voices-v1.0.bin"))
output = Path(sys.argv[1])
output.mkdir(parents=True, exist_ok=True)
with tempfile.TemporaryDirectory(prefix="englishcourse-neural-") as temp:
    for item in json.load(sys.stdin):
        speed = 0.85 if item["week"] < 5 else 0.93 if item["week"] < 14 else 1.0
        parts = []
        for index, segment in enumerate(item["segments"]):
            audio, rate = engine.create(segment["text"], voice=segment["voice"], speed=speed, lang="en-us")
            if index:
                parts.append(np.zeros(round(rate * 0.3), dtype=audio.dtype))
            parts.append(audio)
        audio = np.concatenate(parts)
        wav = Path(temp) / "speech.wav"
        mp3 = Path(temp) / "speech.mp3"
        sf.write(wav, audio, rate)
        subprocess.run([
            "ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", str(wav),
            "-codec:a", "libmp3lame", "-b:a", "96k", str(mp3),
        ], check=True)
        destination = output / (item["name"] + ".mp3")
        destination.write_bytes(mp3.read_bytes())
        print(f'{item["name"]}: {len(audio) / rate:.1f}s, speed={speed}', flush=True)
