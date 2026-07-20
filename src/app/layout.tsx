import { Metadata } from "next";

import { fontPretendardJP } from "../_styles/fonts";
import "../_styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://droidknights.dev"),
  openGraph: {
    images: "/2026/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={fontPretendardJP.className}>{children}</body>
    </html>
  );
}
