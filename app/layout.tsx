import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Portfolio Erick B",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-x-hidden`}>
        {/* Background */}
        <div className="fixed inset-0 -z-10">
          <StarsCanvas />
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Full-width content (centrado se controla por sección) */}
        <main className="w-full pt-[65px]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}