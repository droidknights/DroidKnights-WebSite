"use client";

import { useTranslations } from "next-intl";

export function Terms() {
  const t = useTranslations("app.2024.terms");

  return (
    <section className="flex justify-center bg-[url('/2024/banner_black.png')] bg-cover bg-center bg-no-repeat">
      <div className="w-full max-w-[1366px] px-6 py-10 md:px-10 md:py-30 xl:px-40">
        <div className="mb-10 flex flex-col items-center rounded-[10px] bg-linear-to-b from-[#A0DCFF] to-[#33B3FF] px-6 py-10">
          <h3 className="mb-4 text-center leading-normal font-semibold md:mb-8 md:text-[32px] xl:text-4xl xl:leading-normal">
            {t.rich("share.title", { br: () => <br /> })}
          </h3>
          <button
            type="button"
            className="flex h-[39px] w-[138px] items-center justify-center rounded bg-black text-xs font-bold text-white md:h-[64px] md:w-[300px] md:text-xl md:font-semibold"
            onClick={() => {
              navigator.clipboard.writeText("https://droidknights.dev");
              alert(t("share.copied"));
            }}
          >
            <img src="/2024/share.svg" alt={t("share.buttonIconAlt")} className="mr-1 md:mr-2" />
            <span>{t("share.button")}</span>
          </button>
        </div>
        <div className="flex w-full flex-col items-center rounded-[10px] bg-linear-to-b from-[#EBFFDC] to-[#B5EE87] px-6 py-10">
          <h3 className="mb-4 text-center leading-normal font-semibold md:mb-8 md:text-4xl md:leading-normal">
            {t.rich("codeOfConduct.title", { br: () => <br /> })}
          </h3>
          <a
            href="https://maryang.notion.site/2024-f4c593c4be174647b5b3aa28a0f52490?pvs=4"
            target="_blank"
            className="w-[138px] md:w-[300px]"
          >
            <div className="flex h-[39px] items-center justify-center rounded bg-white text-xs font-bold text-black md:h-[64px] md:text-xl md:font-semibold">
              {t("codeOfConduct.button")}
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
