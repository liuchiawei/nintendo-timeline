import type { Metadata } from "next";
import { Montserrat, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-notoSansJP",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nintendo Chronology | 任天堂クロニクル",
  description: "From 8-bit to Next-Gen: The Evolution of Nintendo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${montserrat.variable} ${notoSansJP.variable} bg-dot-28-s-2-foreground/20 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
