import Link from "next/link";

import { sessionList } from "@/src/_models/2025/sessions/Sessions";

export const SessionList = () => {
  return (
    <section className="bg-[#0F0F0F]">
      <div className="px-6 py-20 md:px-20 md:py-40 lg:px-40">
        <div className="mb-[72px] text-center">
          <h2 className="mb-2 text-sm font-medium text-[#5180FF] md:mb-4 md:text-2xl">SESSION</h2>
          <h3 className="mb-2 text-2xl font-bold text-white md:mb-4 md:text-5xl"> 새로운 세션 오픈</h3>
          <p className="text-sm font-medium text-[#888888] md:text-2xl">* 타임테이블은 추후 공지 예정입니다</p>
        </div>
        <div className="grid grid-cols-2 gap-px border border-[#FAFAFA] bg-[#FAFAFA]">
          {sessionList.map((session) => (
            <SessionItem key={session.title} title={session.title} speaker={session.speaker} />
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-[950px] pb-20 text-left text-white md:pb-40">
        <div className="mb-4 text-2xl font-bold md:mb-6 md:text-5xl">특별 세션 지원자 모집</div>
        <div>
          <div className="mb-4 text-xl font-semibold md:text-2xl">
            [이력서 / 포트폴리오 피드백 지원자 모집] (
            <Link href="https://forms.gle/KK8eiU2FC6tjpAXy5" target="_blank" className="text-[#5180FF]">
              지원하기
            </Link>
            )
          </div>
          <div className="space-y-1 md:text-xl">
            <p>이력서와 포트폴리오에 대한 전문적인 피드백을 받고 싶으신 분들을 위한 세션</p>
            <p>드로이드나이츠 운영진들이 직접 이력서/포트폴리오를 검토하고 피드백 드립니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const SessionItem = ({ title, speaker }: { title: string; speaker: string }) => {
  return (
    <div className="bg-[#0F0F0F]">
      <div className="h-full w-full bg-white/10 p-6">
        <p className="mb-2 text-sm font-bold text-white md:text-xl">{title}</p>
        <p className="text-sm font-bold text-[#5180FF] md:text-base">{speaker}</p>
      </div>
    </div>
  );
};
