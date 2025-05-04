import { stat, writeFile } from 'node:fs/promises';

export const initializeVervalCookieFile = async (file: string) => {
  const statfile = await stat(file).catch(() => undefined);
  if (!statfile) {
    await writeFile(file, '');
    return true;
  }

  return true;
};
