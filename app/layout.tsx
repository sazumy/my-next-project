import "./globals.css";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    template: "%s | シンプルなコーポレートサイト", // %s にページタイトルが入る
    default: "シンプルなコーポレートサイト",
  },
  description:
    "「Next.js+ヘッドレスCMSではじめる！かんたん・モダンWebサイト制作入門」で作成されるサイトです。",
  openGraph: {
    // ソーシャルメディア上での表示設定
    title: "シンプルなコーポレートサイト",
    description:
      "「Next.js+ヘッドレスCMSではじめる！かんたん・モダンWebサイト制作入門」で作成されるサイトです。",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "http://localhost:3000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
