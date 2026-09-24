'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GoldSunMark } from '@/components/ui/gold-sun-mark';
import {
  ArrowDown,
  ArrowUpRight,
  FileText,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface SacredTool {
  id: string;
  name: string;
  devanagari: string;
  material: string;
  image: string;
  alt: string;
  dailyPurpose: string;
}

const tools: SacredTool[] = [
  {
    id: 'kansa-wand',
    name: 'Ayurvedic Kansa Wand',
    devanagari: 'कांसा',
    material: 'Teak & Bell-Metal Bronze',
    image: '/images/tool-kansa-wand-luxury.jpg',
    alt: 'Handcrafted Ayurvedic Kansa Wand with teak wood handle and bell-metal bronze dome',
    dailyPurpose:
      'Draws out screen fatigue and evening tension within three minutes of circular temple massage.',
  },
  {
    id: 'manifest-diary',
    name: 'Manifestation Diary',
    devanagari: 'संकल्प',
    material: 'Vegan Leather & Cotton Paper',
    image: '/images/tool-diary-luxury.jpg',
    alt: 'OMG Manifestation Diary with gold debossed sacred mandala cover',
    dailyPurpose:
      'Guided dawn intentions and evening gratitude to anchor focus before you speak.',
  },
  {
    id: 'brass-chime',
    name: 'Acoustic Desk Chime',
    devanagari: 'नाद',
    material: 'Solid Oak & Tuned Brass',
    image: '/images/tool-chime-luxury.jpg',
    alt: 'Solid oak acoustic desk chime with suspended tuned brass bell and mallet',
    dailyPurpose:
      'An 18-second sustained pure tone that marks an immediate boundary between busyness and silence.',
  },
  {
    id: 'mandala-candles',
    name: 'Mandala Soy Candle',
    devanagari: 'ज्योति',
    material: 'Wild Sage & 100% Soy Wax',
    image: '/images/tool-candle-luxury.jpg',
    alt: 'Aromatherapy mandala candle with clean-burning flame in ornate metal tin',
    dailyPurpose:
      'Clean-burning botanicals with Himalayan vetiver and wild sage to purify your sacred corner.',
  },
];

const trustItems = [
  {
    title: 'Blessed in Rock Salt',
    text: 'Purified in Himalayan pink salt and Vedic sound in Rishikesh.',
    icon: ShieldCheck,
  },
  {
    title: 'Origin & Ritual Card',
    text: 'Clear Sanskrit context and a 3-minute morning guide with every tool.',
    icon: FileText,
  },
  {
    title: 'Zero Synthetic Fillers',
    text: 'Solid tuned brass, bell bronze, oak wood, and pure botanical soy wax.',
    icon: Sparkles,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
};

export function SacredToolsSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="relative z-20 w-full overflow-hidden border-b border-[#2A2317]/10 bg-[#F5F0E5] py-20 text-[#2A2317] sm:py-26">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-180px] top-[15%] h-[500px] w-[500px] rounded-full bg-[#A8842F]/[0.055] blur-[100px]" />
        <div className="absolute bottom-[-200px] right-[-100px] h-[550px] w-[550px] rounded-full bg-[#D3B36B]/[0.07] blur-[110px]" />
        <div className="absolute -right-[220px] top-[10%] h-[620px] w-[620px] rounded-full border border-[#A8842F]/[0.08]" />
        <div className="absolute -right-[120px] top-[18%] h-[430px] w-[430px] rounded-full border border-[#A8842F]/[0.07]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-9 bg-[#A8842F]" />
            <GoldSunMark size={14} />
            <span className="text-[10px] font-medium uppercase tracking-[0.34em] text-[#A8842F]">
              Inside Every OMG Box
            </span>
            <GoldSunMark size={14} />
            <span className="h-px w-9 bg-[#A8842F]" />
          </div>

          <h2 className="font-serif text-4xl font-light leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-[60px]">
            Instruments of
            <span className="relative ml-3 inline-block italic text-[#A8842F]">
              Daily Practice
              <span className="absolute -bottom-2 left-0 h-px w-full bg-[#A8842F]/30" />
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl font-sans text-xs font-light leading-7 text-[#6A6052] sm:text-sm">
            Real bronze, tuned brass, organic soy wax, and virgin cotton paper.
            Tangible objects for morning stillness.
          </p>

          <div className="mx-auto mt-7 flex items-center justify-center gap-2">
            <span className="h-px w-12 bg-[#A8842F]/20" />
            <span className="h-1.5 w-1.5 rotate-45 border border-[#A8842F]/50" />
            <span className="h-px w-12 bg-[#A8842F]/20" />
          </div>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8"
        >
          {tools.map((tool, index) => {
            const active = hoveredCard === tool.id;
            const dimmed =
              hoveredCard !== null && hoveredCard !== tool.id;

            return (
              <motion.article
                key={tool.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredCard(tool.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -12 }}
                className={`group relative transition-all duration-500 ${
                  dimmed
                    ? 'scale-[0.975] opacity-45'
                    : 'scale-100 opacity-100'
                }`}
              >
                {/* Spotlight */}
                <div
                  className={`pointer-events-none absolute -inset-8 rounded-[40px] blur-[22px] transition-opacity duration-700 ${
                    active ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    background:
                      'radial-gradient(circle, rgba(211,179,107,.52) 0%, rgba(168,132,47,.22) 25%, rgba(168,132,47,.08) 48%, transparent 72%)',
                  }}
                />

                <div
                  className={`relative overflow-hidden rounded-[3px] border bg-[#FCFAF5] transition-all duration-500 ${
                    active
                      ? 'border-[#A8842F]/80 shadow-[0_28px_70px_rgba(42,35,23,.25)]'
                      : 'border-[#2A2317]/10 shadow-[0_12px_40px_rgba(42,35,23,.08)]'
                  }`}
                >
                  {/* Image */}
                  <div className="relative aspect-[0.86] overflow-hidden bg-[#DED5C5]">
                    <Image
                      src={tool.image}
                      alt={tool.alt}
                      fill
                      sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw"
                      className={`object-cover transition-transform duration-1000 ${
                        active ? 'scale-[1.1]' : 'scale-[1.01]'
                      }`}
                    />

                    <div
                      className={`absolute inset-0 transition-all duration-700 ${
                        active
                          ? 'bg-gradient-to-t from-[#171208]/80 via-[#171208]/10 to-[#A8842F]/10'
                          : 'bg-gradient-to-t from-[#171208]/70 via-transparent to-transparent'
                      }`}
                    />

                    <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#D3B36B] to-transparent" />

                    {/* Number */}
                    <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#FCFAF5]/50 bg-[#171208]/25 backdrop-blur-md">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-[#FCFAF5]">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Sanskrit */}
                    <div className="absolute right-5 top-5 flex h-12 min-w-12 items-center justify-center border border-[#A8842F]/35 bg-[#FCFAF5]/95 px-3 shadow-lg backdrop-blur-sm">
                      <span className="font-devanagari text-sm text-[#A8842F]">
                        {tool.devanagari}
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                      <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#FCFAF5]/90">
                        Sacred Object
                      </span>

                      <div className="flex items-center gap-2">
                        <span
                          className={`h-px bg-[#D3B36B] transition-all duration-500 ${
                            active ? 'w-12' : 'w-7'
                          }`}
                        />
                        <GoldSunMark size={11} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mx-3 -mt-7 rounded-[3px] border border-[#2A2317]/10 bg-[#FCFAF5] p-5 shadow-[0_-8px_30px_rgba(42,35,23,.09)] sm:p-6">
                    <div
                      className={`absolute left-0 top-0 h-9 bg-[#A8842F] ${
                        active ? 'w-[3px]' : 'w-[2px]'
                      }`}
                    />

                    <div className="mb-3 flex items-center gap-2">
                      <span
                        className={`h-[2px] bg-[#A8842F] transition-all ${
                          active ? 'w-8' : 'w-5'
                        }`}
                      />
                      <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#A8842F]">
                        {tool.material}
                      </p>
                    </div>

                    <h3
                      className={`font-serif text-[22px] leading-[1.12] tracking-[-0.015em] transition-colors sm:text-[24px] ${
                        active ? 'text-[#A8842F]' : 'text-[#2A2317]'
                      }`}
                    >
                      {tool.name}
                    </h3>

                    <div className="my-4 flex items-center gap-2">
                      <div
                        className={`h-px flex-1 ${
                          active ? 'bg-[#A8842F]/35' : 'bg-[#2A2317]/10'
                        }`}
                      />
                      <span className="h-1 w-1 rounded-full bg-[#A8842F]" />
                      <div className="h-px w-6 bg-[#A8842F]/30" />
                    </div>

                    <p className="font-sans text-xs font-light leading-[1.75] text-[#6A6052]">
                      {tool.dailyPurpose}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-[#2A2317]/[0.08] pt-4">
                      <span className="text-[8px] font-medium uppercase tracking-[0.25em] text-[#6A6052]/60">
                        OMG Tribe
                      </span>

                      <div className="flex items-center gap-2 text-[#A8842F]">
                        <span
                          className={`text-[8px] uppercase tracking-[0.2em] transition-all ${
                            active
                              ? 'translate-x-0 opacity-100'
                              : 'translate-x-2 opacity-0'
                          }`}
                        >
                          Explore
                        </span>

                        <div
                          className={`flex h-7 w-7 items-center justify-center rounded-full border transition-all ${
                            active
                              ? 'border-[#A8842F] bg-[#A8842F] text-[#FCFAF5]'
                              : 'border-[#A8842F]/30'
                          }`}
                        >
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 bg-[#A8842F] transition-all duration-700 ${
                      active ? 'w-2/3' : 'w-0'
                    }`}
                  />
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-20 max-w-5xl"
        >
          <div className="overflow-hidden rounded-[3px] border border-[#A8842F]/30 bg-[#FCFAF5] shadow-[0_15px_45px_rgba(42,35,23,.07)]">
            <div className="grid grid-cols-1 divide-y divide-[#2A2317]/10 md:grid-cols-3 md:divide-x md:divide-y-0">
              {trustItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex items-center gap-4 p-6 transition-colors hover:bg-[#F9F6EE] sm:p-7"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#A8842F]/30 bg-[#F5F0E5] text-[#A8842F] transition-shadow group-hover:shadow-[0_0_20px_rgba(168,132,47,.18)]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="font-serif text-base text-[#2A2317] sm:text-lg">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-xs font-light leading-relaxed text-[#6A6052] sm:text-[13px]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-11 text-center">
            <p className="mb-4 text-[9px] uppercase tracking-[0.32em] text-[#6A6052]/60">
              Your daily ritual begins here
            </p>

            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#boxes"
              className="group inline-flex items-center gap-3 rounded-[3px] bg-[#A8842F] px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-[#FCFAF5] shadow-[0_12px_30px_rgba(168,132,47,.22)] transition-all hover:bg-[#D3B36B] sm:px-10"
            >
              <GoldSunMark size={14} />

              <span>See the curated boxes containing these tools</span>

              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}