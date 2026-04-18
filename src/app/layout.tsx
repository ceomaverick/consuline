import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const headingFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading-family",
  display: 'swap',
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body-family",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Consuline™ | Health System Strategy & Operations",
  description: "Enterprise strategy for healthcare providers and hospital systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="antialiased font-sans flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}