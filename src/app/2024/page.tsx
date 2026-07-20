import { Metadata } from "next";
import Link from "next/link";

import { LastEvent } from "@/src/_components/2024/LastEvent";
import { Location } from "@/src/_components/2024/Location";
import { QnaCard } from "@/src/_components/2024/QnaCard";
import { Sponsor } from "@/src/_components/2024/Sponsor";
import { Terms } from "@/src/_components/2024/Terms";
import { Ticket } from "@/src/_components/2024/Ticket";
import { SessionCard } from "@/src/_components/2024/sessions/SessionsCard";
import { Footer } from "@/src/_components/Footer";

export const metadata: Metadata = {
  title: "드로이드나이츠 2024",
  description:
    "대한민국 최대 안드로이드 개발자들만을 위한 컨퍼런스 드로이드나이츠 2024 입니다. 주니어부터 시니어까지 모두가 공감하고 즐길 수 있는 지식의 장으로 만들고자 합니다.",
};

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <Description />
        <SessionCard />
        <Ticket />
        <Location />
        <Sponsor />
        <QnaCard />
        <LastEvent />
        <Terms />
        <Footer />
      </div>
      <div id="popup-root" />
    </main>
  );
}

function Header() {
  return (
    <section className="relative">
      <img
        src="/2024/banner_text.png"
        alt="droidknights 2024 banner text"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4"
      />
      <div className="fixed flex w-full justify-between p-3 backdrop-blur md:px-10 md:py-5 xl:px-20">
        <img src="/2024/logo.svg" alt="droidknights 2024 logo" />
        <Link href="https://festa.io/events/4990" target="_blank">
          <div className="cursor-point rounded bg-white px-4 py-2 text-xs font-semibold md:px-3 md:py-[10px] md:text-sm">
            페스타 바로가기→
          </div>
        </Link>
      </div>
      <img src="/2024/banner_bg.png" alt="droidknights 2024 banner" className="h-[640px] w-screen object-cover" />
    </section>
  );
}

function Description() {
  return (
    <section className="flex justify-center">
      <div className="flex max-w-[1366px] flex-col items-center px-6 md:px-20">
        <img className="absolute mt-10 hidden md:block" src="/2024/arrow_down.svg" />
        <div className="py-20 text-center md:py-40">
          <h1 className="mb-4 text-2xl leading-normal font-bold md:text-5xl md:leading-normal">
            대한민국 최대
            <br />
            안드로이드 개발자들만을 위한
            <br />
            드로이드나이츠 2024
          </h1>
          <h2 className="text-xl leading-normal font-medium md:text-4xl md:leading-normal">
            주니어부터 시니어까지 모두가 공감하고
            <br />
            즐길 수 있는 지식의 장으로 만들고자 합니다.
          </h2>
        </div>
      </div>
    </section>
  );
}
