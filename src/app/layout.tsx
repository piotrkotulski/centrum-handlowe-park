import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Centrum Handlowe PARK | Częstochowa",
  description:
    "Nowoczesny budynek handlowo-usługowo-mieszkalny w Częstochowie. Lokale komercyjne i mieszkalne na sprzedaż. 5 kondygnacji, 2146 m², 40 miejsc parkingowych.",
  keywords:
    "centrum handlowe, Częstochowa, lokale komercyjne, mieszkania, inwestycja, nieruchomości",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
