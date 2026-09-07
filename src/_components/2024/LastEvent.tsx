import { useTranslations } from "next-intl";

export function LastEvent() {
  const t = useTranslations("app.2024.lastEvent");

  return (
    <section className="flex flex-col items-center bg-linear-to-b from-[#000000] to-[#666666]">
      <div className="px-6 pt-20 text-center md:pt-40">
        <h2 className="mb-2 text-sm font-medium text-[#46A7E0] md:mb-4 md:text-2xl xl:mb-4">{t("eyebrow")}</h2>
        <h3 className="mb-6 text-2xl font-bold text-white md:mb-[72px] md:text-5xl xl:text-6xl">{t("title")}</h3>
      </div>
      <div className="w-full">
        <iframe
          width="0"
          height="0"
          src="https://www.youtube.com/embed/YK9t22I3UOQ?si=C-e577HplCalJ3Qp"
          title={t("videoTitle")}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="h-[212px] w-full md:h-[443px] xl:h-[786px]"
        />
      </div>
    </section>
  );
}
