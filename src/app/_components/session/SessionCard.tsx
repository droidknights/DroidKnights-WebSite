"use client";

import { track1, tracks } from "@/app/_interface/Sessions";
import { useState } from "react";
import { DividerSession, TrackBox } from "./TrackBox";

function Tab({
  tabNumber,
  currentTrackNumber,
  setCurrentTrackNumber,
}: {
  tabNumber: number;
  currentTrackNumber: number;
  setCurrentTrackNumber: (trackNumber: number) => void;
}) {
  return (
    <div
      className={`cursor-pointer rounded-t-[20px] py-3 font-bold md:py-5 md:text-xl ${tabNumber === currentTrackNumber ? "bg-white text-black" : "bg-blue/20 text-white"}`}
      onClick={() => setCurrentTrackNumber(tabNumber)}
    >
      Track {tabNumber}
    </div>
  );
}

export function SessionCard() {
  const [trackNumber, setTrackNumber] = useState(1);
  return (
    <div className="flex justify-center bg-black">
      <div className="flex w-full flex-col items-center px-6 py-20 text-center md:px-20 md:py-40 xl:px-40">
        <div className="mb-[72px] text-center">
          <p className="mb-2 text-sm font-medium text-blue-light md:mb-4 md:text-2xl">SESSION</p>
          <p className="mb-2 text-2xl font-bold text-white md:mb-4 md:text-5xl xl:text-6xl">
            3가지 세션 트랙을 만나보세요
          </p>
          <p className="text-sm font-medium text-grey-light md:text-2xl">
            * 세션 일정 및 내용은 상황에 따라 조정될 수 있습니다
          </p>
        </div>
        <div className="grid w-full grid-cols-3 gap-x-1 md:gap-x-3">
          <Tab tabNumber={1} currentTrackNumber={trackNumber} setCurrentTrackNumber={setTrackNumber} />
          <Tab tabNumber={2} currentTrackNumber={trackNumber} setCurrentTrackNumber={setTrackNumber} />
          <Tab tabNumber={3} currentTrackNumber={trackNumber} setCurrentTrackNumber={setTrackNumber} />
        </div>
        <DividerSession />
        <TrackBox track={tracks[trackNumber - 1]} />
        <div className="mt-10 text-left text-white md:mt-[72px]">
          <div className="mb-4 text-2xl font-bold md:mb-6 md:text-5xl">특별 세션 지원자 모집</div>
          <div className="mb-2 text-xl font-semibold md:mb-3 md:text-2xl">
            1. 이력서 / 포트폴리오 지원자 모집 (
            <a href="https://forms.gle/DdPw6bof4bW45LTz8" target="_blank" className="text-red-600">
              지원하기
            </a>
            )
          </div>
          <div className="mb-4 md:mb-8 md:text-xl">
            <p className="mb-0.5">
              드로이드나이츠2024에서 여러분의 경력을 한 단계 업그레이드할 수 있는 특별한 기회를 제공합니다.
            </p>
            <p className="mb-0.5">
              <b>이력서와 포트폴리오에 대한 전문적인 피드백을 받고 싶으신 분들을 위한 세션</b>을 마련했습니다.
            </p>
            <p className="mb-0.5">드로이드나이츠 운영진들이 직접 이력서/포트폴리오를 검토하고 피드백 드립니다.</p>
            <p className="mb-0.5">
              <b>선정되신 분들께는 드로이드나이츠 티켓을 제공해드립니다.</b> (굿즈 제외)
            </p>
          </div>
          <div className="mb-2 text-xl font-semibold md:mb-3 md:text-2xl">
            2. 라이트닝토크 지원자 모집 (
            <a href="https://forms.gle/E7hdXx2UyGXR3AZh8" target="_blank" className="text-red-600">
              지원하기
            </a>
            )
          </div>
          <div className="md:text-xl">
            <p className="mb-0.5">발표 경험을 쌓고 싶지만 대규모 세션에서의 발표는 부담스럽다고 느끼시나요?</p>
            <p className="mb-0.5">저희가 준비한 라이트닝 토크 세션에 주목해 주세요.</p>
            <p className="mb-0.5">
              이번 행사에서는 안드로이드 개발자 커뮤니티의 일원으로서, 단 10분 동안 자신의 경험, 지식, 아이디어를 공유할
              수 있는 기회를 제공합니다.
            </p>
            <p className="mb-0.5">
              <b>선정되신 분들께는 드로이드나이츠 티켓을 제공해드립니다.</b> (굿즈 제외)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
