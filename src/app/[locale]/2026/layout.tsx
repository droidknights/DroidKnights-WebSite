import { cn } from "@/src/_lib/utils/TailwindUtil";

import { fontDisplay, fontKR, fontMono } from "../../../_styles/fonts/2026";
import "../../../_styles/globals.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cn(fontDisplay.variable, fontKR.variable, fontMono.variable, "dk-2026 font-kr")}>{children}</div>
  );
}
