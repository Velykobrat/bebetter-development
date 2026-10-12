import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { pageMetadata, siteDescription, siteUrl } from "@/lib/site";
import "./globals.css";
import "../styles/studio.css";
import "../styles/about.css";
import "../styles/lab.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  ...pageMetadata("BeBetter Development — Technology to Be Better", siteDescription, "/"),
  metadataBase: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={geistSans.variable}>
        <a className="skip-link" href="#main-content">Перейти до вмісту</a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
