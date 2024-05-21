"use client";

import { useState } from "react";
import { qnaList } from "../_interface/Qna";

function Divider() {
  return <div className="h-px w-full max-w-[790px] bg-black" />;
}

function Qna({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex max-w-[790px] items-start justify-between py-[15px]" onClick={() => setOpen(!open)}>
      <div className="mr-4">
        <div className="font-semibold md:text-2xl">{question}</div>
        <div
          className={`text-sm font-medium text-grey-light md:text-xl ${open ? "visible mt-2" : "invisible mt-0 h-0"}`}
        >
          {answer}
        </div>
      </div>
      <img
        src={`${open ? "/qna/minus.svg" : "/qna/plus.svg"}`}
        alt="qna arrow"
        className="h-6 w-6 shrink-0 md:h-8 md:w-8"
      />
    </div>
  );
}

export function QnaCard() {
  return (
    <section className="flex justify-center">
      <div className="flex max-w-[1366px] flex-col items-center px-6 py-20 md:px-10 md:py-40">
        <h2 className="mb-2 text-sm font-medium text-blue-light md:mb-4 md:text-2xl">QnA</h2>
        <h3 className="mb-6 text-2xl font-bold md:mb-[72px] md:text-5xl xl:text-6xl">자주 묻는 질문</h3>
        <Divider />
        {qnaList.map((qna, index) => (
          <div key={qna.question} className="w-full">
            <Qna question={qna.question} answer={qna.answer} />
            <Divider />
          </div>
        ))}
      </div>
    </section>
  );
}
