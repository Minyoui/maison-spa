import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito, Manrope, Averia_Serif_Libre, Carattere } from "next/font/google";
import "./globals.css";

// Components
import Navbar from "@/components/Navbar";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "600", "800"],
  display: "swap",
})

const carattere = Carattere({
  subsets: ["latin"],
  variable: "--font-carattere",
  weight: "400",
  display: "swap",
})

const averiaSerifLibre = Averia_Serif_Libre({
  subsets: ["latin"],
  variable: "--font-averia-serif-libre",
  weight: "400",
  display: "swap",
})

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maison`D Bali Spa",
  description: "Authentic Balinese wellness experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${nunito.variable} 
          ${manrope.variable}
          ${averiaSerifLibre.variable}
          ${carattere.variable}
          antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
