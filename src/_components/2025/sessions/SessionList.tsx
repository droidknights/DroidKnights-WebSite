import { sessionList } from "@/src/_models/2025/sessions/Sessions";

export const SessionList = () => {
  return (
    <section className="bg-[#0F0F0F]">
      <div className="px-6 py-20 md:px-10 md:py-40">
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
