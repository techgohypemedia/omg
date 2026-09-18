import React from 'react';
import { Navbar } from '@/components/navbar';
import { FooterSection } from '@/components/sections/footer-section';
import { SpiritualBoxesSection } from '@/components/sections/spiritual-boxes-section';
import { GoldSunMark } from '@/components/ui/gold-sun-mark';

export const metadata = {
  title: 'Spiritual Boxes & Pieces — OMG Tribe',
  description: 'Three complete practices in one box. Real stones, real seeds, real copper. Blessed and packed by hand.',
};

export default function SpiritualBoxesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF5] text-[#2A2317]">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="bg-[#171208] text-[#FCFAF5] py-16 sm:py-20 border-b border-[rgba(233,219,188,0.15)] text-center">
          <div className="max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center justify-center gap-2 mb-3">
              <GoldSunMark size={16} />
              <span className="eyebrow-label text-[#D3B36B]">The Collection</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#FCFAF5] tracking-tight mb-4">
              Spiritual Boxes & Sacred Pieces
            </h1>
            <p className="font-serif italic text-xl text-[#E9DBBC] max-w-xl mx-auto font-light">
              Real stones, real seeds, real copper. And a card for every piece that tells you what it is and why it is there.
            </p>
          </div>
        </section>

        {/* Boxes and Pieces list */}
        <SpiritualBoxesSection />
      </main>

      <FooterSection />
    </div>
  );
}
