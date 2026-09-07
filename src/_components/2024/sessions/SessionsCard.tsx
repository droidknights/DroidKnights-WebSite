"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import { tracks } from "@/src/_models/2024/Sessions";

import { SpecialSessionBox } from "./SpecialSessionBox";
import { DividerSession, TrackBox } from "./track/TrackBox";

function Tab({
  tabNumber,
  currentTrackNumber,
  setCurrentTrackNumber,
}: {
  tabNumber: number;
  currentTrackNumber: number;
  setCurrentTrackNumber: (trackNumber: number) => void;
}) {
  const t = useTranslations("app.2024.sessions");

  return (
    <div
      className={`cursor-pointer rounded-t-[20px] py-3 font-bold md:py-5 md:text-xl ${tabNumber === currentTrackNumber ? "bg-white text-black" : "bg-[#4CBCFF]/20 text-white"}`}
      onClick={() => setCurrentTrackNumber(tabNumber)}
    >
      {t("track", { number: tabNumber })}
    </div>
  );
}

export function SessionCard() {
  const t = useTranslations("app.2024.sessions");
  const [trackNumber, setTrackNumber] = useState(1);

  return (
    <section className="flex justify-center bg-black">
      <div className="flex w-full flex-col items-center px-6 py-20 text-center md:px-20 md:py-40 xl:px-40">
        <div className="mb-[72px] text-center">
          <h2 className="mb-2 text-sm font-medium text-[#46A7E0] md:mb-4 md:text-2xl">{t("eyebrow")}</h2>
          <h3 className="mb-2 text-2xl font-bold text-white md:mb-4 md:text-5xl xl:text-6xl">{t("title")}</h3>
          <p className="text-sm font-medium text-[#888888] md:text-2xl">{t("notice")}</p>
        </div>
        <div className="grid w-full grid-cols-3 gap-x-1 md:gap-x-3">
          <Tab tabNumber={1} currentTrackNumber={trackNumber} setCurrentTrackNumber={setTrackNumber} />
          <Tab tabNumber={2} currentTrackNumber={trackNumber} setCurrentTrackNumber={setTrackNumber} />
          <Tab tabNumber={3} currentTrackNumber={trackNumber} setCurrentTrackNumber={setTrackNumber} />
        </div>
        <DividerSession />
        <TrackBox track={tracks[trackNumber - 1]} className="mb-[72px]" />
        <SpecialSessionBox />
      </div>
    </section>
  );
}
