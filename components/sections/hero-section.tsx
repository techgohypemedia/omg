'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { GoldSunMark } from '@/components/ui/gold-sun-mark';
import { motion } from 'framer-motion';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  return (
    <section className="relative w-full min-h-[92vh] flex items-center bg-[#171208] text-[#FCFAF5] overflow-hidden">
      {/* Full-Bleed End-to-End Sanctuary Background Image */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero-sanctuary-golden.jpg"
          alt="OMG Tribe Sacred Himalayan Sanctuary with Altar and Unboxed Ritual Box"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Gentle ambient warmth - completely removed any dark black shade */}
        <div className="absolute inset-0 bg-[#171208]/20 pointer-events-none" />

        {/* Soft top and bottom edge transitions */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#171208]/70 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#171208] to-transparent pointer-events-none" />
      </motion.div>

      {/* Main Hero Container — End-to-End on Laptop & Desktop */}
      <div className="relative z-10 w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-24 sm:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[480px]">
          
          {/* Left Column: Clean, Poetic, Breathing Typography (lg:col-span-7 xl:col-span-6) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 xl:col-span-6 text-left max-w-2xl"
          >
            {/* Label */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
              <GoldSunMark size={14} />
              <span className="eyebrow-label text-[#D3B36B] tracking-[0.28em] text-[11px] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                What OMG stands for
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-[#FCFAF5] mb-3 leading-[1.04] drop-shadow-[0_3px_16px_rgba(0,0,0,0.7)]"
            >
              Om <span className="text-[#A8842F]">·</span> Mārga <span className="text-[#A8842F]">·</span> Gyān
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#E9DBBC] font-normal mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
            >
              The sound. The path. The knowing.
            </motion.p>

            {/* Reduced, Punchy Copy */}
            <motion.div
              variants={itemVariants}
              className="space-y-2.5 mb-10 text-base sm:text-lg lg:text-xl font-sans font-light leading-relaxed text-[#FCFAF5] max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
            >
              <p className="font-medium text-[#FCFAF5]">
                We are not selling luck.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-[#E9DBBC]/90 font-light">
                No stone will fix your life. But five minutes every day gives you an anchor you understand.
              </p>
            </motion.div>

            {/* Dual Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#boxes"
                className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-[#A8842F] hover:bg-[#D3B36B] text-[#FCFAF5] text-xs uppercase tracking-[0.22em] font-medium transition-all shadow-xl rounded-xs text-center group"
              >
                <span>Explore our boxes</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#programs"
                className="inline-flex items-center justify-center gap-2 px-9 py-4 border border-[rgba(233,219,188,0.36)] hover:border-[#D3B36B] text-[#E9DBBC] hover:text-[#FCFAF5] hover:bg-[#221A0E]/60 backdrop-blur-xs text-xs uppercase tracking-[0.22em] transition-all rounded-xs text-center"
              >
                <span>See our programs</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: Unobstructed view of candlelit sanctuary, altar, and ritual box spanning edge-to-edge */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />
        </div>
      </div>
    </section>
  );
}
