"use client";

import { useLocale, useTranslations } from "next-intl";

import { LOCALES, LOCALE_LABELS } from "@/src/i18n/locales";

import { Link, usePathname } from "../../i18n/navigation";

export function LocaleSwitcher({ className }: { className?: string }) {
  const t = useTranslations("app.common.localeSwitcher");
  const pathname = usePathname();
  const activeLocale = useLocale();

  return (
    <div
      role="group"
      aria-label={t("label")}
      className={`flex items-center gap-0.5 rounded-full border border-white/25 p-0.5 ${className ?? ""}`}
    >
      {LOCALES.map((locale) => {
        const isActive = locale === activeLocale;

        return (
          <Link
            key={locale}
            href={pathname}
            locale={locale}
            hrefLang={locale}
            title={LOCALE_LABELS[locale]}
            aria-current={isActive ? "true" : undefined}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors md:text-sm ${
              isActive ? "bg-white text-black" : "text-white/70 hover:text-white"
            }`}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
