import Link from "next/link";

export function Ticket() {
  return (
    <div className="flex justify-center bg-grey">
      <div className="flex max-w-[1366px] flex-col items-center px-6 py-20 text-center md:px-10 md:py-40 xl:px-40">
        <div className="mb-[26px] text-center md:mb-[72px]">
          <p className="mb-4 text-sm font-medium text-blue-light md:text-2xl">Ticket</p>
          <p className="text-2xl font-bold text-white md:text-5xl xl:text-6xl">행사장 입장부터, 한정 굿즈까지</p>
        </div>
        <div className="grid w-full grid-cols-2 gap-3 md:gap-[18px] xl:gap-9">
          <div className="mr-3 rounded-[5px] bg-black/50 px-4 py-9 text-center md:py-[49px] xl:py-[46px]">
            <p className="mb-2.5 text-sm font-semibold text-blue md:text-2xl">일반</p>
            <p className="mb-2.5 text-2xl font-bold text-white md:text-4xl">49,000원</p>
            <p className="text-sm font-medium text-white opacity-80 md:text-xl">단체 구매 가능</p>
          </div>
          <div className="rounded-[5px] bg-black/50 px-4 py-9 text-center md:py-[49px] xl:py-[46px]">
            <p className="mb-2.5 text-sm font-semibold text-blue md:text-2xl">학생</p>
            <p className="mb-2.5 text-2xl font-bold text-white md:text-4xl">25,000원</p>
            <p className="text-sm font-medium text-white opacity-80 md:text-xl">
              고등학생까지 적용. 입장시 학생증 확인
            </p>
          </div>
        </div>
        <Link href="https://festa.io/events/4990" target="_blank" className="flex w-full justify-center">
          <div className="mb-2 mt-[26px] w-full rounded-[10px] bg-blue py-5 text-center font-semibold md:mb-3 md:mt-[72px] md:w-fit md:px-[144px] md:py-7 md:text-xl">
            티켓 구매하러 가기 →
          </div>
        </Link>
        <p className="text-sm font-medium text-grey-light md:text-xl">
          *본 이벤트의 티켓은 페스타를 통해서만 구매 가능합니다.
        </p>
      </div>
    </div>
  );
}
