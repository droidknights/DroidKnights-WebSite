import { Metadata } from "next";
import { fontPretendard } from "./_styles/fonts/font";
import "./_styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontPretendard.className}>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.droidknights.dev"),
  title: "Droid Knights 2024",
  description: "드로이드나이츠는 안드로이드 개발자들의 경험을 공유하고 만남의 장을 만드는 컨퍼런스입니다.",
  openGraph: {
    title: "Droid Knights 2024",
    description: "드로이드나이츠는 안드로이드 개발자들의 경험을 공유하고 만남의 장을 만드는 컨퍼런스입니다.",
    images: [{ url: "/og_image.png" }],
  },
};
