"use client";

import { useState } from "react";

function Divider() {
  return <div className="h-px w-full max-w-[790px] bg-black" />;
}

export function Qna() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center px-6 py-20 md:px-10 md:py-40">
      <p className="mb-2 text-sm font-medium text-blue-light md:mb-4 md:text-2xl">QnA</p>
      <p className="mb-6 text-2xl font-bold md:mb-[72px] md:text-5xl xl:text-6xl">자주 묻는 질문</p>
      <Divider />
      <div className="flex w-full max-w-[790px] items-start justify-between py-[15px]" onClick={() => setOpen(!open)}>
        <div className="mr-4">
          <div className="font-semibold">Q. 행사 당일날 현장에서도 티켓 구매가 가능한가요?</div>
          <div className={`mt-2 text-sm font-medium text-grey-light ${open ? "block" : "hidden"}`}>
            아니요, 현장에서는 따로 참가 신청을 받지 않습니다.
          </div>
        </div>
        <img src={`${open ? "/qna/minus.svg" : "/qna/plus.svg"}`} alt="qna arrow" />
      </div>
      <Divider />
    </div>
  );
}
