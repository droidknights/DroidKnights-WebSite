import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Faqs } from "@/src/_components/2025/Faqs";
import { Footer } from "@/src/_components/2025/Footer";
import { LastEvent } from "@/src/_components/2025/LastEvent";
import { Location } from "@/src/_components/2025/Location";
import { Sponsors } from "@/src/_components/2025/Sponsors";
import { Terms } from "@/src/_components/2025/Terms";
import { Ticket } from "@/src/_components/2025/Ticket";
import { Timetable } from "@/src/_components/2025/sessions/Timetable";

export const metadata: Metadata = {
  title: "드로이드나이츠 2025",
  description:
    "대한민국 최대 안드로이드 개발자들만을 위한 컨퍼런스 드로이드나이츠 2025 입니다. 주니어부터 시니어까지 모두가 공감하고 즐길 수 있는 지식의 장으로 만들고자 합니다.",
};

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <div className="bg-[#0F0F0F] pt-[77px]">
          <Image src="/2025/banner.png" alt="banner" width={0} height={0} sizes="100vw" className="w-full" />
        </div>
        <main>
          <div>
            <Description />
            <Timetable />
            <Ticket />
            <Location />
            <Sponsors />
            <Faqs />
            <LastEvent />
            <Terms />
          </div>
        </main>
        <Footer />
      </div>
      <div id="popup-root" />
    </>
  );
}

function Header() {
  return (
    <header className="fixed top-0 h-[77px] w-full bg-[#0F0F0F]/20 backdrop-blur-[20px]">
      <div className="mx-auto flex h-full max-w-[1366px] items-center justify-between px-5 md:px-10">
        <Image src="/2025/logo.png" alt="logo" width={94} height={36} />
        <Link href="https://ticketa.co/event/xxpoaaeu" target="_blank">
          <div className="cursor-point rounded bg-white px-4 py-2 text-xs font-semibold md:px-3 md:py-2.5 md:text-sm">
            티켓사러 가기→
          </div>
        </Link>
      </div>
    </header>
  );
}

function Description() {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="relative mx-auto flex max-w-[1366px] flex-col items-center px-6 md:px-20">
        <img className="absolute mt-10 hidden md:block" src="/2024/arrow_down.svg" />
        <div className="py-20 text-center md:py-40">
          <h1 className="mb-4 text-xl leading-[1.4] font-bold md:mb-6 md:text-5xl md:leading-[1.4]">
            대한민국 최대
            <br />
            안드로이드 개발자들만을 위한
            <br />
            드로이드나이츠 2025
          </h1>
          <h2 className="text-lg leading-[1.3] font-medium md:text-4xl md:leading-[1.3]">
            주니어부터 시니어까지 모두가 공감하고
            <br />
            즐길 수 있는 지식의 장으로 만들고자 합니다.
          </h2>
        </div>
      </div>
    </section>
  );
}
