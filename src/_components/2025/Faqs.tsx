"use client";

import { useState } from "react";

import { faqList } from "../../_models/2025/Faq";

export function Faqs() {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="px-6 py-20 md:px-10 md:py-40">
        <div className="mb-6 text-center md:mb-[72px]">
          <h2 className="mb-2 text-sm font-medium text-[#5180FF] md:mb-4 md:text-2xl">QnA</h2>
          <h3 className="text-2xl font-bold md:text-5xl">자주 묻는 질문</h3>
        </div>
        <div className="mx-auto max-w-[790px]">
          <Divider />
          {faqList.map((qna) => (
            <div key={qna.question}>
              <FaqItem question={qna.question} answer={qna.answer} />
              <Divider />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-start justify-between py-[15px]" onClick={() => setOpen(!open)}>
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
        alt="qna arrow"
        className="h-6 w-6 shrink-0 md:h-8 md:w-8"
      />
    </div>
  );
}

function Divider() {
  return <div className="h-px w-full bg-[#0F0F0F]" />;
}
