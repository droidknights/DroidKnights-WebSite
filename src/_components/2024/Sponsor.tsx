import { useTranslations } from "next-intl";

import { Level } from "../../_models/2024/Level";

function SponsorGroup(level: Level, last: boolean, starAlt: string, logoAlt: string) {
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
    stars.push(<img src="/2024/star.svg" alt={starAlt} key={idx} className="h-4 w-4 md:h-8 md:w-8" />);
  }

  return (
    <div className={`flex w-full flex-col items-center ${!last ? "mb-[72px]" : ""}`}>
      <div className="mb-2 flex">{stars}</div>
      <p className="mb-3 text-xl font-bold md:text-4xl">{level}</p>
      <div className="mb-10 h-px w-full bg-black" />
      <div className="grid w-full grid-cols-2 gap-3">
        <div className="flex h-[91px] items-center justify-center rounded-[5px] bg-white px-4 md:h-[136px] md:px-10 xl:px-[120px]">
          <img src={`/2024/sponsors/${logos[0]}`} alt={logoAlt} />
        </div>
        <div className="flex h-[91px] items-center justify-center rounded-[5px] bg-white px-4 md:h-[136px] md:px-10 xl:px-[120px]">
          <img src={`/2024/sponsors/${logos[1]}`} alt={logoAlt} />
        </div>
      </div>
    </div>
  );
}

export function Sponsor() {
  const t = useTranslations("app.2024.sponsor");
  const starAlt = t("starAlt");
  const logoAlt = t("logoAlt");

  return (
    <section className="flex justify-center bg-[#4CBCFF]/30">
      <div className="flex max-w-[1366px] flex-col items-center px-6 py-20 md:px-10 md:py-40 xl:px-40">
        <h2 className="mb-2 text-sm font-medium text-[#46A7E0] md:mb-4 md:text-2xl">{t("eyebrow")}</h2>
        <h3 className="mb-9 text-2xl font-bold md:mb-[72px] md:text-5xl xl:text-6xl">{t("title")}</h3>
        {SponsorGroup(Level.PLATINUM, false, starAlt, logoAlt)}
        {SponsorGroup(Level.GOLD, false, starAlt, logoAlt)}
        {SponsorGroup(Level.SILVER, true, starAlt, logoAlt)}
      </div>
    </section>
  );
}
