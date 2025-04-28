function Divider() {
  return <div className="h-px bg-[#46A7E0]" />;
}

export function SpecialSessionBox() {
  return (
    <div className="mt-10 w-full md:mt-[72px]">
      <h3 className="mb-9 mt-8 text-2xl font-bold text-white md:my-[72px] md:text-5xl xl:text-6xl">특별 세션</h3>
      {/** 이력서 / 포트폴리오 */}
      <div className="mb-10 text-left md:mb-20">
        <div className="text-xl font-semibold text-[#46A7E0] md:hidden md:text-4xl">
          <p>[이력서 포트폴리오 피드백] 사전신청자 피드백</p>
          <p>13:55~14:25</p>
        </div>
        <div className="hidden text-xl font-semibold text-[#46A7E0] md:block md:text-4xl">
          [이력서 포트폴리오 피드백] 사전신청자 피드백 13:55~14:25
        </div>
      </div>
      <div className="mb-10 text-left md:mb-20">
        <div className="text-xl font-semibold text-[#46A7E0] md:hidden md:text-4xl">
          <p>[이력서 포트폴리오 피드백] 실시간 Q&A</p>
          <p>14:45~15:15</p>
        </div>
        <div className="hidden text-xl font-semibold text-[#46A7E0] md:block md:text-4xl">
          [이력서 포트폴리오 피드백] 실시간 Q&A 14:45~15:15
        </div>
      </div>

      {/** 라이트닝토크 */}
      <div className="mb-3 text-left md:mb-4">
        <div className="text-xl font-semibold text-[#46A7E0] md:hidden md:text-4xl">
          <p>라이트닝 토크</p>
          <p>13:20~13:55</p>
        </div>
        <div className="hidden text-xl font-semibold text-[#46A7E0] md:block md:text-4xl">
          라이트닝 토크 13:20~13:55
        </div>
      </div>
      <Divider />
      <div className="mt-3 text-left text-sm font-medium text-[#888888] md:mt-4 md:text-2xl">
        세션보다는 가볍게 10분동안 자신의 경험, 지식, 아이디어를 공유
      </div>
    </div>
  );
}
