import Image from "next/image";

import { Level } from "../../_models/2025/Level";

export function Sponsor() {
  return (
    <section className="bg-[url('/2025/bg_sponsor.png')] bg-cover bg-center bg-no-repeat">
      <div className="px-6 py-20 md:px-10 md:py-40">
        <div className="mb-6 text-center md:mb-[72px]">
          <h2 className="mb-2 text-sm font-medium text-[#FAFAFA] md:mb-4 md:text-2xl">SPONSOR</h2>
          <h3 className="text-2xl font-bold text-[#FAFAFA] md:text-5xl xl:text-6xl">함께하는 기업</h3>
        </div>
        <div className="mx-auto max-w-[1040px] space-y-[72px]">
          {SponsorGroup(Level.PLATINUM)}
          {SponsorGroup(Level.GOLD)}
          {SponsorGroup(Level.SILVER)}
        </div>
      </div>
    </section>
  );
}

function SponsorGroup(level: Level) {
  const logos: string[] = [];
  if (level === Level.PLATINUM) {
    logos.push();
  } else if (level === Level.GOLD) {
    logos.push();
  } else if (level === Level.SILVER) {
    logos.push();
  }

  return (
    <div>
      <div className="mb-1 flex justify-center">
        <Image
          src={`/2025/sponsors/star_${level.toLowerCase()}.svg`}
          alt="sponsor logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-6 md:w-10"
        />
      </div>
      <p className="mb-3 text-center text-xl font-bold text-[#FAFAFA] md:text-4xl">{level}</p>
      <div className="mb-10 h-px w-full bg-[#FAFAFA]" />
      <div className="grid w-full grid-cols-2 gap-6">
        {logos.map((logo) => (
          <div
            key={logo}
            className="flex h-[91px] items-center justify-center rounded-[5px] bg-[#FAFAFA] px-4 md:h-[136px] md:px-10"
          >
            <img src={`/2025/sponsors/${logo}`} alt="sponsor logo" />
          </div>
        ))}
      </div>
    </div>
  );
}
