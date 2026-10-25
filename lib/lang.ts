/**
 * Site language (English / Mongolian), shared by all three pages.
 *
 * Every page has its own EN / МН toggle in the header. The choice is kept in memory so
 * it carries over when you move between pages, and the first server render is always
 * English so the HTML from the server matches the first client render.
 */
export type Lang = 'en' | 'mn';

let current: Lang = 'en';

export function getLang(): Lang {
  return current;
}

export function setLang(lang: Lang): void {
  current = lang;
  if (typeof document !== 'undefined') document.documentElement.lang = lang;
}

/** Picks the English or Mongolian version of a string. */
export const pick =
  (lang: Lang) =>
  <T,>(en: T, mn: T): T =>
    lang === 'en' ? en : mn;

