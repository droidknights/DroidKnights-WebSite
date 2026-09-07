import { useTranslations } from "next-intl";
import Link from "next/link";

export const Footer = () => {
  const t = useTranslations("app.2024.footer");

  return (
    <footer className="w-full bg-[#0F0F0F]">
      <div className="mx-auto flex max-w-[1366px] items-center justify-between px-5 py-10 md:px-10">
        <div className="flex items-center">
          <p className="text-sm text-white">{t("copyright")}</p>
          <span className="mx-3 text-sm text-white">|</span>
          <p className="text-sm text-white">{t("rights")}</p>
        </div>
        <div className="flex items-center gap-x-3">
          <Link href="https://www.instagram.com/droid_knights/" target="_blank">
            <img src="/2024/social/instagram.svg" alt="instagram" />
          </Link>
          <Link href="https://www.facebook.com/droidknights" target="_blank">
            <img src="/2024/social/facebook.svg" alt="facebook" />
          </Link>
          <Link href="https://www.youtube.com/@DroidKnights" target="_blank">
            <img src="/2024/social/youtube.svg" alt="youtube" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
