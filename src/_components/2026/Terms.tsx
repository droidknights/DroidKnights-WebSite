"use client";

import Image from "next/image";
import Link from "next/link";

export function Terms() {
  return (
    <section className="bg-[url('/2025/bg_terms.png')] bg-cover bg-center bg-no-repeat">
      <div className="px-6 py-10 md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[950px]">
          <div className="mb-8 rounded-[10px] bg-white/15 px-6 py-10 text-center md:mb-10">
            <h3 className="mb-4 text-center leading-normal font-bold text-white md:mb-8 md:text-[32px] md:leading-normal">
              안드로이드 개발자들의 행사가 궁금하다면?
              <br />
              드로이드나이츠 2026를 만나보세요.
            </h3>
            <div className="flex justify-center">
              <button
                type="button"
                className="flex h-[39px] w-[138px] items-center justify-center rounded bg-linear-to-r from-[#5180FF] to-[#215BF6] text-xs font-semibold text-white md:h-[64px] md:w-[300px] md:text-xl"
                onClick={() => {
                  navigator.clipboard.writeText("https://droidknights.dev");
                  alert("클립보드에 링크가 복사되었어요.");
                }}
              >
                <Image
                  src="/2024/share.svg"
                  alt="share"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[16px] md:w-[24px]"
                />
                <span className="ml-1 md:ml-2">주변에 알리기</span>
              </button>
            </div>
          </div>
          <div className="rounded-[10px] bg-white/15 px-6 py-10 text-center md:mb-10">
            <h3 className="mb-4 text-center leading-normal font-bold text-white md:mb-8 md:text-[32px] md:leading-normal">
              모든 참여자가 행사에
              <br />
              차별없이 참여할 수 있도록 노력할 것을 약속 해주세요.
            </h3>
            <div className="flex justify-center">
              <Link
                href="https://maryang.notion.site/2024-f4c593c4be174647b5b3aa28a0f52490?pvs=4"
                target="_blank"
                className="flex h-[39px] w-[138px] items-center justify-center rounded bg-white text-xs font-semibold md:h-[64px] md:w-[300px] md:text-xl"
              >
                행동강령 살펴보기 →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
