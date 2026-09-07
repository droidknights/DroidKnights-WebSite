import { useTranslations } from "next-intl";

import { COUNT_BEFORE_LUNCH, tracks } from "@/src/_models/2025/sessions/Tracks";

import { SessionItem } from "./SessionItem";

export const TrackBox = () => {
  const t = useTranslations("app.2025.sessions");

  return (
    <div className="w-full">
      <Breaktime title={t("registration")} time={t("registrationTime")} />
      <DividerSession />
      <Breaktime title={t("keynote")} time={t("keynoteTime")} className="bg-white/10" />
      <DividerSession />
      <div className="grid grid-cols-2 gap-x-0.5">
        {tracks[0].map((session, index) => (
          <div key={`track-row-${index}`} className="contents">
            <SessionItem session={tracks[0][index]} />
            <SessionItem session={tracks[1][index]} />
            <div className="col-span-2">
              <DividerSession />
            </div>
            {index === COUNT_BEFORE_LUNCH - 1 && (
              <div className="col-span-2">
                <Breaktime title={t("lunch")} time={t("lunchTime")} />
                <DividerSession />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const DividerSession = () => {
  return <div className="h-px w-full bg-white/60" />;
};

const Breaktime = ({ title, time, className }: { title: string; time: string; className?: string }) => {
  return (
    <div className={`flex h-[64px] items-center justify-center bg-[#215BF6] px-4 ${className}`}>
      <p className="text-sm font-bold text-white md:text-xl">{title}</p>
      <p className="ml-2.5 text-sm font-bold text-[#FAFAFA]/60 md:text-xl">{time}</p>
    </div>
  );
};
