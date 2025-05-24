"use client";

import { useState } from "react";

import { tracks } from "@/src/_models/2025/sessions/Tracks";

import { DividerSession, TrackBox } from "./track/TrackBox";

export const Timetable = () => {
  const [trackNumber, setTrackNumber] = useState(1);
  return (
    <section className="bg-[#0F0F0F]">
      <div className="px-6 py-20 md:px-20 md:py-40 lg:px-40">
        <div className="mb-[72px] text-center">
          <h2 className="mb-2 text-sm font-medium text-[#5180FF] md:mb-4 md:text-2xl">SESSION</h2>
          <h3 className="mb-2 text-2xl font-bold text-white md:mb-4 md:text-5xl">원하는 세션을 만나보세요</h3>
          <p className="text-sm font-medium text-[#888888] md:text-2xl">
            * 세션 일정 및 내용은 상황에 따라 조정될 수 있습니다
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-0.5">
          <Tab tabNumber={1} />
          <Tab tabNumber={2} />
        </div>
        <DividerSession />
        <TrackBox />
      </div>
    </section>
  );
};

function Tab({ tabNumber }: { tabNumber: number }) {
  return <div className="bg-white p-6 text-center font-bold text-black md:text-2xl">{`Track ${tabNumber}`}</div>;
}
