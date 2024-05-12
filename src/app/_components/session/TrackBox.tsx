import { COUNT_BEFORE_LUNCH, Session, Track } from "@/app/_interface/Sessions";

export function DividerSession() {
  return <div className="h-px w-full bg-white/60" />;
}

function BreakTimeBox({ time, title }: { time: string; title: string }) {
  return (
    <div className="my-[5px] flex items-center justify-center bg-blue px-4 py-2.5 md:py-[18px]">
      <p className="mr-2 text-sm font-bold md:text-xl">{time}</p>
      <img src="/star.svg" alt="apply star" className="mr-2 h-[14px] w-[14px] md:h-[18px] md:w-[18px]" />
      <p className="text-sm font-bold md:text-xl">{title}</p>
    </div>
  );
}

function SessionBox({ session }: { session: Session }) {
  return (
    <div className="my-[5px] bg-white/10 p-6 text-left">
      <p className="mb-2 text-sm font-medium text-grey-light">{`${session.startTime}-${session.endTime}`}</p>
      <p className="mb-2 font-bold text-white md:text-xl">{session.title}</p>
      <p className="text-sm font-bold text-blue md:text-base">
        {session.speaker}
        {session.type && ` | ${session.type}`}
      </p>
    </div>
  );
}

export function TrackBox({ track }: { track: Track }) {
  return (
    <div className="w-full">
      <BreakTimeBox time="09:30 - 10:40" title="행사 등록" />
      <DividerSession />
      {track.sessions.map((session, index) => (
        <div key={`${session.title}${session.speaker}`}>
          <SessionBox session={session} />
          <DividerSession />
          {index === COUNT_BEFORE_LUNCH - 1 && (
            <div>
              <BreakTimeBox time="12:35 - 13:55" title="점심 시간" />
              <DividerSession />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
