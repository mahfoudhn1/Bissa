import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import './globals.css'
import Header from "./components/home/header";
import Footer from "./components/home/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bissa",
  description: "Bissa eco",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body

      >

        {children}

      </body>
    </html>
  );
}
