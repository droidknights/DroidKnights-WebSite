export function Location() {
  return (
    <section className="flex justify-center bg-blue">
      <div className="flex max-w-[1366px] flex-col items-center px-6 py-20 text-center md:px-10 md:py-40 xl:px-40">
        <h2 className="mb-2 text-sm font-medium text-white md:mb-4 md:text-2xl xl:mb-4">Location</h2>
        <h3 className="mb-4 text-2xl font-bold md:text-[52px] md:leading-none xl:text-6xl">
          6월 11일, 코엑스에서 만나요
        </h3>
        <div className="mb-9 items-center md:mb-[72px] md:flex">
          <div className="mb-2 flex items-center justify-center md:mb-0 md:mr-8">
            <img
              src="/location/date.svg"
              alt="date"
              className="mr-1 h-[20px] w-[20px] md:mr-3 md:h-[32px] md:w-[32px]"
            />
            <span className="text-sm font-semibold md:text-xl">2024년 6월 11일</span>
          </div>
          <div className="flex items-center justify-center">
            <img src="/location/map_pin.svg" alt="map pin" className="mr-1 h-[20px] w-[20px] md:h-[32px] md:w-[32px]" />
            <span className="text-sm font-semibold md:text-xl">삼성 코엑스 - 컨퍼런스룸E(3층)</span>
          </div>
        </div>
        <div className="mb-9 w-full md:mb-[72px]">
          <iframe
            title="coex map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3164.820806791708!2d127.0563582!3d37.5121443!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca50a9f0b0d57%3A0x550abcd505fefb3f!2sCOEX%20Conference%20Room%20(3F)!5e0!3m2!1sko!2skr!4v1714916901084!5m2!1sko!2skr"
            width="0"
            height="0"
            className="h-[200px] w-full md:h-[400px] xl:h-[620px]"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
        <a href="https://maps.app.goo.gl/qpm7R54Hpe5Vh5At5" target="_blank" className="w-full md:w-[448px]">
          <div className="flex h-[60px] items-center justify-center rounded-[10px] bg-black font-semibold text-white md:h-[80px] md:text-xl">
            가는 길 찾아보기 →
          </div>
        </a>
      </div>
    </section>
  );
}
