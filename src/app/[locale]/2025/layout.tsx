import { fontPretendardJP } from "../../../_styles/fonts/2024";
import "../../../_styles/globals.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={fontPretendardJP.className}>{children}</div>;
}
