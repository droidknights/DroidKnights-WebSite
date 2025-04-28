import Link from "next/link";

export function Location() {
  return (
    <section className="bg-[#215BF6]">
      <div className="px-6 py-20 md:px-10 md:py-40">
        <div className="mb-6 text-center md:mb-[72px]">
          <h2 className="mb-2 text-sm font-medium text-[#FAFAFA] md:mb-4 md:text-2xl">Location</h2>
          <h3 className="mb-4 text-2xl font-bold text-[#FAFAFA] md:text-5xl">
            6월 17일, 과학기술컨벤션센터에서 만나요
          </h3>
          <div className="md:flex md:items-center md:justify-center">
            <div className="mb-2 flex items-center justify-center text-[#FAFAFA] md:mb-0 md:mr-8">
              <img src="/2025/date.svg" alt="date" className="mr-1 h-[20px] w-[20px] md:mr-3 md:h-[32px] md:w-[32px]" />
              <span className="text-sm font-semibold md:text-xl">2025년 6월 17일</span>
            </div>
            <div className="flex items-center justify-center text-[#FAFAFA]">
              <img src="/2025/map_pin.svg" alt="map pin" className="mr-1 h-[20px] w-[20px] md:h-[32px] md:w-[32px]" />
              <span className="text-sm font-semibold md:text-xl">과학기술컨벤션센터(ST Center)</span>
            </div>
          </div>
        </div>

        <div className="mx-auto mb-9 w-full max-w-[1040px] md:mb-[72px]">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.3058956406403!2d127.02817037585159!3d37.50070287205586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca11641de4cab%3A0x19235e823c73b149!2z6rO87ZWZ6riw7Iig7Luo67Kk7IWY7IS87YSwKFNUIENlbnRlcik!5e0!3m2!1sko!2skr!4v1745217050097!5m2!1sko!2skr"
            width="0"
            height="0"
            className="h-[200px] w-full md:h-[400px] xl:h-[620px]"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
        <div className="flex justify-center">
          <Link
            href="https://maps.app.goo.gl/2fgZFyCwokaQWM6U7"
            target="_blank"
            className="flex h-[60px] w-full items-center justify-center rounded-[10px] bg-[#0F0F0F] font-semibold text-[#FAFAFA] md:h-[80px] md:w-[448px] md:text-xl"
          >
            가는 길 찾아보기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
