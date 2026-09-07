"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

import { SectionHeading } from "./ui/SectionHeading";

export function LastEvent() {
  const t = useTranslations("app.2026.lastEvent");

  return (
    <section className="from-dk-surface to-dk-navy relative overflow-hidden border-t border-white/5 bg-linear-to-b">
      <Image
        src="/2026/mascot-cheer.png"
        alt=""
        width={140}
        height={140}
        aria-hidden
        className="pointer-events-none absolute top-8 right-4 hidden w-[120px] opacity-90 drop-shadow-[0_16px_34px_rgba(123,92,255,0.5)] md:block md:w-[140px]"
      />
      <div className="pt-24 md:pt-40">
        <div className="mb-8 px-6 md:mb-12">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        </div>
        <div className="mx-auto w-full max-w-[1120px] px-6 md:px-10">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-[0_30px_80px_rgba(11,18,48,0.6)]">
            <iframe
              width="0"
              height="0"
              src="https://www.youtube.com/embed/0RwSrEBW_dQ?si=DW_-_jI983C2u08a"
              title={t("videoTitle")}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="h-[212px] w-full md:h-[443px] xl:h-[600px]"
            />
          </div>
        </div>
        <div className="h-24 md:h-40" />
      </div>
    </section>
  );
}
