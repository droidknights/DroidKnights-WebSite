"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { GlowSection } from "./ui/GlowSection";

export function Terms() {
  const t = useTranslations("app.2026.terms");

  return (
    <GlowSection tone="space" glow="purple" sparkles className="border-t border-white/5">
      <Image
        src="/2026/mascot-welcome.png"
        alt=""
        width={120}
        height={120}
        aria-hidden
        className="pointer-events-none absolute top-8 right-4 hidden w-[96px] opacity-90 drop-shadow-[0_14px_30px_rgba(123,92,255,0.5)] md:block md:w-[120px]"
      />
      <div className="px-6 py-24 md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[950px]">
          <div className="mb-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-12 text-center md:mb-8 md:py-14">
            <h3 className="text-dk-ink mb-6 text-xl leading-[1.5] font-bold md:mb-8 md:text-[32px] md:leading-[1.5]">
              {t.rich("share.title", { br: () => <br /> })}
            </h3>
            <div className="flex justify-center">
              <button
                type="button"
                className="from-dk-blue to-dk-purple flex h-[48px] w-[180px] items-center justify-center rounded-full bg-linear-to-r text-sm font-semibold text-white transition-opacity hover:opacity-90 md:h-[64px] md:w-[300px] md:text-xl"
                onClick={() => {
                  navigator.clipboard.writeText("https://droidknights.dev");
                  alert(t("share.copied"));
                }}
              >
                <Image
                  src="/2024/share.svg"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[16px] md:w-[22px]"
                />
                <span className="ml-2">{t("share.button")}</span>
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-12 text-center md:py-14">
            <h3 className="text-dk-ink mb-6 text-xl leading-[1.5] font-bold md:mb-8 md:text-[32px] md:leading-[1.5]">
              {t.rich("codeOfConduct.title", { br: () => <br /> })}
            </h3>
            <div className="flex justify-center">
              <Link
                href="https://maryang.notion.site/2024-f4c593c4be174647b5b3aa28a0f52490?pvs=4"
                target="_blank"
                className="text-dk-ink flex h-[48px] w-[180px] items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm font-semibold transition-colors hover:bg-white/10 md:h-[64px] md:w-[300px] md:text-xl"
              >
                {t("codeOfConduct.button")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </GlowSection>
  );
}
