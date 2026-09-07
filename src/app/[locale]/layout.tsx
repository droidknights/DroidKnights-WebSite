import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import "../../_styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://droidknights.dev"),
  icons: {
    shortcut: "/favicon.ico",
    icon: { url: "/2026/favicon48.png", sizes: "48x48", type: "image/png" },
    apple: { url: "/2026/favicon180.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    images: "/2026/opengraph-image.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
