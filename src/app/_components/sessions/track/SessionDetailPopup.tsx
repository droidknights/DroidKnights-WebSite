"use client";

import { Session } from "@/app/_interface/Sessions";
import React from "react";
import Portal from "../../Portal";

function TextWithLineBreaks({ description }: { description: string }) {
  const textWithBreaks = description.split("\n").map((text, index) => {
    const hasIndent = text.includes("\t");
    const prettyText = text.replace(/\t/g, "");
    const key = `${index}-${prettyText}`;
    return (
      <React.Fragment key={key}>
        <div className={`${hasIndent ? "indent-3" : ""}`}>
          {prettyText}
          <br />
        </div>
      </React.Fragment>
    );
  });

  return <div>{textWithBreaks}</div>;
}

export function SessionDetailPopup({ session, close }: { session: Session; close: () => void }) {
  return (
    <Portal selector="#popup-root">
      <div
        className="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/50"
        onClick={close}
      >
        <div
          className="max-h-[650px] w-[544px] overflow-y-auto rounded-xl bg-white px-10 py-12"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between">
            <p className="text-[27px] font-bold">{session.title}</p>
            <div className="ml-10 mt-1 shrink-0 cursor-pointer" onClick={close}>
              <img src="/close.png" alt="close" />
            </div>
          </div>
          <div className="my-6 h-px w-full bg-[#c4c4c4]" />
          <div className="text-xl leading-normal">
            <p className="font-bold text-blue">
              {session.speaker} | {session.detail?.company}
            </p>
            <TextWithLineBreaks description={session.detail!.speakerDescription} />
          </div>
          <div className="my-6 h-px w-full bg-black" />
          <div className="text-xl leading-normal text-[#666666]">
            <TextWithLineBreaks description={session.detail!.description} />
          </div>
        </div>
      </div>
    </Portal>
  );
}
