import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { Home2026 } from "@/src/_components/2026/Home";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  return {
    title: t("app.2026.metadata.title"),
    description: t("app.2026.metadata.description"),
  };
}

export default async function Home() {
  return <Home2026 />;
}
