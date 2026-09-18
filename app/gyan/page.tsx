import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { FooterSection } from '@/components/sections/footer-section';
import { GoldSunMark } from '@/components/ui/gold-sun-mark';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'G is for Gyān — OMG Tribe',
  description: 'You were given the ritual. Not the reason. So everything we sell comes with a card that tells you the reason.',
};

export default function GyanPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF5] text-[#2A2317]">
      <Navbar />

      <main className="flex-1">
        {/* Dark Hero Band */}
        <section className="bg-[#171208] text-[#FCFAF5] py-24 sm:py-32 relative overflow-hidden border-b border-[rgba(233,219,188,0.15)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
          >
            <span className="font-serif text-[35vw] text-[#A8842F] opacity-[0.06] leading-none">
              G
            </span>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <GoldSunMark size={16} />
              <span className="eyebrow-label text-[#D3B36B]">The Knowing</span>
            </div>

            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="font-serif text-6xl sm:text-7xl font-light text-[#D3B36B]">
                G
              </span>
              <span className="font-devanagari text-4xl sm:text-5xl text-[#E9DBBC]">
                ज्ञान
              </span>
              <span className="font-serif text-4xl sm:text-5xl font-light text-[#FCFAF5]">
                Gyān
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FCFAF5] tracking-tight mb-8">
              You were given the ritual. Not the reason.
            </h1>

            {/* Paragraphs */}
            <div className="space-y-6 text-base sm:text-lg text-[#FCFAF5]/85 leading-relaxed text-left sm:text-center max-w-2xl mx-auto mb-12 font-light">
              <p className="font-serif text-2xl text-[#E9DBBC]">
                Gyān means knowing.
              </p>
              <p>
                A thread on your wrist. A shell in the cash box. Haldi tied in yellow cloth. Most of us grew up doing these things. Nobody told us why.
              </p>
              <p>
                The reasons are there. Some are three thousand years old and written down. They are much better than the half answers we got.
              </p>
              <p className="font-medium text-[#D3B36B]">
                So everything we sell comes with a card that tells you the reason. That is our promise. Nothing here is just for show.
              </p>
            </div>

            <div>
              <Link
                href="/#philosophy"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#A8842F] hover:bg-[#D3B36B] text-[#FCFAF5] text-xs uppercase tracking-[0.18em] transition-colors font-medium rounded-xs shadow-md"
              >
                <span>Read our philosophy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Supporting Context (Light) */}
        <section className="bg-[#FCFAF5] py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-[#F5F0E5] border border-[rgba(42,35,23,0.1)]">
                <span className="font-mono text-xs text-[#A8842F] block mb-2">01 · THE ORIGIN CARD</span>
                <h3 className="font-serif text-xl text-[#2A2317] mb-2">Included with Every Piece</h3>
                <p className="text-xs text-[#6A6052] leading-relaxed">
                  We print the exact Sanskrit verse, its translation, and the physical mechanism of why it is positioned where it is.
                </p>
              </div>

              <div className="p-6 bg-[#F5F0E5] border border-[rgba(42,35,23,0.1)]">
                <span className="font-mono text-xs text-[#A8842F] block mb-2">02 · NO SUPERSTITION</span>
                <h3 className="font-serif text-xl text-[#2A2317] mb-2">Zero Fear Marketing</h3>
                <p className="text-xs text-[#6A6052] leading-relaxed">
                  No doshas that threaten doom. We reject fear and return to the original wisdom of Panchtatva.
                </p>
              </div>

              <div className="p-6 bg-[#F5F0E5] border border-[rgba(42,35,23,0.1)]">
                <span className="font-mono text-xs text-[#A8842F] block mb-2">03 · TRACEABLE ROOTS</span>
                <h3 className="font-serif text-xl text-[#2A2317] mb-2">Named Mines & Artisans</h3>
                <p className="text-xs text-[#6A6052] leading-relaxed">
                  From Moradabad copper to Himalayan rudraksha collectors, every artisan is compensated and named with pride.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
