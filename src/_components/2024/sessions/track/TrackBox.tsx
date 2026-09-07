import { useTranslations } from "next-intl";

import { COUNT_BEFORE_LUNCH, Track } from "@/src/_models/2024/Sessions";

import { SessionBox } from "./SessionBox";

export function DividerSession() {
  return <div className="h-px w-full bg-white/60" />;
}

function BreakTimeBox({ time, title, starAlt }: { time: string; title: string; starAlt: string }) {
  return (
    <div className="my-[5px] flex items-center justify-center bg-[#4CBCFF] px-4 py-2.5 md:py-[18px]">
      <p className="mr-2 text-sm font-bold md:text-xl">{time}</p>
      <img src="/2024/star.svg" alt={starAlt} className="mr-2 h-[14px] w-[14px] md:h-[18px] md:w-[18px]" />
      <p className="text-sm font-bold md:text-xl">{title}</p>
    </div>
  );
}

export function TrackBox({ track, className }: { track: Track; className?: string }) {
  const t = useTranslations("app.2024.sessions");
  const starAlt = t("starAlt");

  return (
    <div className={`w-full ${className}`}>
      <BreakTimeBox time={t("registrationTime")} title={t("registration")} starAlt={starAlt} />
      <DividerSession />
      {track.sessions.map((session, index) => (
        <div key={`${session.title}${session.speaker}`}>
          <SessionBox session={session} />
          <DividerSession />
          {index === COUNT_BEFORE_LUNCH - 1 && (
            <div>
              <BreakTimeBox time={t("lunchTime")} title={t("lunch")} starAlt={starAlt} />
              <DividerSession />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
