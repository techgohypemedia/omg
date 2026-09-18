import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { FooterSection } from '@/components/sections/footer-section';
import { GoldSunMark } from '@/components/ui/gold-sun-mark';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'O is for Om — OMG Tribe',
  description: 'Everything starts with a sound. The oldest books call it the first one, the one everything else came from.',
};

export default function OmPage() {
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
              O
            </span>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <GoldSunMark size={16} />
              <span className="eyebrow-label text-[#D3B36B]">The Sound</span>
            </div>

            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="font-serif text-6xl sm:text-7xl font-light text-[#D3B36B]">
                O
              </span>
              <span className="font-devanagari text-4xl sm:text-5xl text-[#E9DBBC]">
                ॐ
              </span>
              <span className="font-serif text-4xl sm:text-5xl font-light text-[#FCFAF5]">
                Om
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FCFAF5] tracking-tight mb-8">
              Everything starts with a sound.
            </h1>

            {/* Paragraphs */}
            <div className="space-y-6 text-base sm:text-lg text-[#FCFAF5]/85 leading-relaxed text-left sm:text-center max-w-2xl mx-auto mb-12 font-light">
              <p>
                Before anything was made, there was a sound. Om is that sound. The oldest books call it the first one, the one everything else came from.
              </p>
              <p>
                This is why every prayer in India starts with it. And why it is the first letter of our name.
              </p>
              <p>
                It is also the easiest practice there is. You do not have to believe anything. Sit down, say it once, and see how much quieter you feel.
              </p>
            </div>

            <div>
              <Link
                href="/#boxes"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#A8842F] hover:bg-[#D3B36B] text-[#FCFAF5] text-xs uppercase tracking-[0.18em] transition-colors font-medium rounded-xs shadow-md"
              >
                <span>Start with the Meditation Box</span>
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
                <span className="font-mono text-xs text-[#A8842F] block mb-2">01 · THE FREQUENCY</span>
                <h3 className="font-serif text-xl text-[#2A2317] mb-2">432 Hz Resonance</h3>
                <p className="text-xs text-[#6A6052] leading-relaxed">
                  The sound vibrates the vagus nerve in the chest and throat, calming heart rate in under 90 seconds.
                </p>
              </div>

              <div className="p-6 bg-[#F5F0E5] border border-[rgba(42,35,23,0.1)]">
                <span className="font-mono text-xs text-[#A8842F] block mb-2">02 · NO DOGMA</span>
                <h3 className="font-serif text-xl text-[#2A2317] mb-2">Just Breath</h3>
                <p className="text-xs text-[#6A6052] leading-relaxed">
                  You don&apos;t need to convert, chant hymns, or follow a guru. It is a biological acoustic reset.
                </p>
              </div>

              <div className="p-6 bg-[#F5F0E5] border border-[rgba(42,35,23,0.1)]">
                <span className="font-mono text-xs text-[#A8842F] block mb-2">03 · DAILY ANCHOR</span>
                <h3 className="font-serif text-xl text-[#2A2317] mb-2">5 Minutes Morning</h3>
                <p className="text-xs text-[#6A6052] leading-relaxed">
                  Before touching your phone, sit on your mat and chant Om three times. Your day begins centered.
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
