const DATABASE = 'englishcourse-portfolio-audio';
const STORE = 'recordings';
export const MAX_AUDIO_BYTES = 15 * 1024 * 1024;

function openDatabase() {
  return new Promise((resolve, reject) => {
    if (!globalThis.indexedDB) {
      reject(new Error('Penyimpanan audio IndexedDB tidak tersedia di browser ini.'));
      return;
    }
    const request = indexedDB.open(DATABASE, 1);
    let blocked = false;
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(STORE)) request.result.createObjectStore(STORE, { keyPath: 'id' });
    };
    request.onsuccess = () => {
      if (blocked) request.result.close();
      else resolve(request.result);
    };
    request.onerror = () => reject(new Error('Penyimpanan audio tidak dapat dibuka. File asli belum berubah.'));
    request.onblocked = () => {
      blocked = true;
      reject(new Error('Penyimpanan audio terkunci oleh tab lain. Tutup tab lain lalu coba lagi.'));
    };
  });
}

async function transact(mode, operation) {
  const database = await openDatabase();
  return new Promise((resolve, reject) => {
    let result;
    let transaction;
    try {
      transaction = database.transaction(STORE, mode);
      const request = operation(transaction.objectStore(STORE));
      request.onsuccess = () => { result = request.result; };
      transaction.oncomplete = () => { database.close(); resolve(result); };
      transaction.onerror = transaction.onabort = () => {
        database.close();
        reject(new Error('Audio tidak dapat dibaca atau disimpan. Penyimpanan mungkin penuh atau dibatasi.'));
      };
    } catch {
      database.close();
      reject(new Error('Penyimpanan audio tidak tersedia. File asli belum berubah.'));
    }
  });
}

export async function putAudio(id, blob, name = 'rekaman') {
  if (!(blob instanceof Blob) || blob.size === 0 || blob.size > MAX_AUDIO_BYTES || !blob.type.startsWith('audio/')) {
    throw new Error('Pilih file audio yang tidak kosong, maksimal 15 MiB.');
  }
  await transact('readwrite', store => store.put({ id, blob, name, createdAt: new Date().toISOString() }));
}

export function readAudio(id) {
  return transact('readonly', store => store.get(id));
}

export function deleteAudio(id) {
  return transact('readwrite', store => store.delete(id));
}

export function clearAudio() {
  return transact('readwrite', store => store.clear());
}
