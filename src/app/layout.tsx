import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Navexor Global Trade | Trading & Logística",
  description: "Torre de controle logística 4PL com soluções completas em frete internacional e desembaraço aduaneiro.",
};

import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageDetector from "@/components/LanguageDetector";
import dynamic from 'next/dynamic';
import FloatingBlogButton from "@/components/FloatingBlogButton";

const CookieConsent = dynamic(() => import("@/components/CookieConsent"));
const MobileTabBar = dynamic(() => import("@/components/MobileTabBar"));
const Footer4Col = dynamic(() => import("@/components/ui/footer-column"));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased text-gray-900 bg-white overflow-x-hidden`}>
        <LanguageProvider>
          <LanguageDetector />
          <NavBar />
          <FloatingBlogButton />
          <CookieConsent />
          <MobileTabBar />
          <div className="pb-16 lg:pb-0">
            <main>
              {children}
            </main>
            <Footer4Col />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}

