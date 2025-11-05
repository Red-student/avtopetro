"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { Providers } from "./providers/provider";
import { HeroUIProvider } from "@heroui/system";
import { Metadata } from "next";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/*export const metadata: Metadata = {
  title: "AvtoPetro",
  description: "A good car lasts a long time.",
};*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeroUIProvider>
          <Providers>
          <Header  />
          {children}
          </Providers>
        </HeroUIProvider>
        
      </body>
    </html>
  );
}
