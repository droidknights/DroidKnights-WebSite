"use client";

import { useState } from "react";

import { Session } from "@/src/_models/2025/Sessions";

import { SessionDetailPopup } from "./SessionDetailPopup";

export function SessionBox({ session }: { session: Session }) {
  const [showSessionDetail, setShowSessionDetail] = useState(false);
  const clickable = Boolean(session.detail);
  return (
    <div>
      <div
        className={`my-[5px] bg-white/10 p-6 text-left ${clickable ? "cursor-pointer" : ""}`}
        onClick={() => {
          if (clickable) setShowSessionDetail(true);
        }}
      >
        <p className="mb-2 text-sm font-medium text-grey-light">{`${session.startTime}-${session.endTime}`}</p>
        <p className="mb-2 font-bold text-white md:text-xl">{session.title}</p>
        <p className="text-sm font-bold text-blue md:text-base">
          {session.speaker}
          {session.type && ` | ${session.type}`}
        </p>
      </div>
      {showSessionDetail && <SessionDetailPopup session={session} close={() => setShowSessionDetail(false)} />}
    </div>
  );
}
