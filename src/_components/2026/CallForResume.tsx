"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

import { RESUME_APPLY_LINK } from "@/src/_models/2026/Session";

import { GlowSection } from "./ui/GlowSection";
import { Sparkle } from "./ui/Sparkle";

/** 사전(app.2026.callForResume.specs)에 정의된 모집 조건. 노출 순서를 함께 정의한다. */
const SPEC_KEYS = ["selection", "benefit", "deadline"] as const;

export function CallForResume() {
  const t = useTranslations("app.2026.callForResume");

  return (
    <GlowSection tone="surface" glow="purple" className="border-t border-white/5">
      <div className="mx-auto max-w-[1160px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center md:gap-16">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <Sparkle className="text-dk-lavender h-4 w-4 md:h-5 md:w-5" />
              <span className="font-display text-dk-lavender text-xs font-semibold tracking-[0.22em] uppercase md:text-base">
                {t("eyebrow")}
              </span>
            </div>
            <h3 className="font-kr text-dk-ink text-2xl leading-[1.32] font-black tracking-[-0.02em] md:text-4xl md:leading-[1.3]">
              {t.rich("title", {
                highlight: (chunks) => (
                  <span className="from-dk-blue to-dk-lavender bg-linear-to-r bg-clip-text text-transparent">
                    {chunks}
                  </span>
                ),
              })}
            </h3>
            <p className="font-kr text-dk-subtle mt-5 text-base leading-[1.8] md:text-lg">
              {t.rich("description", { br: () => <br /> })}
            </p>
          </div>

          <div className="flex flex-col items-start gap-6">
            <dl className="w-full">
              {SPEC_KEYS.map((key) => (
                <div key={key} className="flex items-baseline gap-4 border-b border-white/10 py-3 last:border-b-0">
                  <dt className="font-code text-dk-muted w-9 shrink-0 text-xs">{t(`specs.${key}.label`)}</dt>
                  <dd
                    className={`text-sm md:text-base ${key === "deadline" ? "text-dk-lavender font-bold" : "text-dk-ink"}`}
                  >
                    {t(`specs.${key}.value`)}
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              href={RESUME_APPLY_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className="from-dk-blue to-dk-purple inline-flex items-center gap-2 rounded-full bg-linear-to-br px-6 py-3 text-sm font-bold text-white shadow-[0_6px_18px_rgba(45,123,255,0.35)] transition-opacity hover:opacity-90 md:text-base"
            >
              {t("apply")}
              <span aria-hidden>→</span>
            </Link>

            <p className="font-kr text-dk-muted max-w-[46ch] text-xs leading-[1.75] md:text-sm">{t("note")}</p>
          </div>
        </div>
      </div>
    </GlowSection>
  );
}
