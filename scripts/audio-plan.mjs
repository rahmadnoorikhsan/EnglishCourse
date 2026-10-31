// Casts are authored per fictional script, never inferred from a person's name at runtime.
export function planSpeech(text, cast, narrator = 'af_heart') {
  if (Object.keys(cast).length === 0) return [{ voice: narrator, text }];
  const labels = [...text.matchAll(/(?:^|\s)([A-Z][a-z]+(?: [a-z]+)?):\s*/g)];
  if (!labels.length) throw new Error('Expected dialogue labels');
  if (text.slice(0, labels[0].index).trim()) throw new Error('Unassigned dialogue introduction');
  return labels.map((label, index) => {
    const voice = cast[label[1]];
    if (!voice) throw new Error(`Unknown speaker: ${label[1]}`);
    const speech = text.slice(label.index + label[0].length, labels[index + 1]?.index ?? text.length).trim();
    if (!speech) throw new Error(`Empty turn: ${label[1]}`);
    return { voice, text: speech };
  });
}
