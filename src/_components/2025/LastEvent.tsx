import { useTranslations } from "next-intl";

export function LastEvent() {
  const t = useTranslations("app.2025.lastEvent");

  return (
    <section className="bg-linear-to-b from-[#000000] to-[#666666]">
      <div className="pt-20 md:pt-40">
        <div className="mb-6 px-6 text-center md:mb-[72px]">
          <h2 className="mb-2 text-sm font-medium text-[#5180FF] md:mb-4 md:text-2xl">{t("eyebrow")}</h2>
          <h3 className="text-2xl font-bold text-white md:text-5xl">{t("title")}</h3>
        </div>
        <div className="w-full">
          <iframe
            width="0"
            height="0"
            src="https://www.youtube.com/embed/xsAI6jvI3xk?si=XIYGNMaG3xgQex_R"
            title={t("videoTitle")}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="h-[212px] w-full md:h-[443px] xl:h-[786px]"
          />
        </div>
      </div>
    </section>
  );
}
