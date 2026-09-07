"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import { QNA_KEYS } from "../../_models/2024/Qna";

function Divider() {
  return <div className="h-px w-full max-w-[790px] bg-black" />;
}

function Qna({ question, answer, toggleAlt }: { question: string; answer: string; toggleAlt: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex max-w-[790px] items-start justify-between py-[15px]" onClick={() => setOpen(!open)}>
      <div className="mr-4">
        <div className="font-semibold md:text-2xl">{question}</div>
        <div
          className={`text-sm font-medium text-[#888888] md:text-xl ${open ? "visible mt-2" : "invisible mt-0 h-0"}`}
        >
          {answer}
        </div>
      </div>
      <img
        src={`${open ? "/2024/qna/minus.svg" : "/2024/qna/plus.svg"}`}
        alt={toggleAlt}
        className="h-6 w-6 shrink-0 md:h-8 md:w-8"
      />
    </div>
  );
}

export function QnaCard() {
  const t = useTranslations("app.2024.qna");

  return (
    <section className="flex justify-center">
      <div className="flex max-w-[1366px] flex-col items-center px-6 py-20 md:px-10 md:py-40">
        <h2 className="mb-2 text-sm font-medium text-[#46A7E0] md:mb-4 md:text-2xl">{t("eyebrow")}</h2>
        <h3 className="mb-6 text-2xl font-bold md:mb-[72px] md:text-5xl xl:text-6xl">{t("title")}</h3>
        <Divider />
        {QNA_KEYS.map((key) => (
          <div key={key} className="w-full">
            <Qna question={t(`items.${key}.question`)} answer={t(`items.${key}.answer`)} toggleAlt={t("toggleAlt")} />
            <Divider />
          </div>
        ))}
      </div>
    </section>
  );
}
