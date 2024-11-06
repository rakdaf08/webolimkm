import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export const metadata: Metadata = {
  title: "Olimpiade KM XII ITB",
  description:
    "OLIMPIADE XII KM ITB! Dengan semangat membara, para atlet dari penjuru kampus akan segera bertarung dalam ajang paling begengsi di bumi Ganesha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-olim-km.ico" />
      </head>
      <body className="overflow-x-hidden pt-[70px] sm:pt-[70px] md:pt-[90px] lg:pt-[80px]">
        <Navbar />
        <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
