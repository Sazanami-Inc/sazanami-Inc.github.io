import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sazanami.ai"),
  title: {
    default: "Sazanami Inc.｜高校生の努力を証拠に変えるAIポートフォリオ",
    template: "%s｜Sazanami Inc.",
  },
  description:
    "Sazanami Inc.は教育領域におけるAI×データ活用を推進し、高校生の活動ログを証拠に変える「Sazanami-Analytics」を提供しています。",
  openGraph: {
    title: "Sazanami Inc.｜高校生の努力を証拠に変えるAIポートフォリオ",
    description:
      "SlackやGitHubなどの活動ログを構造化し、大学推薦やコンテスト提出にそのまま使えるAIポートフォリオを生成します。",
    url: "https://sazanami.ai",
    siteName: "Sazanami Inc.",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSans.variable}`}>
      <body className="bg-slate-950 text-slate-100">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
