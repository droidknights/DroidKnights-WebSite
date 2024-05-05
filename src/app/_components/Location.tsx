export function Location() {
  return (
    <div className="flex flex-col items-center bg-blue px-6 py-20 text-center md:px-10 md:py-40 xl:px-40">
      <p className="mb-2 text-sm font-medium text-white md:mb-4 md:text-2xl">Location</p>
      <p className="mb-4 text-2xl font-bold md:text-[52px] xl:text-6xl">6월 11일, 코엑스에서 만나요</p>
      <div className="mb-9 items-center md:mb-[72px] md:flex">
        <div className="mb-2 flex items-center justify-center md:mb-0 md:mr-8">
          <img src="/location/date.svg" alt="date" className="mr-1 md:mr-3" />
          <span className="text-sm font-semibold md:text-xl">2024년 6월 11일</span>
        </div>
        <div className="flex items-center justify-center">
          <img src="/location/map_pin.svg" alt="map pin" className="mr-1" />
          <span className="text-sm font-semibold md:text-xl">삼성 코엑스 - 컨퍼런스룸E(3층)</span>
        </div>
      </div>
    </div>
  );
}
