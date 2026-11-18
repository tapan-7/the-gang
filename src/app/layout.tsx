import type { Metadata } from "next";
import { Fraunces, Caveat, DM_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/shell/SmoothScroll";
import { Header } from "@/components/shell/Header";
import { ChapterNav } from "@/components/shell/ChapterNav";
import { LightboxProvider } from "@/context/LightboxContext";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "THE GANG — A little chaos. A lot of memories.",
  description: "An illustrated, cinematic, interactive digital memory book documenting our group of 14 friends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${caveat.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="bg-parchment text-ink antialiased selection:bg-terracotta/20 selection:text-ink" suppressHydrationWarning>
        <LightboxProvider>
          <SmoothScroll>
            <Header />
            <ChapterNav />
            <main>{children}</main>
          </SmoothScroll>
        </LightboxProvider>
      </body>
    </html>
  );
}

