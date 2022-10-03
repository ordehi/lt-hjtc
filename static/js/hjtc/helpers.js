import { storePath } from './constants.js';

export async function getFileFromStore(filename) {
  const response = await fetch(storePath + filename);
  const json = await response.json();

  return json;
}
