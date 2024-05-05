"use client";

export function Terms() {
  return (
    <div className="md:py-30 bg-[url('/banner_black.png')] bg-center px-6 py-10 md:px-10 xl:px-40">
      <div className="mb-10 flex w-full flex-col items-center rounded-[10px] bg-gradient-to-b from-[#A0DCFF] to-[#33B3FF] px-6 py-10">
        <p className="mb-4 text-center font-semibold leading-normal md:mb-8 md:text-[32px] xl:text-4xl xl:leading-normal">
          안드로이드 개발자들의 행사가 궁금하다면?
          <br />
          드로이드나이츠 2024를 만나보세요.
        </p>
        <button
          type="button"
          className="flex h-[39px] w-[138px] items-center justify-center rounded bg-black text-xs font-bold text-white md:h-[64px] md:w-[300px] md:text-xl md:font-semibold"
          onClick={() => {
            navigator.clipboard.writeText("https://www.droidknights.dev");
            alert("클립보드에 링크가 복사되었어요.");
          }}
        >
          <img src="/share.svg" alt="share" className="mr-1 md:mr-2" />
          <span>주변에 알리기</span>
        </button>
      </div>
      <div className="flex w-full flex-col items-center rounded-[10px] bg-gradient-to-b from-[#EBFFDC] to-[#B5EE87] px-6 py-10">
        <p className="mb-4 text-center text-center font-semibold leading-normal md:mb-8 md:text-4xl md:leading-normal">
          모든 참여자가 행사에
          <br />
          차별없이 참여할 수 있도록 노력할 것을 약속 해주세요.
        </p>
        <a
          href="https://maryang.notion.site/2024-f4c593c4be174647b5b3aa28a0f52490?pvs=4"
          target="_blank"
          className="w-[138px] md:w-[300px]"
        >
          <div className="flex h-[39px] items-center justify-center rounded bg-white text-xs font-bold text-black md:h-[64px] md:text-xl md:font-semibold">
            행동강령 살펴보기 →
          </div>
        </a>
      </div>
    </div>
  );
}
