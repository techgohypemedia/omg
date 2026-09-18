import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { FooterSection } from '@/components/sections/footer-section';
import { GoldSunMark } from '@/components/ui/gold-sun-mark';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'M is for Mārga — OMG Tribe',
  description: 'A path, not a purchase. Five minutes. Same corner. Same time. Until you stop having to decide.',
};

export default function MargaPage() {
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
              M
            </span>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <GoldSunMark size={16} />
              <span className="eyebrow-label text-[#D3B36B]">The Path</span>
            </div>

            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="font-serif text-6xl sm:text-7xl font-light text-[#D3B36B]">
                M
              </span>
              <span className="font-devanagari text-4xl sm:text-5xl text-[#E9DBBC]">
                मार्ग
              </span>
              <span className="font-serif text-4xl sm:text-5xl font-light text-[#FCFAF5]">
                Mārga
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FCFAF5] tracking-tight mb-8">
              A path, not a purchase.
            </h1>

            {/* Paragraphs */}
            <div className="space-y-6 text-base sm:text-lg text-[#FCFAF5]/85 leading-relaxed text-left sm:text-center max-w-2xl mx-auto mb-12 font-light">
              <p>
                Mārga means path. Not a feeling. A road you walk, one day at a time.
              </p>
              <p>
                Most people buy something spiritual and it ends up in a drawer. A path is different. Five minutes. Same corner. Same time. Until you stop having to decide.
              </p>
              <p>
                Every box we make is built around one short daily practice. Short, so that you keep doing it.
              </p>
            </div>

            <div>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#A8842F] hover:bg-[#D3B36B] text-[#FCFAF5] text-xs uppercase tracking-[0.18em] transition-colors font-medium rounded-xs shadow-md"
              >
                <span>See our programs</span>
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
                <span className="font-mono text-xs text-[#A8842F] block mb-2">01 · SAME CORNER</span>
                <h3 className="font-serif text-xl text-[#2A2317] mb-2">Spatial Cue</h3>
                <p className="text-xs text-[#6A6052] leading-relaxed">
                  Your nervous system bonds to locations. When you sit in the exact same spot each morning, calm happens faster.
                </p>
              </div>

              <div className="p-6 bg-[#F5F0E5] border border-[rgba(42,35,23,0.1)]">
                <span className="font-mono text-xs text-[#A8842F] block mb-2">02 · FIVE MINUTES</span>
                <h3 className="font-serif text-xl text-[#2A2317] mb-2">Too Small To Fail</h3>
                <p className="text-xs text-[#6A6052] leading-relaxed">
                  Grand hour-long routines collapse after 4 days. Five minutes survives busy travel, bad days, and deadlines.
                </p>
              </div>

              <div className="p-6 bg-[#F5F0E5] border border-[rgba(42,35,23,0.1)]">
                <span className="font-mono text-xs text-[#A8842F] block mb-2">03 · WHATSAPP GUIDE</span>
                <h3 className="font-serif text-xl text-[#2A2317] mb-2">Daily Companion</h3>
                <p className="text-xs text-[#6A6052] leading-relaxed">
                  Our cohorts send one clear text prompt each morning. No app logins. Just your morning path.
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
