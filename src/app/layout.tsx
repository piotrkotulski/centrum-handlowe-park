import type { Metadata } from "next";
import { Inter, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
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
    <html lang="pl" suppressHydrationWarning className={`${inter.variable} ${bodoni.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <ThemeProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
