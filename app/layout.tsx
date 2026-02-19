import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const ppMori = localFont({
  src: "./fonts/PPMori-Regular.otf",
  variable: "--font-pp-mori",
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nuturn — Modern Clothing Brand",
  description:
    "Discover Nuturn — a modern clothing brand crafted for those who move between worlds. Elevated essentials, refined silhouettes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${ppMori.variable} ${geist.variable} antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
