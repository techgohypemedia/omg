'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { FooterSection } from '@/components/sections/footer-section';
import { GoldSunMark } from '@/components/ui/gold-sun-mark';
import { ArrowRight, Sparkles, Compass, ShieldCheck, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const pillars = [
    {
      symbol: 'ॐ',
      letter: 'O',
      word: 'Om',
      meaning: 'The Sacred Sound & Source',
      description:
        'Before form was created, there was vibration. Om is the original frequency from which every tradition flows. We begin every offering with reverence for the ancient roots, ensuring the sanctity of the lineage remains untouched.',
    },
    {
      symbol: 'म',
      letter: 'M',
      word: 'Mārga',
      meaning: 'The Practical Daily Path',
      description:
        'Spirituality should not be intimidating or require hours of seclusion. Mārga is the disciplined, gentle path of small daily habits — a 10-minute morning sit, lighting a pure copper diya, or clearing stagnant room energy.',
    },
    {
      symbol: 'ज्ञ',
      letter: 'G',
      word: 'Gyān',
      meaning: 'The Reason Why',
      description:
        'No blind superstition or fear-based selling. We believe you should know why 108 beads are used in a japa mala, why copper is the preferred conduit for prana, and why rock salt dissolves negative ambient electromagnetic energy.',
    },
  ];

  const panchtatva = [
    {
      element: 'Prithvi (Earth)',
      icon: '🌿',
      desc: 'Authentic lotus seeds from Pushkar, Himalayan rudraksha, and raw earth-mined quartz crystals.',
    },
    {
      element: 'Jal (Water)',
      icon: '💧',
      desc: 'Purification rituals performed with pure sacred waters and consecrated cleansing practices.',
    },
    {
      element: 'Agni (Fire)',
      icon: '🔥',
      desc: 'Heavy-gauge pure copper diyas, organic camphor, and sacred cow ghee flames.',
    },
    {
      element: 'Vayu (Air)',
      icon: '💨',
      desc: 'Pure botanical sandalwood incense and natural dhoop crafted without artificial fragrances.',
    },
    {
      element: 'Akash (Space)',
      icon: '✨',
      desc: 'Harmonic 432 Hz tuned acoustic brass chimes and consecrated copper yantras.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF5] text-[#2A2317]">
      <Navbar />

      <main className="flex-1">
        {/* Editorial Dark Hero */}
        <section className="bg-[#171208] text-[#FCFAF5] py-20 sm:py-28 relative overflow-hidden border-b border-[rgba(233,219,188,0.15)] text-center">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#A8842F]/[0.08] blur-3xl" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <GoldSunMark size={16} />
              <span className="eyebrow-label text-[#D3B36B] tracking-[0.28em]">
                Our Philosophy & Origin
              </span>
              <GoldSunMark size={16} />
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#FCFAF5] tracking-tight mb-6">
              Rooted in Reverence. Guided by Truth.
            </h1>

            <p className="font-serif italic text-lg sm:text-2xl text-[#E9DBBC]/90 max-w-2xl mx-auto font-light leading-relaxed">
              We started OMG Tribe because spirituality had become either cheap plastic superstitions or distant inaccessible dogma. We are here to change that.
            </p>
          </div>
        </section>

        {/* The Meaning of OMG — Three Pillars */}
        <section id="trinity" className="py-20 sm:py-28 border-b border-[rgba(42,35,23,0.12)]">
          <div className="w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="eyebrow-label text-[#A8842F] block mb-2">The Name</span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#2A2317]">
                What O · M · G Stands For
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              {pillars.map((p) => (
                <div
                  key={p.letter}
                  className="bg-[#FCFAF5] border border-[rgba(42,35,23,0.12)] p-8 sm:p-10 shadow-xs hover:border-[#A8842F]/60 transition-all duration-300 rounded-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-serif text-5xl sm:text-6xl text-[#A8842F] font-light">
                        {p.letter}
                      </span>
                      <span className="font-devanagari text-4xl text-[#2A2317]/20 select-none">
                        {p.symbol}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-[#2A2317] mb-1">
                      {p.word}
                    </h3>
                    <div className="text-xs uppercase tracking-[0.16em] text-[#A8842F] font-medium mb-4">
                      {p.meaning}
                    </div>

                    <p className="text-xs sm:text-sm text-[#6A6052] font-light leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Panchtatva Section */}
        <section id="panchtatva" className="bg-[#F5F0E5] py-20 sm:py-28 border-b border-[rgba(42,35,23,0.12)]">
          <div className="w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            <div className="max-w-3xl mb-14">
              <div className="flex items-center gap-2 mb-2">
                <GoldSunMark size={14} />
                <span className="eyebrow-label text-[#A8842F]">Panchtatva</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#2A2317]">
                The Five Elements in Every Box
              </h2>
              <p className="mt-3 text-sm text-[#6A6052] font-light leading-relaxed">
                Ancient Vedic wisdom teaches that human well-being requires harmonious alignment with the five universal elements. Every tool we assemble honours these cosmic forces.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {panchtatva.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FCFAF5] border border-[rgba(42,35,23,0.12)] p-6 shadow-xs flex flex-col justify-between"
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <div>
                    <h4 className="font-serif text-lg text-[#2A2317] mb-2">{item.element}</h4>
                    <p className="text-xs text-[#6A6052] font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sourcing & Provenance Commitments */}
        <section id="provenance" className="py-20 sm:py-28">
          <div className="w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="eyebrow-label text-[#A8842F] block mb-2">The OMG Vow</span>
                <h2 className="font-serif text-3xl sm:text-5xl text-[#2A2317] leading-tight mb-6">
                  No manufactured fears. Only authentic provenance.
                </h2>
                <div className="space-y-4 text-xs sm:text-sm text-[#52493D] font-light leading-relaxed">
                  <p>
                    Most spiritual markets thrive on manufactured anxiety: warnings that your planetary positions are cursed, or that terrible things will happen if you do not wear a certain gemstone.
                  </p>
                  <p>
                    At OMG Tribe, we refuse this fear-mongering. We do not sell remedies out of superstition. We craft sacred instruments designed to give you clarity, calm the nervous system, and restore intentional space at home.
                  </p>
                  <p>
                    Every seed is wild-gathered, every copper utensil is cast with traditional heavy gauges, and every crystal remains in its natural vibrational state — never dyed, heated, or adulterated with plastic.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/shop"
                    className="px-7 py-3.5 bg-[#A8842F] text-[#FCFAF5] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#8F6F24] transition-colors inline-flex items-center gap-2"
                  >
                    <span>Explore The Collection</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-7 py-3.5 border border-[#2A2317] text-[#2A2317] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#2A2317] hover:text-[#FCFAF5] transition-colors inline-flex items-center gap-2"
                  >
                    <span>Speak With Our Pandit</span>
                  </Link>
                </div>
              </div>

              <div className="relative aspect-square w-full overflow-hidden bg-[#171208] border border-[rgba(168,132,47,0.3)] shadow-2xl">
                <Image
                  src="/images/hero-omg-box.jpg"
                  alt="OMG Tribe Handcrafted Box"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
