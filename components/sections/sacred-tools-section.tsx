'use client';

import React from 'react';
import Image from 'next/image';
import { GoldSunMark } from '@/components/ui/gold-sun-mark';
import { ArrowDown, Sparkles, ShieldCheck, FileText } from 'lucide-react';
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

export function SacredToolsSection() {
  const tools: SacredTool[] = [
    {
      id: 'kansa-wand',
      name: 'Ayurvedic Kansa Wand',
      devanagari: 'कांसा',
      material: 'Teak & Bell-Metal Bronze',
      image: '/images/tool-kansa-wand-luxury.jpg',
      alt: 'Handcrafted Ayurvedic Kansa Wand with teak wood handle and bell-metal bronze dome',
      dailyPurpose: 'Draws out screen fatigue and evening tension within three minutes of circular temple massage.'
    },
    {
      id: 'manifest-diary',
      name: 'Manifestation Diary',
      devanagari: 'संकल्प',
      material: 'Vegan Leather & Cotton Paper',
      image: '/images/tool-diary-luxury.jpg',
      alt: 'OMG Manifestation Diary with gold debossed sacred mandala cover',
      dailyPurpose: 'Guided dawn intentions and evening gratitude to anchor focus before you speak.'
    },
    {
      id: 'brass-chime',
      name: 'Acoustic Desk Chime',
      devanagari: 'नाद',
      material: 'Solid Oak & Tuned Brass',
      image: '/images/tool-chime-luxury.jpg',
      alt: 'Solid oak acoustic desk chime with suspended tuned brass bell and mallet',
      dailyPurpose: 'An 18-second sustained pure tone that marks an immediate boundary between busyness and silence.'
    },
    {
      id: 'mandala-candles',
      name: 'Mandala Soy Candle',
      devanagari: 'ज्योति',
      material: 'Wild Sage & 100% Soy Wax',
      image: '/images/tool-candle-luxury.jpg',
      alt: 'Aromatherapy mandala candle with clean-burning flame in ornate metal tin',
      dailyPurpose: 'Clean-burning botanicals with Himalayan vetiver and wild sage to purify your sacred corner.'
    }
  ];

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section className="bg-[#F5F0E5] text-[#2A2317] py-20 sm:py-26 border-b border-[rgba(42,35,23,0.12)] relative z-20 overflow-hidden w-full">
      {/* Gentle ambient lighting accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#A8842F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D3B36B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        {/* Section Eyebrow & Header — Luminous Warm Palette */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-2.5">
            <GoldSunMark size={14} />
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#A8842F] font-medium">
              Inside Every OMG Box
            </span>
            <GoldSunMark size={14} />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#2A2317] tracking-tight mb-3">
            Instruments of Daily Practice
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#6A6052] font-light leading-relaxed">
            Real bronze, tuned brass, organic soy wax, and virgin cotton paper. Tangible objects for morning stillness.
          </p>
        </motion.div>

        {/* 4-Item Sacred Tools Grid — Clean Paper Cards */}
        <motion.div
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-6"
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative bg-[#FCFAF5] border border-[rgba(42,35,23,0.12)] hover:border-[#A8842F] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl rounded-xs"
            >
              {/* Studio Product Image Tile */}
              <div className="relative aspect-square w-full bg-[#EFE9DC] overflow-hidden border-b border-[rgba(42,35,23,0.08)]">
                <Image
                  src={tool.image}
                  alt={tool.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Sanskrit Glyphs Corner Badge */}
                <div className="absolute top-3 right-3 bg-[#FCFAF5]/95 backdrop-blur-xs border border-[rgba(168,132,47,0.3)] px-2.5 py-1 text-xs font-devanagari text-[#A8842F] rounded-xs shadow-xs">
                  {tool.devanagari}
                </div>
              </div>

              {/* Compact Card Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#A8842F] font-medium mb-1">
                    {tool.material}
                  </p>

                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#2A2317] leading-snug group-hover:text-[#A8842F] transition-colors mb-1.5">
                    {tool.name}
                  </h3>

                  <p className="font-sans text-xs text-[#6A6052] leading-relaxed font-light">
                    {tool.dailyPurpose}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Rishikesh Authenticity & Care Strip — Refined Heritage Assurance Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-14 max-w-5xl mx-auto"
        >
          {/* Framed Trust Card */}
          <div className="bg-[#FCFAF5] border border-[rgba(168,132,47,0.28)] rounded-xs shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[rgba(42,35,23,0.1)]">
              {/* Item 1 */}
              <div className="p-6 sm:p-7 flex items-center gap-4 group hover:bg-[#F9F6EE] transition-colors">
                <div className="w-11 h-11 rounded-full bg-[#F5F0E5] border border-[rgba(168,132,47,0.35)] flex items-center justify-center shrink-0 text-[#A8842F] group-hover:border-[#A8842F] transition-colors shadow-xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base sm:text-lg text-[#2A2317] font-normal leading-snug">
                    Blessed in Rock Salt
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#6A6052] font-light leading-relaxed mt-0.5">
                    Purified in Himalayan pink salt and Vedic sound in Rishikesh.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="p-6 sm:p-7 flex items-center gap-4 group hover:bg-[#F9F6EE] transition-colors">
                <div className="w-11 h-11 rounded-full bg-[#F5F0E5] border border-[rgba(168,132,47,0.35)] flex items-center justify-center shrink-0 text-[#A8842F] group-hover:border-[#A8842F] transition-colors shadow-xs">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base sm:text-lg text-[#2A2317] font-normal leading-snug">
                    Origin & Ritual Card
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#6A6052] font-light leading-relaxed mt-0.5">
                    Clear Sanskrit context and a 3-minute morning guide with every tool.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="p-6 sm:p-7 flex items-center gap-4 group hover:bg-[#F9F6EE] transition-colors">
                <div className="w-11 h-11 rounded-full bg-[#F5F0E5] border border-[rgba(168,132,47,0.35)] flex items-center justify-center shrink-0 text-[#A8842F] group-hover:border-[#A8842F] transition-colors shadow-xs">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base sm:text-lg text-[#2A2317] font-normal leading-snug">
                    Zero Synthetic Fillers
                  </h4>
                  <p className="text-xs sm:text-[13px] text-[#6A6052] font-light leading-relaxed mt-0.5">
                    Solid tuned brass, bell bronze, oak wood, and pure botanical soy wax.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Luxury CTA Button */}
          <div className="mt-10 text-center">
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#boxes"
              className="inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-4.5 bg-[#A8842F] hover:bg-[#D3B36B] text-[#FCFAF5] text-xs uppercase tracking-[0.22em] font-medium transition-all shadow-xl rounded-xs group"
            >
              <GoldSunMark size={14} />
              <span>See the curated boxes containing these tools</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
