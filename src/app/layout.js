import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ライト家族 NPO 法人 With You Global",
  description: "ライト家族(Light Family)は、岩手県大船渡市・陸前高田市を主な活動拠点としてチャレンジする若者を支援するグローバルなNPO法人、With You Globalのウェブサイトです。カフェ、エクレシアコーヒーを運営し家族のように安心できる居場所づくりや、ひとり一人がライトのように輝くための活動を行っています。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{margin: 0}}>{children}</body>
    </html>
  );
}
