import { Metadata } from "next";
import { fontPretendard } from "./_styles/fonts/font";
import "./_styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={fontPretendard.className}>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.droidknights.dev"),
  title: "드로이드나이츠 2024",
  description:
    "대한민국 최대 안드로이드 개발자들만을 위한 컨퍼런스 드로이드나이츠 2024 입니다. 주니어부터 시니어까지 모두가 공감하고 즐길 수 있는 지식의 장으로 만들고자 합니다.",
  openGraph: {
    title: "드로이드나이츠 2024",
    description:
      "대한민국 최대 안드로이드 개발자들만을 위한 컨퍼런스 드로이드나이츠 2024 입니다. 주니어부터 시니어까지 모두가 공감하고 즐길 수 있는 지식의 장으로 만들고자 합니다.",
    images: [{ url: "/og_image.png" }],
  },
};
