"use client";

import { Session } from "@/src/_models/2025/sessions/Sessions";

export const SessionItem = ({ session }: { session: Session }) => {
  return (
    <div>
      <div className="h-full bg-white/10 p-6 text-left">
        <p className="mb-2 text-sm font-medium text-[#888888]">{`${session.startTime}-${session.endTime}`}</p>
        <p className="mb-2 font-bold text-white md:text-xl">{session.title}</p>
        <p className="text-sm font-bold text-[#5180FF] md:text-base">{session.speaker}</p>
      </div>
    </div>
  );
};
