const SKILLS = ['listening', 'reading', 'speaking', 'writing', 'language', 'review'];
const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];
const MAX_ROWS = 5000;
const MAX_TEXT = 20000;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const SESSION = /^w([1-9]|1\d|2[0-6])-d([1-7])$/;
const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const integer = (value, min, max) => Number.isSafeInteger(value) && value >= min && value <= max;
const text = (value, max = MAX_TEXT) => typeof value === 'string' ? value.slice(0, max) : '';
const level = value => LEVELS.includes(value) ? value : 'unknown';
const reviewer = value => ['self', 'human', 'ai'].includes(value) ? value : 'self';
const position = row => integer(row.week, 1, 26) && integer(row.day, 1, 7);
const scoresValid = value => Array.isArray(value) && value.length === 4 && Array.from(value).every(n => integer(n, 0, 3));
const chronological = rows => [...rows].sort((a, b) => a.createdAt.localeCompare(b.createdAt));

function timestamp(value) {
  if (typeof value !== 'string' || value.length > 40 || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.test(value)) return '';
  const date = value.slice(0, 10);
  const calendar = Date.parse(`${date}T00:00:00.000Z`);
  if (!Number.isFinite(calendar) || new Date(calendar).toISOString().slice(0, 10) !== date) return '';
  const time = Date.parse(value);
  return Number.isFinite(time) ? new Date(time).toISOString() : '';
}

function identity(row) {
  const createdAt = timestamp(row.createdAt);
  if (typeof row.id !== 'string' || !UUID.test(row.id) || !createdAt) return null;
  return { id: row.id, createdAt };
}

function normalizeAttempt(row) {
  if (!object(row) || !position(row) || !['listening', 'reading', 'pattern'].includes(row.kind)) return null;
  const meta = identity(row);
  const materialId = text(row.materialId, 1000).trim();
  if (!meta || !materialId || !integer(row.total, 1, Number.MAX_SAFE_INTEGER) || !integer(row.score, 0, row.total)) return null;
  return {
    ...meta, week: row.week, day: row.day, kind: row.kind, materialId, score: row.score, total: row.total,
    choices: Array.isArray(row.choices) ? row.choices.slice(0, 1000).filter(n => integer(n, -1, 1000)) : [],
    mode: row.mode === 'assessment' ? 'assessment' : 'practice', fresh: row.fresh === true,
    assisted: row.assisted !== false, level: level(row.level), source: text(row.source, 1000),
  };
}

function normalizeTime(row) {
  if (!object(row) || !position(row) || !SKILLS.includes(row.skill) || !integer(row.seconds, 1, 86400)) return null;
  const meta = identity(row);
  return meta ? { ...meta, week: row.week, day: row.day, skill: row.skill, seconds: row.seconds } : null;
}

function normalizeSubmission(row) {
  if (!object(row) || !scoresValid(row.scores)) return null;
  const meta = identity(row);
  const task = text(row.task, 1000).trim();
  if (!meta || !task) return null;
  return {
    ...meta, draft: text(row.draft), feedback: text(row.feedback), revision: text(row.revision),
    reviewer: reviewer(row.reviewer), scores: [...row.scores], level: level(row.level), task,
    independent: row.independent === true,
  };
}

function normalizeSpeaking(row) {
  if (!object(row) || !position(row) || !scoresValid(row.scores)) return null;
  const meta = identity(row);
  const task = text(row.task, 1000).trim();
  if (!meta || !task) return null;
  return {
    ...meta, week: row.week, day: row.day, task, level: level(row.level), evidence: text(row.evidence),
    audioId: typeof row.audioId === 'string' ? text(row.audioId, 1000) : null,
    scores: [...row.scores], reviewer: reviewer(row.reviewer), independent: row.independent === true,
    interactive: row.interactive === true, notes: text(row.notes),
  };
}

function normalizeReview(row) {
  if (!object(row) || !integer(row.week, 1, 26)) return null;
  const meta = identity(row);
  return meta ? { ...meta, week: row.week, notes: text(row.notes) } : null;
}

function rows(input, normalize, limit = MAX_ROWS) {
  if (!Array.isArray(input)) return [];
  const result = [];
  const seen = new Set();
  // Bound examined input as well as output; malformed imports cannot cause unbounded work.
  for (const value of input.slice(0, limit)) {
    const row = normalize(value);
    if (!row || seen.has(row.id)) continue;
    seen.add(row.id);
    result.push(row);
  }
  return result;
}

/** Fresh containers for local evidence; no service or inferred proficiency. */
export function emptyLearning() {
  return { attempts: [], time: [], writing: {}, speaking: [], reviews: [] };
}

