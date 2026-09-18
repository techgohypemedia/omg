import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Tiro_Devanagari_Sanskrit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { CartDrawer } from "@/components/cart-drawer";
import { ConsultationModal } from "@/components/consultation-modal";
import { SearchModal } from "@/components/search-modal";
import { AccountModal } from "@/components/account-modal";
import { SmoothScroller } from "@/components/smooth-scroller";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const devanagari = Tiro_Devanagari_Sanskrit({
  variable: "--font-devanagari",
  subsets: ["latin", "devanagari"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "OMG Tribe — Om · Mārga · Gyān",
  description: "The sound. The path. The knowing. Everything you need for one daily ritual, in one box. Real stones, real seeds, real copper.",
  icons: {
    icon: "/images/omg-sun-mark.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable} ${devanagari.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--paper)] text-[var(--ink)] font-sans selection:bg-[var(--gold)] selection:text-[var(--paper)]">
        <CartProvider>
          <SmoothScroller />
          {children}
          <CartDrawer />
          <ConsultationModal />
          <SearchModal />
          <AccountModal />
        </CartProvider>
      </body>
    </html>
  );
}
