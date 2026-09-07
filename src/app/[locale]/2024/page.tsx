import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

import { Footer } from "@/src/_components/2024/Footer";
import { LastEvent } from "@/src/_components/2024/LastEvent";
import { Location } from "@/src/_components/2024/Location";
import { QnaCard } from "@/src/_components/2024/QnaCard";
import { Sponsor } from "@/src/_components/2024/Sponsor";
import { Terms } from "@/src/_components/2024/Terms";
import { Ticket } from "@/src/_components/2024/Ticket";
import { SessionCard } from "@/src/_components/2024/sessions/SessionsCard";
import { LocaleSwitcher } from "@/src/_components/common/LocaleSwitcher";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("app.2024.metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <Description />
        <SessionCard />
        <Ticket />
        <Location />
        <Sponsor />
        <QnaCard />
        <LastEvent />
        <Terms />
        <Footer />
      </div>
      <div id="popup-root" />
    </main>
  );
}

function Header() {
  const t = useTranslations("app.2024.header");

  return (
    <section className="relative">
      <img
        src="/2024/banner_text.png"
        alt={t("bannerTextAlt")}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4"
      />
      <div className="fixed flex w-full justify-between p-3 backdrop-blur md:px-10 md:py-5 xl:px-20">
        <img src="/2024/logo.svg" alt={t("logoAlt")} />
        <div className="flex items-center gap-2 md:gap-3">
          <LocaleSwitcher />
          <Link href="https://festa.io/events/4990" target="_blank">
            <div className="cursor-point rounded bg-white px-4 py-2 text-xs font-semibold md:px-3 md:py-[10px] md:text-sm">
              {t("festa")}
            </div>
          </Link>
        </div>
      </div>
      <img src="/2024/banner_bg.png" alt={t("bannerAlt")} className="h-[640px] w-screen object-cover" />
    </section>
  );
}

function Description() {
  const t = useTranslations("app.2024.description");

  return (
    <section className="flex justify-center">
      <div className="flex max-w-[1366px] flex-col items-center px-6 md:px-20">
        <img className="absolute mt-10 hidden md:block" src="/2024/arrow_down.svg" alt="" aria-hidden />
        <div className="py-20 text-center md:py-40">
          <h1 className="mb-4 text-2xl leading-normal font-bold md:text-5xl md:leading-normal">
            {t.rich("title", { br: () => <br /> })}
          </h1>
          <h2 className="text-xl leading-normal font-medium md:text-4xl md:leading-normal">
            {t.rich("subtitle", { br: () => <br /> })}
          </h2>
        </div>
      </div>
    </section>
  );
}
