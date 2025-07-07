import type { Metadata } from "next";
import './globals.css'
import Navbar from "@/components/Comman/Navbar";
import Footer from "@/components/Comman/Footer";
import CTA from "@/components/Comman/CTA";

export const metadata: Metadata = {
  title: "Wanderlogue | Your Ultimate Travel Companion | Travel Guides & Adventures",
  description: "Discover extraordinary destinations, expert travel tips, and authentic adventures with Wanderlogue. From detailed itineraries to hidden gems, we're your gateway to unforgettable travel experiences worldwide.",
  keywords: "travel blog, travel guides, adventure travel, travel tips, destination guides, travel vlog, wanderlust, travel inspiration, backpacking, luxury travel",
  authors: [{ name: "Sethu Acshya" }],
  openGraph: {
    title: "Wanderlogue | Your Ultimate Travel Companion",
    description: "Discover extraordinary destinations, expert travel tips, and authentic adventures with Wanderlogue.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar />
        {children}
        <CTA />
        <Footer />
      </body>
    </html>
  );
}
