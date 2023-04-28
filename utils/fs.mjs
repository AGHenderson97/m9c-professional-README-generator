import { writeFile } from 'fs/promises';

export async function writeToFile(fileName, data) {
  try {
    await writeFile(fileName, data);
  } catch (error) {
    console.error(error);
  }
}
