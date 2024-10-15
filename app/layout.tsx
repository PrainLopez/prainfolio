import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Space_Grotesk, Space_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: "normal",
  variable: "--space-grotesk"
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: "normal",
  variable: "--space-mono"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <body>
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}
