'use client';

import React, { useState } from 'react';
import { GoldSunMark } from '@/components/ui/gold-sun-mark';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TestimonialItem {
  id: string;
  name: string;
  city: string;
  quote: string;
  duration: string;
  videoUrl?: string;
}

export function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<TestimonialItem | null>(null);

  const testimonials: TestimonialItem[] = [
    {
      id: 'ananya',
      name: 'Ananya R.',
      city: 'Pune',
      quote: 'My grandmother tied a black thread on me for thirty years and I never once asked her why. I know now.',
      duration: '1:42',
    },
    {
      id: 'rohit',
      name: 'Rohit K.',
      city: 'Bengaluru',
      quote: 'The card explaining 108 is the reason I finished my first mala.',
      duration: '2:15',
    },
    {
      id: 'meera',
      name: 'Meera S.',
      city: 'Mumbai',
      quote: 'I asked which box to buy and was told to buy none for a month. Who does that?',
      duration: '1:58',
    }
  ];

  return (
    <section className="bg-[#FCFAF5] py-24 sm:py-32 border-b border-[rgba(42,35,23,0.13)] w-full">
      <div className="w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <GoldSunMark size={16} />
            <span className="eyebrow-label text-[#A8842F]">From our tribe</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2A2317] tracking-tight mb-4">
            In their words.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#6A6052] font-light leading-relaxed">
            Real people, real practices. Nothing scripted.
          </p>
        </motion.div>

        {/* Three Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-[#FCFAF5] border border-[rgba(42,35,23,0.13)] hover:border-[#A8842F]/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between rounded-xs overflow-hidden"
            >
              {/* Thumbnail Tile: Click to load, never autoplay */}
              <div
                onClick={() => setActiveVideo(t)}
                className="relative aspect-16/10 bg-[#171208] cursor-pointer group overflow-hidden flex items-center justify-center border-b border-[rgba(42,35,23,0.08)]"
              >
                {/* Subtle dark ambient texture */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171208] via-[#221A0E]/60 to-transparent" />

                {/* Person initials / subtle watermark */}
                <span className="font-serif text-6xl text-[#FCFAF5]/5 group-hover:text-[#D3B36B]/15 transition-colors select-none">
                  {t.name[0]}
                </span>

                {/* Play Button: Gold ring with the sun mark inside */}
                <div className="relative z-10 w-14 h-14 rounded-full border-2 border-[#D3B36B] group-hover:border-[#FCFAF5] bg-[#171208]/70 backdrop-blur-xs flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg">
                  <div className="w-7 h-7 flex items-center justify-center">
                    <GoldSunMark size={24} />
                  </div>
                </div>

                {/* Duration Badge: bottom-right */}
                <div className="absolute bottom-3 right-3 bg-[#171208]/90 text-[#E9DBBC] text-[10px] font-mono px-2 py-0.5 rounded-xs border border-[rgba(233,219,188,0.2)]">
                  {t.duration}
                </div>

                {/* Click to load indicator */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#E9DBBC]/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A8842F]" />
                  <span>Click to watch</span>
                </div>
              </div>

              {/* Quote & Author Details */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <blockquote className="font-serif italic text-lg sm:text-xl text-[#2A2317] leading-snug mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="pt-4 border-t border-[rgba(42,35,23,0.08)] flex items-center justify-between">
                  <div>
                    <span className="font-sans font-medium text-sm sm:text-base text-[#2A2317] block">
                      {t.name}
                    </span>
                    <span className="text-xs text-[#9B9081] font-light">
                      {t.city}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#A8842F] font-medium">
                    Verified Seeker
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal Player on Click */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#171208]/85 backdrop-blur-sm"
              onClick={() => setActiveVideo(null)}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative z-10 w-full max-w-2xl bg-[#221A0E] border border-[#A8842F]/50 shadow-2xl p-6 sm:p-8 text-[#FCFAF5] rounded-xs"
            >
              <div className="flex items-center justify-between border-b border-[rgba(233,219,188,0.15)] pb-3.5 mb-5">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#FCFAF5]">
                    {activeVideo.name} · {activeVideo.city}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E9DBBC]/70 font-serif italic">
                    &ldquo;{activeVideo.quote}&rdquo;
                  </p>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="text-[#9B9081] hover:text-[#FCFAF5] p-1.5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video container */}
              <div className="aspect-16/9 bg-[#171208] flex flex-col items-center justify-center border border-[rgba(233,219,188,0.1)] p-8 text-center rounded-xs">
                <div className="w-16 h-16 rounded-full border border-[#D3B36B] flex items-center justify-center mb-4">
                  <GoldSunMark size={32} />
                </div>
                <p className="font-serif text-xl text-[#E9DBBC] mb-2">
                  &ldquo;{activeVideo.quote}&rdquo;
                </p>
                <p className="text-xs text-[#9B9081] max-w-sm">
                  Video testimonial loaded on demand. (In production, plays full unscripted footage from {activeVideo.city} seeker).
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
