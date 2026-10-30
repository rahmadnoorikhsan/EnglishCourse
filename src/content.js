import researchMarkdown from '../01-RISET.md?raw';
import systemMarkdown from '../02-SISTEM-BELAJAR.md?raw';
import curriculumMarkdown from '../03-KURIKULUM-26-MINGGU.md?raw';
import evaluationMarkdown from '../04-EVALUASI.md?raw';
import sourcesMarkdown from '../05-SUMBER.md?raw';
import templatesMarkdown from '../06-TEMPLATE.md?raw';

function requireContent(condition, message) {
  if (!condition) throw new Error(`[EnglishCourse content] ${message}`);
}

export const documents = [
  ['riset', '01-RISET.md', 'Dasar riset, batas target enam bulan, dan keputusan belajar.', researchMarkdown],
  ['sistem', '02-SISTEM-BELAJAR.md', 'Rutinitas harian, pembagian waktu, dan latihan empat keterampilan.', systemMarkdown],
  ['kurikulum', '03-KURIKULUM-26-MINGGU.md', 'Urutan 26 minggu yang mengikuti kesiapan, bukan sekadar kalender.', curriculumMarkdown],
  ['evaluasi', '04-EVALUASI.md', 'Baseline, evaluasi mingguan, dan gate berbasis bukti kemampuan.', evaluationMarkdown],
  ['sumber', '05-SUMBER.md', 'Tautan materi terpilih, kode kurikulum, dan batas akses sumber.', sourcesMarkdown],
  ['template', '06-TEMPLATE.md', 'Format praktis untuk log, feedback, evaluasi, dan portofolio.', templatesMarkdown],
].map(([id, file, description, markdown]) => {
  const heading = markdown.match(/^# (.+)$/m);
  requireContent(heading, `${file}: judul dokumen tidak ditemukan.`);
  return { id, file, title: heading[1], description, markdown };
});

// These source tables use unescaped pipes as column boundaries. Keep Markdown
// inside each cell intact; rendering and sanitization belong to the view layer.
function tableCells(line) {
  return line.trim().slice(1, -1).split('|').map((cell) => cell.trim());
}

function readTable(lines, header, columns, label) {
  const start = lines.findIndex((line) => line.trim() === header);
  requireContent(start !== -1, `${label}: header tabel tidak ditemukan.`);
  const separator = lines[start + 1];
  requireContent(
    separator && /^\|(?:\s*:?-+:?\s*\|)+$/.test(separator.trim())
      && tableCells(separator).length === columns,
    `${label}: pemisah tabel tidak valid.`,
  );
  const rows = [];
  for (let index = start + 2; index < lines.length && lines[index].trim().startsWith('|'); index += 1) {
    const line = lines[index].trim();
    const cells = tableCells(line);
    requireContent(line.endsWith('|') && cells.length === columns && cells.every(Boolean), `${label}: baris tabel tidak valid.`);
    rows.push(cells);
  }
  return rows;
}

const curriculumLines = curriculumMarkdown.split(/\r?\n/);
const dayRows = readTable(
  curriculumLines,
  '| Hari | Bentuk bahasa, 45 menit | Input, 45 menit | Output, 45 menit | Kelancaran + log, 45 menit |',
  5,
  'Minggu pertama',
);
requireContent(dayRows.length === 7, 'Minggu pertama harus memuat tujuh hari.');
export const days = dayRows.map(([day, ...blocks], index) => {
  requireContent(day === String(index + 1), 'Nomor hari minggu pertama harus berurutan 1–7.');
  return { number: index + 1, blocks };
});

const expectedRanges = [[1, 4], [5, 8], [9, 13], [14, 18], [19, 23], [24, 26]];
const phaseHeadings = [];
for (const [index, line] of curriculumLines.entries()) {
  const match = line.match(/^## Fase (\d+) — (.+)$/);
  if (match) phaseHeadings.push({ index, number: Number(match[1]), title: match[2] });
}
requireContent(phaseHeadings.length === 6, 'Kurikulum harus memuat enam fase.');

export const phases = [];
export const weeks = [];
for (const [index, heading] of phaseHeadings.entries()) {
  requireContent(heading.number === index + 1, 'Nomor fase harus berurutan 1–6.');
  const [start, end] = expectedRanges[index];
  const sectionEnd = phaseHeadings[index + 1]?.index ?? curriculumLines.length;
  const rows = readTable(
    curriculumLines.slice(heading.index + 1, sectionEnd),
    '| Minggu | Fokus fungsi dan bentuk | Materi/input | Hasil yang dibuat |',
    4,
    `Fase ${heading.number}`,
  );
  requireContent(rows.length === end - start + 1, `Fase ${heading.number}: jumlah minggu tidak sesuai.`);
  phases.push({ number: heading.number, title: heading.title, start, end });
  for (const [rowIndex, [week, focus, materials, outcome]] of rows.entries()) {
    const number = start + rowIndex;
    requireContent(week === String(number), `Fase ${heading.number}: nomor minggu harus berurutan ${start}–${end}.`);
    weeks.push({
      number,
      phase: heading.number,
      phaseTitle: heading.title,
      title: focus.split(';', 1)[0],
      focus,
      materials,
      outcome,
    });
  }
}
requireContent(weeks.length === 26, 'Kurikulum harus memuat tepat 26 minggu.');

const sourceLines = sourcesMarkdown.split(/\r?\n/);
const expectedResourceCodes = [
  ...Array.from({ length: 12 }, (_, index) => `E${String(index + 1).padStart(2, '0')}`),
  'L1', 'L2', 'L3', 'L4', 'R1', 'R2', 'R3', 'R4', 'G1', 'B1E',
  'V1', 'V2', 'S1', 'R1a', 'R1b', 'L1a',
];
const expectedCodeSet = new Set(expectedResourceCodes);
const resourceCodes = new Set();
const resourceUrls = new Set();
export const resources = [];

function addResource(code, title, url) {
  requireContent(!resourceCodes.has(code), `Kode sumber duplikat: ${code}.`);
  resourceCodes.add(code);
  resourceUrls.add(url);
  resources.push({ code, title, url });
}

function markdownLinks(text) {
  return text.matchAll(/\[([^\]\n]+)\]\((https?:\/\/[^\s)]+)\)/g);
}

// Read full codes rather than extracting a level such as B1 from B1E.
for (const line of sourceLines) {
  let code;
  let content;
  if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
    const cells = tableCells(line);
    if (expectedCodeSet.has(cells[0])) [code, content] = cells;
  } else {
    const entry = line.match(/^- (V[12]|S1|R1[ab]|L1a): (.+)$/);
    if (entry) [, code, content] = entry;
  }
  if (!code) continue;
  const links = [...markdownLinks(content)];
  requireContent(links.length === 1, `Sumber ${code}: satu tautan pelajaran diharapkan.`);
  addResource(code, links[0][1], links[0][2]);
}
for (const code of expectedResourceCodes) {
  requireContent(resourceCodes.has(code), `Sumber wajib tidak ditemukan: ${code}.`);
}

// Include other direct links actually recorded in 05-SUMBER only. A repeated
// link keeps its existing curriculum code instead of becoming a duplicate card.
let directLinkNumber = 0;
for (const [, title, url] of markdownLinks(sourcesMarkdown)) {
  if (resourceUrls.has(url)) continue;
  directLinkNumber += 1;
  addResource(`LINK${String(directLinkNumber).padStart(2, '0')}`, title, url);
}
