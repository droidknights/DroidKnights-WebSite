export const Locale = {
  KO: "ko",
  EN: "en",
} as const;
export type Locale = (typeof Locale)[keyof typeof Locale];

export const DEFAULT_LOCALE: Locale = Locale.KO;
export const LOCALES = [Locale.KO, Locale.EN] as const;

export const LOCALE_LABELS: Record<Locale, string> = {
  [Locale.KO]: "한국어",
  [Locale.EN]: "English",
};
