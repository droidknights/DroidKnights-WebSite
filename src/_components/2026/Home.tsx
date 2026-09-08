import { useTranslations } from "next-intl";
import Image from "next/image";

import { LocaleSwitcher } from "../common/LocaleSwitcher";

import { Description } from "./Description";
import { Faqs } from "./Faqs";
import { Footer } from "./Footer";
import { LastEvent } from "./LastEvent";
import { Location } from "./Location";
import { Sponsors } from "./Sponsors";
import { Terms } from "./Terms";

export function Home2026() {
  const t = useTranslations("app.2026.header");

  return (
    <div className="bg-dk-space text-dk-ink">
      <Header />
      <div className="bg-dk-space pt-[77px]">
        <Image src="/2026/banner.png" alt={t("bannerAlt")} width={0} height={0} sizes="100vw" className="w-full" />
      </div>
      <main>
        <Description />
        <Location />
        <Sponsors />
        <Faqs />
        <LastEvent />
        <Terms />
      </main>
      <Footer />
      <div id="popup-root" />
    </div>
  );
}

function Header() {
  const t = useTranslations("app.2026.header");

  return (
    <header className="bg-dk-space/70 fixed top-0 z-50 h-[77px] w-full border-b border-white/5 backdrop-blur-[20px]">
      <div className="mx-auto flex h-full max-w-[1366px] items-center justify-between px-5 md:px-10">
        <Image src="/2026/logo.png" alt={t("logoAlt")} width={94} height={36} />
        <LocaleSwitcher />
      </div>
    </header>
  );
}
