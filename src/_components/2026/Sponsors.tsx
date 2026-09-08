"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { Level, Sponsor, levelOrder, sponsorsByLevel } from "@/src/_models/2026/Sponsors";

import { GlowSection } from "./ui/GlowSection";
import { SectionHeading } from "./ui/SectionHeading";
import { Sparkle } from "./ui/Sparkle";

// Tier accents: number of sparkles (SPECIAL is the lowest tier and gets none) + the tier label colour.
const TIER: Record<Level, { sparkles: number; text: string; glow: string }> = {
  [Level.PLATINUM]: { sparkles: 3, text: "text-dk-lavender", glow: "rgba(177,140,255,0.85)" },
  [Level.GOLD]: { sparkles: 2, text: "text-dk-lavender", glow: "rgba(177,140,255,0.7)" },
  [Level.SILVER]: { sparkles: 1, text: "text-dk-subtle", glow: "rgba(185,198,232,0.7)" },
  [Level.SPECIAL]: { sparkles: 0, text: "text-dk-subtle", glow: "rgba(185,198,232,0.7)" },
};

export function Sponsors() {
  const t = useTranslations("app.2026.sponsor");
  const levels = levelOrder.filter((level) => sponsorsByLevel[level].length > 0);

  return (
    <GlowSection tone="space" glow="purple" sparkles className="border-t border-white/5">
      <div className="px-6 py-24 md:px-10 md:py-40">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} sub={t("subtitle")} className="mb-12 md:mb-20" />
        <div className="mx-auto flex max-w-[1040px] flex-col gap-14 md:gap-[72px]">
          {levels.map((level) => (
            <SponsorGroup key={level} level={level} label={t(`levels.${level}`)} logoAlt={t("logoAlt")} />
          ))}
        </div>
      </div>
    </GlowSection>
  );
}

function SponsorGroup({ level, label, logoAlt }: { level: Level; label: string; logoAlt: string }) {
  const sponsors: Sponsor[] = sponsorsByLevel[level];
  const tier = TIER[level];

  return (
    <div>
      {tier.sparkles > 0 && (
        <div className="mb-2 flex justify-center gap-1.5">
          {Array.from({ length: tier.sparkles }).map((_, idx) => (
            <Sparkle
              key={idx}
              className={`${tier.text} h-4 w-4 md:h-6 md:w-6`}
              style={{ filter: `drop-shadow(0 0 8px ${tier.glow})` }}
            />
          ))}
        </div>
      )}
      <p className={`font-display ${tier.text} mb-4 text-center text-xl font-bold tracking-[0.18em] md:text-3xl`}>
        {label}
      </p>
      <div className="mb-8 h-px w-full bg-linear-to-r from-transparent via-white/25 to-transparent md:mb-10" />
      <div className="flex flex-wrap justify-center gap-5 md:gap-6">
        {sponsors.map((sponsor) => (
          <Link
            href={sponsor.link}
            key={sponsor.logo}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={sponsor.name}
            className="w-full max-w-[420px] flex-1 basis-[280px]"
          >
            <div className="flex h-[104px] w-full items-center justify-center rounded-2xl border border-white/10 bg-white px-8 shadow-[0_20px_50px_rgba(11,18,48,0.55)] transition-transform duration-200 hover:-translate-y-1 md:h-[136px] md:px-12">
              <Image
                src={`/2026/sponsors/${sponsor.logo}`}
                alt={`${sponsor.name} ${logoAlt}`}
                width={0}
                height={0}
                sizes="(min-width: 768px) 420px, 100vw"
                className="max-h-full w-full object-contain"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
