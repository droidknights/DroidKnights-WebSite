import { useTranslations } from "next-intl";
import Link from "next/link";

export function Ticket() {
  const t = useTranslations("app.2024.ticket");

  return (
    <section className="flex justify-center bg-[#333333]">
      <div className="flex max-w-[1366px] flex-col items-center px-6 py-20 text-center md:px-10 md:py-40 xl:px-40">
        <div className="mb-[26px] text-center md:mb-[72px]">
          <h2 className="mb-4 text-sm font-medium text-[#46A7E0] md:text-2xl">{t("eyebrow")}</h2>
          <h3 className="text-2xl font-bold text-white md:text-5xl xl:text-6xl">{t("title")}</h3>
        </div>
        <div className="grid w-full grid-cols-2 gap-3 md:gap-[18px] xl:gap-9">
          <div className="mr-3 rounded-[5px] bg-black/50 px-4 py-9 text-center md:py-[49px] xl:py-[46px]">
            <p className="mb-2.5 text-sm font-semibold text-[#4CBCFF] md:text-2xl">{t("general")}</p>
            <p className="mb-2.5 text-2xl font-bold text-white md:text-4xl">{t("generalPrice")}</p>
            <p className="text-sm font-medium text-white opacity-80 md:text-xl">{t("generalNote")}</p>
          </div>
          <div className="rounded-[5px] bg-black/50 px-4 py-9 text-center md:py-[49px] xl:py-[46px]">
            <p className="mb-2.5 text-sm font-semibold text-[#4CBCFF] md:text-2xl">{t("student")}</p>
            <p className="mb-2.5 text-2xl font-bold text-white md:text-4xl">{t("studentPrice")}</p>
            <p className="text-sm font-medium text-white opacity-80 md:text-xl">{t("studentNote")}</p>
          </div>
        </div>
        <Link href="https://festa.io/events/4990" target="_blank" className="flex w-full justify-center">
          <div className="mt-[26px] mb-2 w-full rounded-[10px] bg-[#4CBCFF] py-5 text-center font-semibold md:mt-[72px] md:mb-3 md:w-fit md:px-[144px] md:py-7 md:text-xl">
            {t("cta")}
          </div>
        </Link>
        <p className="text-sm font-medium text-[#888888] md:text-xl">{t("notice")}</p>
      </div>
    </section>
  );
}
