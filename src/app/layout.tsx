import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfitFont = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stuudy App",
  description: "The study's organization app you need",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={outfitFont.className}>{children}</body>
    </html>
  );
}
