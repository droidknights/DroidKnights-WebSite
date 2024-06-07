function Divider() {
  return <div className="h-px bg-blue-light" />;
}

export function SpecialSessionBox() {
  return (
    <div className="mt-10 w-full md:mt-[72px]">
      <h3 className="mb-9 mt-8 text-2xl font-bold text-white md:my-[72px] md:text-5xl xl:text-6xl">
        특별 세션 지원자 모집
      </h3>
      {/** 이력서 / 포트폴리오 */}
      <div className="relative mb-3 text-left md:mb-4">
        <div className="text-xl font-semibold text-blue-light md:hidden md:text-4xl">
          <p>이력서 / 포트폴리오</p>
          <p>지원자 모집</p>
        </div>
        <div className="hidden text-xl font-semibold text-blue-light md:block md:text-4xl">
          이력서 / 포트폴리오 지원자 모집
        </div>
        <a href="https://forms.gle/DdPw6bof4bW45LTz8" target="_blank" className="absolute bottom-0 right-0">
          <div className="rounded bg-grey px-4 py-2 text-xs font-semibold text-white md:text-sm">지원하기→</div>
        </a>
      </div>
      <Divider />
      <div className="mb-10 mt-6 text-left text-sm font-medium text-grey-light md:mb-20 md:mt-10 md:text-2xl">
        <ul className="ml-4 list-disc md:ml-5">
          <li>
            드로이드나이츠2024에서 여러분의{" "}
            <span className="text-white">경력을 한 단계 업그레이드할 수 있는 특별한 기회</span>를 제공합니다.
          </li>
          <li>
            <span className="text-white">이력서와 포트폴리오에 대한 전문적인 피드백</span>을 받고 싶으신 분들을 위한
            세션을 마련했습니다.
          </li>
          <li>
            <span className="text-white">드로이드나이츠 운영진들이 직접</span> 이력서/포트폴리오를 검토하고 피드백
            드립니다.
          </li>
          <li>
            선정되신 분들께는 <span className="text-white">드로이드나이츠 티켓을 제공</span>해드립니다.(굿즈 제외)
          </li>
        </ul>
      </div>

      {/** 라이트닝토크 */}
      <div className="relative mb-3 text-left md:mb-4">
        <div className="text-xl font-semibold text-blue-light md:hidden md:text-4xl">
          <p>라이트닝토크</p>
          <p>지원자 모집</p>
        </div>
        <div className="hidden text-xl font-semibold text-blue-light md:block md:text-4xl">
          라이트닝토크 지원자 모집
        </div>
        <a href="https://forms.gle/E7hdXx2UyGXR3AZh8" target="_blank" className="absolute bottom-0 right-0">
          <div className="rounded bg-grey px-4 py-2 text-xs font-semibold text-white md:text-sm">지원하기→</div>
        </a>
      </div>
      <Divider />
      <div className="mt-6 text-left text-sm font-medium text-grey-light md:mt-10 md:text-2xl">
        <ul className="ml-4 list-disc md:ml-5">
          <li>발표 경험을 쌓고 싶지만 대규모 세션에서의 발표는 부담스럽다고 느끼시나요?</li>
          <li>저희가 준비한 라이트닝 토크 세션에 주목해 주세요.</li>
          <li>
            이번 행사에서는 안드로이드 개발자 커뮤니티의 일원으로서,{" "}
            <span className="text-white">단 10분 동안 자신의 경험, 지식, 아이디어를 공유할 수 있는 기회</span>를
            제공합니다.
          </li>
          <li>
            선정되신 분들께는 <span className="text-white">드로이드나이츠 티켓을 제공</span>해드립니다.(굿즈 제외)
          </li>
        </ul>
      </div>
    </div>
  );
}
