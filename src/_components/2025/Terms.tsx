"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export function Terms() {
  const t = useTranslations("app.2025.terms");

  return (
    <section className="bg-[url('/2025/bg_terms.png')] bg-cover bg-center bg-no-repeat">
      <div className="px-6 py-10 md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[950px]">
          <div className="mb-8 rounded-[10px] bg-white/15 px-6 py-10 text-center md:mb-10">
            <h3 className="mb-4 text-center leading-normal font-bold text-white md:mb-8 md:text-[32px] md:leading-normal">
              {t.rich("share.title", { br: () => <br /> })}
            </h3>
            <div className="flex justify-center">
              <button
                type="button"
                className="flex h-[39px] w-[138px] items-center justify-center rounded bg-linear-to-r from-[#5180FF] to-[#215BF6] text-xs font-semibold text-white md:h-[64px] md:w-[300px] md:text-xl"
                onClick={() => {
                  navigator.clipboard.writeText("https://droidknights.dev");
                  alert(t("share.copied"));
                }}
              >
                <Image
                  src="/2024/share.svg"
                  alt={t("share.buttonIconAlt")}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-[16px] md:w-[24px]"
                />
                <span className="ml-1 md:ml-2">{t("share.button")}</span>
              </button>
            </div>
          </div>
          <div className="rounded-[10px] bg-white/15 px-6 py-10 text-center md:mb-10">
            <h3 className="mb-4 text-center leading-normal font-bold text-white md:mb-8 md:text-[32px] md:leading-normal">
              {t.rich("codeOfConduct.title", { br: () => <br /> })}
            </h3>
            <div className="flex justify-center">
              <Link
                href="https://maryang.notion.site/2024-f4c593c4be174647b5b3aa28a0f52490?pvs=4"
                target="_blank"
                className="flex h-[39px] w-[138px] items-center justify-center rounded bg-white text-xs font-semibold md:h-[64px] md:w-[300px] md:text-xl"
              >
                {t("codeOfConduct.button")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
