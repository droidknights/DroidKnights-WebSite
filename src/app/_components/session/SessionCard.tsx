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
            * 강의 일정 및 내용은 상황에 따라 조정될 수 있습니다
          </p>
        </div>
        <div className="grid w-full grid-cols-3 gap-x-1 md:gap-x-3">
          <Tab tabNumber={1} currentTrackNumber={trackNumber} setCurrentTrackNumber={setTrackNumber} />
          <Tab tabNumber={2} currentTrackNumber={trackNumber} setCurrentTrackNumber={setTrackNumber} />
          <Tab tabNumber={3} currentTrackNumber={trackNumber} setCurrentTrackNumber={setTrackNumber} />
        </div>
        <DividerSession />
        <TrackBox track={tracks[trackNumber - 1]} />
      </div>
    </div>
  );
}
