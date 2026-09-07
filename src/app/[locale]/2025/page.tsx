import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

import { Faqs } from "@/src/_components/2025/Faqs";
import { Footer } from "@/src/_components/2025/Footer";
import { LastEvent } from "@/src/_components/2025/LastEvent";
import { Location } from "@/src/_components/2025/Location";
import { Sponsors } from "@/src/_components/2025/Sponsors";
import { Terms } from "@/src/_components/2025/Terms";
import { Ticket } from "@/src/_components/2025/Ticket";
import { Timetable } from "@/src/_components/2025/sessions/Timetable";
import { LocaleSwitcher } from "@/src/_components/common/LocaleSwitcher";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("app.2025.metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Home() {
  const t = useTranslations("app.2025.header");

  return (
    <>
      <div>
        <Header />
        <div className="bg-[#0F0F0F] pt-[77px]">
          <Image src="/2025/banner.png" alt={t("bannerAlt")} width={0} height={0} sizes="100vw" className="w-full" />
        </div>
        <main>
          <div>
            <Description />
            <Timetable />
            <Ticket />
            <Location />
            <Sponsors />
            <Faqs />
            <LastEvent />
            <Terms />
          </div>
        </main>
        <Footer />
      </div>
      <div id="popup-root" />
    </>
  );
}

function Header() {
  const t = useTranslations("app.2025.header");

  return (
    <header className="fixed top-0 h-[77px] w-full bg-[#0F0F0F]/20 backdrop-blur-[20px]">
      <div className="mx-auto flex h-full max-w-[1366px] items-center justify-between px-5 md:px-10">
        <Image src="/2025/logo.png" alt={t("logoAlt")} width={94} height={36} />
        <div className="flex items-center gap-2 md:gap-3">
          <LocaleSwitcher />
          <Link href="https://ticketa.co/event/xxpoaaeu" target="_blank">
            <div className="cursor-point rounded bg-white px-4 py-2 text-xs font-semibold md:px-3 md:py-2.5 md:text-sm">
              {t("ticket")}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

function Description() {
  const t = useTranslations("app.2025.description");

  return (
    <section className="bg-[#FAFAFA]">
      <div className="relative mx-auto flex max-w-[1366px] flex-col items-center px-6 md:px-20">
        <img className="absolute mt-10 hidden md:block" src="/2024/arrow_down.svg" alt="" aria-hidden />
        <div className="py-20 text-center md:py-40">
          <h1 className="mb-4 text-xl leading-[1.4] font-bold md:mb-6 md:text-5xl md:leading-[1.4]">
            {t.rich("title", { br: () => <br /> })}
          </h1>
          <h2 className="text-lg leading-[1.3] font-medium md:text-4xl md:leading-[1.3]">
            {t.rich("subtitle", { br: () => <br /> })}
          </h2>
        </div>
      </div>
    </section>
  );
}
