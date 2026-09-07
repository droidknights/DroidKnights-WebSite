"use client";

import { useTranslations } from "next-intl";

import { GlowSection } from "./ui/GlowSection";
import { Sparkle } from "./ui/Sparkle";

export function Description() {
  const t = useTranslations("app.2026.description");

  return (
    <GlowSection tone="space" glow="purple" sparkles>
      <div className="mx-auto max-w-[1366px] px-6 py-24 text-center md:px-20 md:py-40">
        <div className="mb-5 flex items-center justify-center gap-2.5 md:mb-6">
          <Sparkle className="text-dk-lavender h-4 w-4 md:h-5 md:w-5" />
          <span className="font-display text-dk-lavender text-xs font-semibold tracking-[0.22em] uppercase md:text-base">
            {t("eyebrow")}
          </span>
        </div>
        <h1 className="text-3xl leading-[1.3] font-black tracking-[-0.01em] md:text-6xl md:leading-[1.25]">
          {t.rich("title", {
            br: () => <br />,
            highlight: (chunks) => (
              <span className="from-dk-blue to-dk-lavender bg-linear-to-r bg-clip-text text-transparent">{chunks}</span>
            ),
          })}
        </h1>
        <p className="text-dk-muted mx-auto mt-6 max-w-[640px] text-base leading-[1.6] md:mt-8 md:text-xl">
          {t.rich("subtitle", { br: () => <br /> })}
        </p>
      </div>
    </GlowSection>
  );
}
