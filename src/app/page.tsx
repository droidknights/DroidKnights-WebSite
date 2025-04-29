import Image from "next/image";
import Link from "next/link";

import { FaqSection } from "@/src/_components/2025/FaqSection";
import { LastEvent } from "@/src/_components/2025/LastEvent";
import { Location } from "@/src/_components/2025/Location";
import { Terms } from "@/src/_components/2025/Terms";
import { Ticket } from "@/src/_components/2025/Ticket";

import { SponsorSection } from "../_components/2025/SponsorSection";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <div className="bg-[#0F0F0F] pt-[77px]">
          <Image
            src="/2025/banner.png"
            alt="droidknights 2025 banner"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full"
          />
        </div>
        <main>
          <div>
            <Description />
            <Ticket />
            <Location />
            <SponsorSection />
            <FaqSection />
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
    <header className="fixed top-0 h-[77px] w-full bg-[#0F0F0F]/20">
      <div className="mx-auto flex h-full max-w-[1366px] items-center justify-between px-5 md:px-10">
        <Image src="/2025/logo.png" alt="droidknights 2025 logo" width={94} height={36} />
        <Link href="" target="_blank">
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
          <h1 className="mb-4 text-2xl font-bold leading-[1.4] md:mb-6 md:text-5xl md:leading-[1.4]">
            대한민국 최대
            <br />
            안드로이드 개발자들만을 위한
            <br />
            드로이드나이츠 2025
          </h1>
          <h2 className="text-xl font-medium leading-[1.3] md:text-4xl md:leading-[1.3]">
            주니어부터 시니어까지 모두가 공감하고
            <br />
            즐길 수 있는 지식의 장으로 만들고자 합니다.
          </h2>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-[#0F0F0F]">
      <div className="mx-auto flex max-w-[1366px] items-center justify-between px-5 py-10 md:px-10">
        <div className="flex items-center">
          <p className="text-sm text-white">Copyright DroidKnights 2025</p>
          <span className="mx-3 text-sm text-white">|</span>
          <p className="text-sm text-white">All Rights Reserved</p>
        </div>
        <div className="flex items-center gap-x-3">
          <Link href="https://www.instagram.com/droid_knights/" target="_blank">
            <img src="/2024/social/instagram.svg" alt="instagram" />
          </Link>
          <Link href="https://www.facebook.com/droidknights" target="_blank">
            <img src="/2024/social/facebook.svg" alt="facebook" />
          </Link>
          <Link href="https://www.youtube.com/@DroidKnights" target="_blank">
            <img src="/2024/social/youtube.svg" alt="youtube" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
