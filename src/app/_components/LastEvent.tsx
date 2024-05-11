export function LastEvent() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-[#000000] to-[#666666]">
      <div className="px-6 pt-20 text-center md:pt-40">
        <p className="mb-2 text-sm font-medium text-blue-light md:mb-4 md:text-2xl xl:mb-4">2023 Droid Knights</p>
        <p className="mb-6 text-2xl font-bold text-white md:mb-[72px] md:text-5xl xl:text-6xl">지난 행사 살펴보기</p>
      </div>
      <div className="w-full">
        <iframe
          width="0"
          height="0"
          src="https://www.youtube.com/embed/YK9t22I3UOQ?si=C-e577HplCalJ3Qp"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="h-[212px] w-full md:h-[443px] xl:h-[786px]"
        />
      </div>
    </div>
  );
}
