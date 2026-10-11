import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <a className="skip-link" href="#main-content">Перейти до вмісту</a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
