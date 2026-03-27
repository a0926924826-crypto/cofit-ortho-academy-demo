import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "骨關節學院 Demo",
  description: "LINE 官方帳號骨關節診斷與復健 Demo",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-slate-100`}
    >
      <body className="min-h-full flex flex-col items-center">
        <main className="w-full max-w-md bg-white min-h-screen shadow-2xl relative flex flex-col overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