/** Import only bounded, allowlisted fields. Invalid evidence is discarded, never repaired into a pass. */
export function normalizeLearning(input) {
  const result = emptyLearning();
  if (!object(input)) return result;
  result.attempts = rows(input.attempts, normalizeAttempt);
  const seen = new Set();
  for (const row of chronological(result.attempts)) {
    const key = `${row.kind}:${row.materialId}`;
    if (seen.has(key)) row.fresh = false;
    seen.add(key);
  }
  result.time = rows(input.time, normalizeTime);
  result.speaking = rows(input.speaking, normalizeSpeaking);
  result.reviews = rows(input.reviews, normalizeReview);
  if (object(input.writing)) {
    // Enumerate only the 182 possible session keys, never attacker-controlled object keys.
    for (let week = 1; week <= 26; week++) {
      for (let day = 1; day <= 7; day++) {
        const key = `w${week}-d${day}`;
        if (!Object.hasOwn(input.writing, key) || !object(input.writing[key])) continue;
        const row = input.writing[key];
        result.writing[key] = {
          draft: text(row.draft), feedback: text(row.feedback), revision: text(row.revision),
          reviewer: reviewer(row.reviewer), updatedAt: timestamp(row.updatedAt),
          submissions: rows(row.submissions, normalizeSubmission, 100),
        };
      }
    }
  }
  return result;
}

/** Append one validated attempt. Returns the stored row, or null for invalid input/full storage. */
export function recordAttempt(learning, input) {
  if (!object(learning) || !Array.isArray(learning.attempts) || learning.attempts.length >= MAX_ROWS || !object(input)) return null;
  const row = normalizeAttempt({ ...input, id: input.id ?? crypto.randomUUID(), createdAt: input.createdAt ?? new Date().toISOString() });
  if (!row || learning.attempts.some(old => old.id === row.id)) return null;
  if (learning.attempts.some(old => old.kind === row.kind && old.materialId === row.materialId)) row.fresh = false;
  learning.attempts.push(row);
  return row;
}

function writingRows(learning) {
  const result = [];
  for (const [key, value] of Object.entries(learning.writing)) {
    const match = SESSION.exec(key);
    if (!match) continue;
    for (const row of value.submissions) result.push({ ...row, week: Number(match[1]), day: Number(match[2]) });
  }
  return result;
}

const percent = row => 'total' in row ? row.score / row.total * 100 : row.scores.reduce((sum, n) => sum + n, 0) / 12 * 100;
const latestLevel = data => chronological(data).findLast(row => LEVELS.includes(row.level))?.level ?? 'unknown';

/** Counts all activity, but first/latest percentages share the latest explicit skill level. */
export function skillSummary(learning, week = null) {
  const data = normalizeLearning(learning);
  const inWeek = row => week === null || row.week === week;
  const evidence = {
    listening: data.attempts.filter(row => row.kind === 'listening'),
    reading: data.attempts.filter(row => row.kind === 'reading'),
    language: data.attempts.filter(row => row.kind === 'pattern'),
    writing: writingRows(data), speaking: data.speaking, review: [],
  };
  const result = {};
  for (const skill of SKILLS) {
    const selected = evidence[skill].filter(inWeek);
    const currentLevel = latestLevel(selected);
    const comparable = currentLevel === 'unknown' ? [] : chronological(selected.filter(row => row.level === currentLevel));
    result[skill] = {
      seconds: data.time.filter(row => row.skill === skill && inWeek(row)).reduce((sum, row) => sum + row.seconds, 0),
      attempts: selected.length,
      firstPercent: comparable.length ? percent(comparable[0]) : null,
      latestPercent: comparable.length ? percent(comparable.at(-1)) : null,
      level: currentLevel,
    };
  }
  return result;
}

const LABELS = { listening: 'Listening', reading: 'Reading', writing: 'Writing', speaking: 'Speaking' };

function assessmentStatus(skill, evidence, firstAttempts) {
  const currentLevel = latestLevel(evidence);
  const eligible = evidence.filter(row => row.level === currentLevel && currentLevel !== 'unknown' && row.mode === 'assessment' && row.fresh && !row.assisted && firstAttempts.has(row.id));
  const selected = chronological(eligible).slice(-2);
  if (selected.length < 2) {
    const low = selected.some(row => row.score / row.total < 0.7);
    return { skill, status: low ? 'repeat' : 'collect', detail: `${LABELS[skill]}: kumpulkan 2 materi berbeda, asesmen pertama yang baru dan tanpa bantuan pada satu level eksplisit${currentLevel === 'unknown' ? '' : ` (${currentLevel})`}; tersedia ${selected.length}/2.${low ? ' Hasil pertama yang tersedia belum mencapai 70%; latih kelemahannya.' : ''}`, level: currentLevel };
  }
  const passing = selected.every(row => row.score / row.total >= 0.7);
  return {
    skill, status: passing ? 'advance' : 'repeat', level: currentLevel,
    detail: `${LABELS[skill]} (${currentLevel}): dua asesmen pertama terbaru ${selected.map(row => `${Math.round(percent(row))}%`).join(' dan ')}; masing-masing perlu ≥70%. Pengulangan materi tidak mengganti hasil pertama.`,
  };
}

