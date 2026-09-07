import type {} from "next-intl";

import app from "./dictionaries/ko/app.json";
import type { Locale } from "./locales";

type Messages = {
  app: typeof app;
};

declare module "next-intl" {
  interface AppConfig {
    Locale: Locale;
    Messages: Messages;
  }
}

type NestedKeyOf<T, Prefix extends string = ""> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends object ? NestedKeyOf<T[K], `${Prefix}${K}.`> : `${Prefix}${K}`;
    }[keyof T & string]
  : never;

type MessageKeys = NestedKeyOf<Messages>;

export type TranslateFunction = (key: MessageKeys, variables?: Record<string, string | number>) => string;
