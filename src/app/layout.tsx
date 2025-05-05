import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Berlin Bytes | Ashraf Beshtawi Portfolio",
  description: "Personal portfolio of Ashraf Beshtawi, a backend developer based in Berlin, specializing in PHP, Symfony, AI, and Crypto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark"> {/* Apply dark class */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} // Remove bg-secondary, body background handled in globals.css
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
