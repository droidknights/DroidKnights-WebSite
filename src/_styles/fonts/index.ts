import localFont from "next/font/local";

export const fontPretendardJP = localFont({
  src: [
    {
      path: "../pretendard-jp/PretendardJPVariable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-pretendard-jp",
  preload: false,
  display: "swap",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
  adjustFontFallback: false,
});
