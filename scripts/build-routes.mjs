import { mkdir, readFile, writeFile } from 'node:fs/promises';

const dist = new URL('../dist/', import.meta.url);
const html = await readFile(new URL('index.html', dist));
const steps = ['video', 'input', 'output', 'review', 'ringkasan'];
const references = ['riset', 'sistem', 'kurikulum', 'evaluasi', 'sumber', 'template'];

// GitHub Pages serves each clean URL directly from its own index.html.
async function writeRoute(path) {
  const directory = new URL(path, dist);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL('index.html', directory), html);
}

await writeRoute('belajar/');
for (let week = 1; week <= 26; week += 1) {
  await writeRoute(`belajar/${week}/`);
  for (let day = 1; day <= 7; day += 1) {
    await writeRoute(`belajar/${week}/${day}/`);
    for (const step of steps) {
      await writeRoute(`belajar/${week}/${day}/${step}/`);
    }
  }
}

for (const path of ['silabus/', 'referensi/', 'progres/']) {
  await writeRoute(path);
}
for (const reference of references) {
  await writeRoute(`referensi/${reference}/`);
}
