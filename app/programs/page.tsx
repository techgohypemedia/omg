import React from 'react';
import { Navbar } from '@/components/navbar';
import { FooterSection } from '@/components/sections/footer-section';
import { ProgramsSection } from '@/components/sections/programs-section';
import { GoldSunMark } from '@/components/ui/gold-sun-mark';

export const metadata = {
  title: 'Guided Programs — OMG Tribe',
  description: 'A box gives you the tools. A program builds the habit. Short, guided, and run on WhatsApp.',
};

export default function ProgramsPage() {
  const steps = [
    {
      step: '01',
      title: 'Delivered to WhatsApp',
      desc: 'No apps to install. No passwords to forget. Your daily guidance arrives in the app you already open every morning.'
    },
    {
      step: '02',
      title: 'Five Minutes Daily',
      desc: 'Short enough that you never skip it on travel or busy work days. Long enough to rewire your morning momentum.'
    },
    {
      step: '03',
      title: 'Direct Mentor Access',
      desc: 'Have a question about sensation, mala counting, or room placement? Text back and get an answer from our pandit or guide.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF5] text-[#2A2317]">
      <Navbar />

      <main className="flex-1">
        {/* Dark Hero Band */}
        <section className="bg-[#171208] text-[#FCFAF5] py-20 sm:py-24 text-center border-b border-[rgba(233,219,188,0.15)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="inline-flex items-center justify-center gap-2 mb-3">
              <GoldSunMark size={16} />
              <span className="eyebrow-label text-[#D3B36B]">Habit Architecture</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#FCFAF5] tracking-tight mb-4">
              A box gives you the tools. A program builds the habit.
            </h1>
            <p className="font-serif italic text-xl text-[#E9DBBC] max-w-xl mx-auto font-light">
              Short, guided, and run on WhatsApp. No app to download. Nothing to log into.
            </p>
          </div>
        </section>

        {/* How WhatsApp Cohorts Work (Light) */}
        <section className="bg-[#FCFAF5] py-20 sm:py-24 border-b border-[rgba(42,35,23,0.1)] w-full">
          <div className="w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="eyebrow-label text-[#A8842F] block mb-2">How It Works</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2317]">
                Spiritual discipline made frictionless.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((s) => (
                <div
                  key={s.step}
                  className="p-8 bg-[#FCFAF5] border border-[rgba(42,35,23,0.12)] hover:border-[#A8842F]/60 transition-all duration-300 rounded-xs shadow-xs hover:shadow-md"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <GoldSunMark size={14} />
                    <span className="font-mono text-xs text-[#A8842F] uppercase tracking-wider font-semibold">
                      STEP {s.step}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#2A2317] mb-2.5">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-[#6A6052] font-light leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Cards */}
        <ProgramsSection hideHeader={true} />
      </main>

      <FooterSection />
    </div>
  );
}
