import { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