function productiveStatus(skill, evidence) {
  const currentLevel = latestLevel(evidence);
  const eligible = chronological(evidence.filter(row => row.level === currentLevel && currentLevel !== 'unknown' && row.independent && row.reviewer === 'human' && (skill !== 'speaking' || row.interactive)));
  const tasks = new Map();
  for (const row of eligible) tasks.set(row.task.normalize('NFKC').replace(/\s+/g, ' ').trim().toLowerCase(), row);
  const selected = chronological([...tasks.values()]).slice(-2);
  const passing = selected.every(row => row.scores.every(n => n > 0) && row.scores.reduce((sum, n) => sum + n, 0) >= 8);
  if (selected.length < 2) return {
    skill, status: passing ? 'collect' : 'repeat', level: currentLevel,
    detail: `${LABELS[skill]}: kumpulkan 2 tugas berbeda yang mandiri, dinilai manusia pada satu level eksplisit${currentLevel === 'unknown' ? '' : ` (${currentLevel})`}${skill === 'speaking' ? ', dengan percakapan interaktif' : ''}; tersedia ${selected.length}/2.${passing ? '' : ' Hasil yang tersedia belum mencapai 8/12 tanpa dimensi nol.'}`,
  };
  return {
    skill, status: passing ? 'advance' : 'repeat', level: currentLevel,
    detail: `${LABELS[skill]} (${currentLevel}): dua tugas terbaru bernilai ${selected.map(row => `${row.scores.reduce((sum, n) => sum + n, 0)}/12`).join(' dan ')}; masing-masing perlu ≥8/12 tanpa dimensi nol.`,
  };
}

/**
 * Suggest practice using the current/previous week, not CEFR certification or an unlock gate.
 * Each skill uses its latest explicit level and its two latest distinct eligible materials/tasks.
 * First-material history is global: a prior practice/assisted/failed attempt cannot become fresh.
 */
export function weeklyRecommendation(learning, week) {
  const data = normalizeLearning(learning);
  const inWindow = row => integer(week, 1, 26) && row.week <= week && row.week >= week - 1;
  const firstAttempts = new Set();
  const seen = new Set();
  for (const row of chronological(data.attempts)) {
    const key = `${row.kind}:${row.materialId}`;
    if (!seen.has(key)) firstAttempts.add(row.id);
    seen.add(key);
  }
  const results = [
    ...['listening', 'reading'].map(skill => assessmentStatus(skill, data.attempts.filter(row => row.kind === skill && inWindow(row)), firstAttempts)),
    productiveStatus('writing', writingRows(data).filter(inWindow)),
    productiveStatus('speaking', data.speaking.filter(inWindow)),
  ];
  const weak = results.filter(row => row.status === 'repeat');
  const missing = results.filter(row => row.status === 'collect');
  const mixed = new Set(results.filter(row => row.level !== 'unknown').map(row => row.level)).size > 1;
  let status = 'advance';
  if (weak.length) status = weak.length >= 2 ? 'repeat' : 'focus';
  else if (missing.length) status = 'collect';
  else if (mixed) status = 'focus';
  const titles = {
    collect: 'Kumpulkan bukti belajar yang cukup', repeat: 'Ulangi dan kuatkan keterampilan saat ini',
    focus: 'Fokuskan latihan sebelum menaikkan tantangan', advance: 'Pertimbangkan mencoba tantangan berikutnya',
  };
  const reasons = results.map(row => row.detail);
  reasons.push('Saran memakai level eksplisit terbaru per keterampilan; sampel pada level lebih tinggi tidak menghapus bukti atau pencapaian sebelumnya.');
  const actions = results.filter(row => row.status !== 'advance').map(row => row.status === 'collect'
    ? `Lengkapi bukti ${LABELS[row.skill]} sesuai syarat; latihan, bantuan, dan penilaian mandiri/AI tidak menggantikan asesmen independen.`
    : `Latih kelemahan ${LABELS[row.skill]}, lalu coba materi atau tugas baru pada level yang sama.`);
  if (mixed) {
    reasons.push('Level bukti antar-keterampilan berbeda; hasil lintas level tidak disamakan.');
    actions.push('Selaraskan bukti keempat keterampilan pada satu level sebelum mempertimbangkan tantangan berikutnya.');
  }
  if (status === 'advance') actions.push('Coba materi baru yang sedikit lebih menantang dan kumpulkan bukti baru; semua minggu tetap dapat diakses.');
  reasons.push('Hanya bukti minggu ini dan minggu sebelumnya yang dipakai. Ini saran latihan, bukan sertifikasi CEFR atau pembukaan level.');
  return { status, title: titles[status], reasons, actions, skills: results.map(({ skill, status, detail }) => ({ skill, status, detail })) };
}
