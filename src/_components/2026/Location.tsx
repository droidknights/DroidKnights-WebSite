"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { GlowSection } from "./ui/GlowSection";
import { SectionHeading } from "./ui/SectionHeading";

export function Location() {
  const t = useTranslations("app.2026.location");

  return (
    <GlowSection tone="surface" glow="blue" className="border-t border-white/5">
      {/* mascot accent */}
      <Image
        src="/2026/mascot-point.png"
        alt=""
        width={150}
        height={150}
        aria-hidden
        className="pointer-events-none absolute top-8 right-4 hidden w-[110px] opacity-90 drop-shadow-[0_16px_34px_rgba(45,123,255,0.45)] md:block md:w-[150px]"
      />
      <div className="px-6 py-24 md:px-10 md:py-40">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} className="mb-8 md:mb-12" />

        <div className="mb-9 flex flex-col items-center gap-3 md:mb-[72px] md:flex-row md:justify-center md:gap-8">
          <div className="text-dk-subtle flex items-center gap-2 md:gap-3">
            <img src="/2025/date.svg" alt={t("dateIconAlt")} className="h-5 w-5 md:h-8 md:w-8" />
            <span className="text-sm font-semibold md:text-xl">{t("date")}</span>
          </div>
          <div className="text-dk-subtle flex items-center gap-2 md:gap-3">
            <img src="/2025/map_pin.svg" alt={t("placeIconAlt")} className="h-5 w-5 md:h-8 md:w-8" />
            <span className="text-sm font-semibold md:text-xl">{t("place")}</span>
          </div>
        </div>

        <div className="mx-auto mb-9 w-full max-w-[1040px] overflow-hidden rounded-3xl border border-white/10 md:mb-[72px]">
          <iframe
            title={t("mapTitle")}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.3058956406403!2d127.02817037585159!3d37.50070287205586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca11641de4cab%3A0x19235e823c73b149!2z6rO87ZWZ6riw7Iig7Luo67Kk7IWY7IS87YSwKFNUIENlbnRlcik!5e0!3m2!1sko!2skr!4v1745217050097!5m2!1sko!2skr"
            width="0"
            height="0"
            className="h-[200px] w-full md:h-[400px] xl:h-[620px]"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
        <div className="flex justify-center">
          <Link
            href="https://maps.app.goo.gl/2fgZFyCwokaQWM6U7"
            target="_blank"
            className="from-dk-blue to-dk-purple flex h-[60px] w-full items-center justify-center rounded-full bg-linear-to-r font-semibold text-white transition-opacity hover:opacity-90 md:h-[72px] md:w-[448px] md:text-xl"
          >
            {t("directions")}
          </Link>
        </div>
      </div>
    </GlowSection>
  );
}
