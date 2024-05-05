import { Location } from "./_components/Location";
import { Qna } from "./_components/Qna";
import { Session } from "./_components/Session";
import { Sponsor } from "./_components/Sponsor";
import { Terms } from "./_components/Terms";
import { Ticket } from "./_components/Ticket";

function Header() {
  return (
    <div className="relative">
      <div className="fixed flex w-full justify-between p-3 backdrop-blur md:px-10 md:py-5 xl:px-20">
        <img src="/logo.svg" alt="droidknights 2024 logo" />
        <button
          type="button"
          className="cursor-point rounded bg-white px-4 py-2 text-xs font-semibold md:px-3 md:py-[10px] md:text-sm"
        >
          5월 11일 티켓 오픈
        </button>
      </div>
      <img
        src="/banner_text.png"
        alt="droidknights 2024 banner text"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4"
      />
      <img src="/banner_bg.png" alt="droidknights 2024 banner" className="h-[640px] w-screen object-cover" />
    </div>
  );
}

function Description() {
  return (
    <div className="flex flex-col items-center px-6 md:px-20">
      <img className="absolute mt-10 hidden md:block" src="/arrow_down.svg" />
      <div className="py-20 text-center md:py-40">
        <div className="mb-4 text-2xl font-bold leading-normal md:text-5xl md:leading-normal">
          대한민국 최대
          <br />
          안드로이드 개발자들만을 위한
          <br />
          드로이드나이츠 2024
        </div>
        <div className="text-xl font-medium leading-normal md:text-4xl md:leading-normal">
          주니어부터 시니어까지 모두가 공감하고
          <br />
          즐길 수 있는 지식의 장으로 만들고자 합니다.
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="items-center justify-between bg-black px-10 py-9 md:flex md:py-10 xl:px-20">
      <div className="mb-3 items-center text-center md:mb-0 md:flex">
        <p className="text-xs text-white md:text-sm">Copyright DroidKnights 2024</p>
        <span className="mx-3 hidden text-xs text-white md:block md:text-sm">|</span>
        <p className="text-xs text-white md:text-sm">All Rights Reserved</p>
      </div>
      <div className="flex items-center justify-center">
        <a href="https://www.instagram.com/droid_knights/" target="_blank" className="mr-3">
          <img src="/social/instagram.svg" alt="instagram" />
        </a>
        <a href="https://www.facebook.com/droidknights" target="_blank" className="mr-3">
          <img src="/social/facebook.svg" alt="facebook" />
        </a>
        <a href="https://www.youtube.com/@DroidKnights" target="_blank" className="mr-3">
          <img src="/social/youtube.svg" alt="youtube" />
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Description />
      <Session />
      <Ticket />
      <Location />
      <Sponsor />
      <Qna />
      <Terms />
      <Footer />
    </main>
  );
}
