"use client";

import { differenceInDays, intervalToDuration } from "date-fns";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Home() {
  const [countdown, setCountdown] = useState<Countdown>();
  useEffect(() => {
    const interval = setInterval(() => {
      const start = new Date();
      const end = new Date(2024, 6, 11, 9, 0, 0);
      const days = differenceInDays(end, start);
      const { hours, minutes, seconds } = intervalToDuration({ start, end });
      setCountdown({
        days,
        hours: hours || 0,
        minutes: minutes || 0,
        seconds: seconds || 0,
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#2f3437] px-10 py-[120px]">
      <Image src="/logo.webp" alt="logo" width={300} height={300} className="mb-10" />
      <div className="mb-10 text-7xl">Comming Soon</div>
      <h1 className="mb-10 text-7xl">드로이드나이츠 2024</h1>
      {countdown ? (
        <div className="mb-20 grid grid-cols-4 gap-5 text-center">
          <div>
            <div className="text-5xl">{countdown?.days}</div>
            <div>일</div>
          </div>
          <div>
            <div className="text-5xl">{countdown?.hours}</div>
            <div>시</div>
          </div>
          <div>
            <div className="text-5xl">{countdown?.minutes}</div>
            <div>분</div>
          </div>
          <div>
            <div className="text-5xl">{countdown?.seconds}</div>
            <div>초</div>
          </div>
        </div>
      ) : (
        <div />
      )}
      <h2 className="mb-4 text-4xl">2024년 6월 11일 (화)</h2>
      <h2 className="text-4xl">코엑스 3층 E홀 컨퍼런스 룸</h2>
    </main>
  );
}
