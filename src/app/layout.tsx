import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "MarlBros FC — Official Club Website & Jersey Shop",
  description:
    "Official website of MarlBros FC. Founded in 2023, grown from 7 to 30 brothers strong. Order the official 2026 Batch #01 jersey and explore our club story.",
  keywords: ["MarlBros FC", "football club", "jersey order", "football jersey Bangladesh", "bKash jersey"],
  authors: [{ name: "MarlBros FC" }],
  openGraph: {
    title: "MarlBros FC — Official Club Website & Jersey Shop",
    description: "From 7 to 30 Brothers Strong. Order the official 2026 Batch #01 jersey.",
    url: "https://marlbrosfc.com",
    siteName: "MarlBros FC",
    images: [
      {
        url: "/images/jersey-showcase.jpg",
        width: 1024,
        height: 682,
        alt: "MarlBros FC 2026 Official Jersey",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-[#111111] antialiased selection:bg-[#70111A] selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
