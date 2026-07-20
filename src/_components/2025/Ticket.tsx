import Link from "next/link";

export function Ticket() {
  return (
    <section className="bg-[#333333]">
      <div className="px-6 py-20 md:px-10 md:py-40">
        <div className="mb-6 text-center md:mb-[72px]">
          <h2 className="mb-4 text-sm font-medium text-[#5180FF] md:text-2xl">Ticket</h2>
          <h3 className="text-2xl font-bold text-white md:text-5xl xl:text-6xl">행사장 입장부터, 한정 굿즈까지</h3>
        </div>
        <div className="mx-auto grid w-full max-w-[720px] grid-cols-2 gap-3 md:gap-5">
          <div className="rounded-[5px] bg-[#0F0F0F] px-4 py-9 text-center md:py-[46px]">
            <p className="mb-2.5 text-sm font-semibold text-[#5180FF] md:text-2xl">일반</p>
            <p className="text-2xl font-bold text-white md:text-4xl">59,000원</p>
          </div>
          <div className="rounded-[5px] bg-[#0F0F0F] px-4 py-9 text-center md:py-[46px]">
            <p className="mb-2.5 text-sm font-semibold text-[#5180FF] md:text-2xl">개인후원</p>
            <p className="text-2xl font-bold text-white md:text-4xl">150,000원</p>
          </div>
        </div>
        <div className="mt-[26px] flex justify-center md:mt-[72px]">
          <Link
            href="https://www.ticketa.co/events/1"
            target="_blank"
            className="flex w-full justify-center rounded-[10px] bg-linear-to-r from-[#5180FF] to-[#215BF6] py-5 font-semibold text-white md:w-[448px] md:py-7 md:text-xl"
          >
            티켓 구매하러 가기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
