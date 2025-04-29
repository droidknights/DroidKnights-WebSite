import { COUNT_BEFORE_LUNCH, Track } from "@/src/_models/2025/Sessions";

import { SessionItem } from "./SessionItem";

export const TrackBox = ({ track, className }: { track: Track; className?: string }) => {
  return (
    <div className={`w-full ${className}`}>
      <Breaktime time="09:30 - 10:40" title="행사 등록" />
      <DividerSession />
      {track.sessions.map((session, index) => (
        <div key={`${session.title}${session.speaker}`}>
          <SessionItem session={session} />
          <DividerSession />
          {index === COUNT_BEFORE_LUNCH - 1 && (
            <div>
              <Breaktime time="12:35 - 13:55" title="점심 시간" />
              <DividerSession />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export const DividerSession = () => {
  return <div className="h-px w-full bg-white/60" />;
};

const Breaktime = ({ time, title }: { time: string; title: string }) => {
  return (
    <div className="my-[5px] flex items-center justify-center bg-[#215BF6] px-4 py-2.5 md:py-[18px]">
      <p className="mr-2 text-sm font-bold text-white md:text-xl">{time}</p>
      <p className="text-sm font-bold text-white md:text-xl">{title}</p>
    </div>
  );
};
