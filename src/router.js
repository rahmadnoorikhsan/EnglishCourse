const steps = ['video', 'input', 'output', 'review', 'ringkasan'];
const base = import.meta.env?.BASE_URL || '/';
const pages = { 'hari-ini': 'belajar', kurikulum: 'silabus', panduan: 'referensi', progres: 'progres' };

// Internal content identifiers stay independent of public URL labels.
export function routeHref(path) {
  const [page, ...parts] = path.split('/');
  if (page === 'hari-ini' && parts[2]) parts[2] = steps[Number(parts[2]) - 1];
  const anchor = page === 'panduan' ? parts.splice(1).join('/') : '';
  return `${base}${[pages[page], ...parts].filter(Boolean).join('/')}/${anchor ? '#' + anchor : ''}`;
}

export function readRoute(url) {
  if (!url.pathname.startsWith(base)) return null;
  const path = url.pathname.slice(base.length).replace(/\/$/, '');
  const [page = '', ...parts] = path.split('/');
  if (!page && !parts.length) return { parts: ['hari-ini'], anchor: '' };
  const internal = Object.keys(pages).find(key => pages[key] === page);
  if (!internal) return null;
  if (internal === 'hari-ini') {
    if (parts.length > 3 || (parts[0] && !/^(?:[1-9]|1\d|2[0-6])$/.test(parts[0])) || (parts[1] && !/^[1-7]$/.test(parts[1])) || (parts[2] && !steps.includes(parts[2]))) return null;
    if (parts[2]) parts[2] = String(steps.indexOf(parts[2]) + 1);
  } else if (parts.length > (internal === 'panduan' ? 1 : 0)) return null;
  let anchor;
  try { anchor = decodeURIComponent(url.hash.slice(1)); } catch { return null; }
  return { parts: [internal, ...parts], anchor };
}
