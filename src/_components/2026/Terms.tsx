"use client";

import Image from "next/image";
import Link from "next/link";

import { GlowSection } from "./ui/GlowSection";

export function Terms() {
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
              안드로이드 개발자들의 행사가 궁금하다면?
              <br />
              드로이드나이츠 2026를 만나보세요.
            </h3>
            <div className="flex justify-center">
              <button
                type="button"
                className="from-dk-blue to-dk-purple flex h-[48px] w-[180px] items-center justify-center rounded-full bg-linear-to-r text-sm font-semibold text-white transition-opacity hover:opacity-90 md:h-[64px] md:w-[300px] md:text-xl"
                onClick={() => {
                  navigator.clipboard.writeText("https://droidknights.dev");
                  alert("클립보드에 링크가 복사되었어요.");
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
                <span className="ml-2">주변에 알리기</span>
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-12 text-center md:py-14">
            <h3 className="text-dk-ink mb-6 text-xl leading-[1.5] font-bold md:mb-8 md:text-[32px] md:leading-[1.5]">
              모든 참여자가 행사에
              <br />
              차별없이 참여할 수 있도록 노력할 것을 약속 해주세요.
            </h3>
            <div className="flex justify-center">
              <Link
                href="https://maryang.notion.site/2024-f4c593c4be174647b5b3aa28a0f52490?pvs=4"
                target="_blank"
                className="text-dk-ink flex h-[48px] w-[180px] items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm font-semibold transition-colors hover:bg-white/10 md:h-[64px] md:w-[300px] md:text-xl"
              >
                행동강령 살펴보기 →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </GlowSection>
  );
}
