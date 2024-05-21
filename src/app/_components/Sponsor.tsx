import { Level } from "../_interface/Level";

function SponsorGroup(level: Level, last: boolean) {
  let countStar = 0;
  const logos = [];
  if (level === Level.PLATINUM) {
    countStar = 3;
    logos.push("carrot.png", "kakaobank.png");
  } else if (level === Level.GOLD) {
    countStar = 2;
    logos.push("jumpit.png", "jetbrains.png");
  } else if (level === Level.SILVER) {
    countStar = 1;
    logos.push("heydealer.png", "lezhin.png");
  }

  const stars = [];
  for (let idx = 0; idx < countStar; idx++) {
    stars.push(<img src="/star.svg" alt="sponsor star" key={idx} className="h-4 w-4 md:h-8 md:w-8" />);
  }

  return (
    <div className={`flex w-full flex-col items-center ${!last ? "mb-[72px]" : ""}`}>
      <div className="mb-2 flex">{stars}</div>
      <p className="mb-3 text-xl font-bold md:text-4xl">{level}</p>
      <div className="mb-10 h-px w-full bg-black" />
      <div className="grid w-full grid-cols-2 gap-3">
        <div className="flex h-[91px] items-center justify-center rounded-[5px] bg-white px-4 md:h-[136px] md:px-10 xl:px-[120px]">
          <img src={`/sponsors/${logos[0]}`} alt="sponsor logo" />
        </div>
        <div className="flex h-[91px] items-center justify-center rounded-[5px] bg-white px-4 md:h-[136px] md:px-10 xl:px-[120px]">
          <img src={`/sponsors/${logos[1]}`} alt="sponsor logo" />
        </div>
      </div>
    </div>
  );
}

export function Sponsor() {
  return (
    <section className="flex justify-center bg-blue/30">
      <div className="flex max-w-[1366px] flex-col items-center px-6 py-20 md:px-10 md:py-40 xl:px-40">
        <h2 className="mb-2 text-sm font-medium text-blue-light md:mb-4 md:text-2xl">SPONSOR</h2>
        <h3 className="mb-9 text-2xl font-bold md:mb-[72px] md:text-5xl xl:text-6xl">함께하는 기업</h3>
        {SponsorGroup(Level.PLATINUM, false)}
        {SponsorGroup(Level.GOLD, false)}
        {SponsorGroup(Level.SILVER, true)}
      </div>
    </section>
  );
}
