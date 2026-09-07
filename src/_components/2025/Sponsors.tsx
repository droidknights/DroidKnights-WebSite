import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { Level, Sponsor, goldSponsors, platinumSponsors, silverSponsors } from "@/src/_models/2025/Sponsors";

export const Sponsors = () => {
  const t = useTranslations("app.2025.sponsor");

  return (
    <section className="bg-[url('/2025/bg_sponsor.png')] bg-cover bg-center bg-no-repeat">
      <div className="px-6 py-20 md:px-10 md:py-40">
        <div className="mb-6 text-center md:mb-[72px]">
          <h2 className="mb-2 text-sm font-medium text-[#FAFAFA] md:mb-4 md:text-2xl">{t("eyebrow")}</h2>
          <h3 className="text-2xl font-bold text-[#FAFAFA] md:text-5xl xl:text-6xl">{t("title")}</h3>
        </div>
        <div className="mx-auto max-w-[1040px] space-y-[72px]">
          {SponsorGroup(Level.PLATINUM, t("starAlt"), t("logoAlt"))}
          {SponsorGroup(Level.GOLD, t("starAlt"), t("logoAlt"))}
          {SponsorGroup(Level.SILVER, t("starAlt"), t("logoAlt"))}
        </div>
      </div>
    </section>
  );
};

const SponsorGroup = (level: Level, starAlt: string, logoAlt: string) => {
  let sponsors: Sponsor[] = [];
  if (level === Level.PLATINUM) {
    sponsors = platinumSponsors;
  } else if (level === Level.GOLD) {
    sponsors = goldSponsors;
  } else if (level === Level.SILVER) {
    sponsors = silverSponsors;
  }

  return (
    <div>
      <div className="mb-1 flex justify-center">
        <Image
          src={`/2025/sponsors/star_${level.toLowerCase()}.svg`}
          alt={starAlt}
          width={0}
          height={0}
          sizes="100vw"
          className="w-6 md:w-10"
        />
      </div>
      <p className="mb-3 text-center text-xl font-bold text-[#FAFAFA] md:text-4xl">{level}</p>
      <div className="mb-10 h-px w-full bg-[#FAFAFA]" />
      <div className="grid w-full grid-cols-2 gap-6">
        {sponsors.map((sponsor) => (
          <Link href={sponsor.link} key={sponsor.logo} target="_blank">
            <div className="flex h-[91px] w-full items-center justify-center rounded-[5px] bg-[#FAFAFA] px-5 md:h-[136px] md:px-10 lg:px-16 xl:px-20">
              <Image
                src={`/2025/sponsors/${sponsor.logo}`}
                alt={logoAlt}
                width={0}
                height={0}
                sizes="100vw"
                className="h-full w-full object-contain"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
