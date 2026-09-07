"use client";

import { useTranslations } from "next-intl";

import { DividerSession, TrackBox } from "./track/TrackBox";

export const Timetable = () => {
  const t = useTranslations("app.2025.sessions");

  return (
    <section className="bg-[#0F0F0F]">
      <div className="px-6 py-20 md:px-20 md:py-40 lg:px-40">
        <div className="mb-[72px] text-center">
          <h2 className="mb-2 text-sm font-medium text-[#5180FF] md:mb-4 md:text-2xl">{t("eyebrow")}</h2>
          <h3 className="mb-2 text-2xl font-bold text-white md:mb-4 md:text-5xl">{t("title")}</h3>
          <p className="text-sm font-medium text-[#888888] md:text-2xl">{t("notice")}</p>
        </div>
        <div className="mb-[72px]">
          <div className="grid w-full grid-cols-2 gap-0.5">
            <Tab tabNumber={1} />
            <Tab tabNumber={2} />
          </div>
          <DividerSession />
          <TrackBox />
        </div>
        <div>
          <div className="bg-white p-6 text-center font-bold text-black md:text-2xl">{t("program.title")}</div>
          <DividerSession />
          <div className="grid grid-cols-1 gap-0.5 md:grid-cols-3">
            <ProgramItem time={t("program.resumeFeedback1Time")} title={t("program.resumeFeedback1")} />
            <ProgramItem time={t("program.resumeFeedback2Time")} title={t("program.resumeFeedback2")} />
            <ProgramItem time={t("program.conferenceAppTime")} title={t("program.conferenceApp")} />
          </div>
        </div>
      </div>
    </section>
  );
};

function ProgramItem({ time, title }: { time: string; title: string }) {
  return (
    <div className="h-full bg-white/10 p-6 text-left">
      <p className="mb-2 text-[13px] font-bold text-[#5180FF] md:text-base">{time}</p>
      <p className="font-bold text-white md:text-xl">{title}</p>
    </div>
  );
}

function Tab({ tabNumber }: { tabNumber: number }) {
  const t = useTranslations("app.2025.sessions");

  return (
    <div className="bg-white p-6 text-center font-bold text-black md:text-2xl">{t("track", { number: tabNumber })}</div>
  );
}
