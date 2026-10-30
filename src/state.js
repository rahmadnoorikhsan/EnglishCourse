const KEY = 'englishcourse-progress-v1';
export const emptyState = () => ({ version: 1, week: 1, day: 1, minutes: 180, checks: {}, notes: {}, completed: [] });
let storageWarning = '';

export function loadState() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return emptyState();
    const data = JSON.parse(raw);
    const state = emptyState();
    if (data.version !== 1) throw new Error('Format progres tidak dikenali.');
    if (Number.isInteger(data.week) && data.week >= 1 && data.week <= 26) state.week = data.week;
    if (Number.isInteger(data.day) && data.day >= 1 && data.day <= 7) state.day = data.day;
    if ([60, 120, 180, 240].includes(data.minutes)) state.minutes = data.minutes;
    if (data.checks && typeof data.checks === 'object') {
      for (const [key, value] of Object.entries(data.checks)) {
        if (/^w([1-9]|1\d|2[0-6])-d[1-6]-b[0-3]$/.test(key) && value === true) state.checks[key] = true;
      }
    }
    if (data.notes && typeof data.notes === 'object') {
      for (const [key, value] of Object.entries(data.notes)) {
        if (/^w([1-9]|1\d|2[0-6])-d[1-7]$/.test(key) && typeof value === 'string') state.notes[key] = value.slice(0, 5000);
      }
    }
    if (Array.isArray(data.completed)) state.completed = [...new Set(data.completed.filter(n => Number.isInteger(n) && n >= 1 && n <= 26))];
    return state;
  } catch {
    storageWarning = 'Progres lama tidak dapat dibaca atau penyimpanan browser dibatasi. Latihan tetap bisa digunakan; ekspor progres sebelum menutup halaman.';
    return emptyState();
  }
}

export function saveState(state) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
    storageWarning = '';
    return true;
  } catch {
    storageWarning = 'Browser tidak dapat menyimpan progres. Perubahan hanya tersedia pada sesi ini. Gunakan ekspor progres untuk menyimpan salinan.';
    return false;
  }
}

export const getStorageWarning = () => storageWarning;
export const sessionKey = (week, day) => `w${week}-d${day}`;
export const checkKey = (week, day, block) => `${sessionKey(week, day)}-b${block}`;
export function checkedBlocks(state, week = state.week, day = state.day) {
  return Array.from({ length: 4 }, (_, block) => state.checks[checkKey(week, day, block)] === true).filter(Boolean).length;
}

export function downloadProgress(state) {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'englishcourse-progres.json';
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
