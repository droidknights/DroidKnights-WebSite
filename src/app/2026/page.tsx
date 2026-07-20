import { Metadata } from "next";
import Image from "next/image";

import { Description } from "@/src/_components/2026/Description";
import { Faqs } from "@/src/_components/2026/Faqs";
import { Footer } from "@/src/_components/2026/Footer";
import { LastEvent } from "@/src/_components/2026/LastEvent";
import { Location } from "@/src/_components/2026/Location";
import { Terms } from "@/src/_components/2026/Terms";

export const metadata: Metadata = {
  title: "드로이드나이츠 2026",
  description:
    "대한민국 최대 안드로이드 개발자 컨퍼런스 드로이드나이츠 2026 입니다. 주니어부터 시니어까지 모두가 공감하고 즐길 수 있는 지식의 장으로 만들고자 합니다.",
};

export default function Home() {
  return (
    <div className="bg-dk-space text-dk-ink">
      <Header />
      <div className="bg-dk-space pt-[77px]">
        <Image
          src="/2026/banner.png"
          alt="droidknights 2026 banner"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full"
        />
      </div>
      <main>
        <Description />
        <Location />
        <Faqs />
        <LastEvent />
        <Terms />
      </main>
      <Footer />
      <div id="popup-root" />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-dk-space/70 fixed top-0 z-50 h-[77px] w-full border-b border-white/5 backdrop-blur-[20px]">
      <div className="mx-auto flex h-full max-w-[1366px] items-center justify-between px-5 md:px-10">
        <Image src="/2026/logo.png" alt="droidknights 2026 logo" width={94} height={36} />
      </div>
    </header>
  );
}
