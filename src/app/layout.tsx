import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Navexor Global Trade | Trading & Logística",
  description: "Torre de controle logística 4PL com soluções completas em frete internacional e desembaraço aduaneiro.",
};

import FloatingBlogButton from "@/components/FloatingBlogButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased text-gray-900 bg-white`}>
        <NavBar />
        <FloatingBlogButton />
        {children}
      </body>
    </html>
  );
}
