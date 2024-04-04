"use client";

import { differenceInDays, intervalToDuration } from "date-fns";
import Image from "next/image";
import { useEffect, useState } from "react";

const getCountdown = () => {
  const start = new Date();
  const end = new Date(2024, 5, 11, 9, 0, 0); // 2024. 6. 11. 09:00:00
  const days = differenceInDays(end, start);
  const { hours, minutes, seconds } = intervalToDuration({ start, end });
  return {
    days,
    hours: hours || 0,
    minutes: minutes || 0,
    seconds: seconds || 0,
  };
};

export default function Home() {
  const [countdown, setCountdown] = useState<Countdown>();
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const countLabelClass = "text-sm text-grey md:text-base xl:text-xl";
  const countNumberClass = "text-[33px] font-black text-primary-blue md:text-4xl xl:text-[50px]";

  return (
    <main className="flex min-h-screen flex-col items-center py-[150px] md:pb-[70px] md:pt-0 xl:pb-[140px]">
      <div className="mb-[40px] hidden md:block xl:mb-[80px]">
        <Image
          src="/banner.png"
          alt="droidknights 2024 logo"
          width={0}
          height={0}
          sizes="100vw"
          className=" w-screen"
        />
      </div>
      <div className="mb-20 flex flex-col items-center text-center md:hidden">
        <h1 className="font-semibold text-primary-blue">Droid Knights 2024</h1>
        <div className="mx-10 mb-5 text-[45px] font-black">Coming Soon</div>
        <div className="mx-[45px]">
          <Image
            src="/characters.png"
            alt="droidknights 2024 characters"
            width={0}
            height={0}
            sizes="100vw"
            className="w-screen"
          />
        </div>
      </div>
      {countdown ? (
        <div className="mx-10 mb-6 grid grid-cols-7 justify-items-center gap-x-2.5 gap-y-0.5 md:mb-5 md:gap-x-3 xl:mb-10 xl:gap-x-4 xl:gap-y-1 ">
          <div className={countLabelClass}>Days</div>
          <div />
          <div className={countLabelClass}>Hours</div>
          <div />
          <div className={countLabelClass}>Minutes</div>
          <div />
          <div className={countLabelClass}>Seconds</div>
          <div className={countNumberClass}>{countdown?.days}</div>
          <div className={countNumberClass}>:</div>
          <div className={countNumberClass}>{countdown?.hours}</div>
          <div className={countNumberClass}>:</div>
          <div className={countNumberClass}>{countdown?.minutes}</div>
          <div className={countNumberClass}>:</div>
          <div className={countNumberClass}>{countdown?.seconds}</div>
        </div>
      ) : (
        <div />
      )}
      <div className="flex flex-col items-center justify-center text-center font-semibold md:flex-row">
        <h2 className="mb-2 md:mb-0 xl:text-2xl">2024. 6. 11. TUE</h2>
        <div className="mx-3 hidden h-4 w-px bg-grey md:block xl:h-6" />
        <h2 className="xl:text-2xl">코엑스 3층 E홀 컨퍼런스룸</h2>
      </div>
    </main>
  );
}
