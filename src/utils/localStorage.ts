/* eslint-disable */
export function localStorageSet(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

export function localStorageGet(key: string): string | null | undefined {
  try {
    return localStorage.getItem(key);
  } catch {}
}
