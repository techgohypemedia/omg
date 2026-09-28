'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageSquare, Clock, CheckCircle2 } from 'lucide-react';
import { GoldSunMark } from '@/components/ui/gold-sun-mark';
import { motion } from 'framer-motion';

export function ProgramsSection(
  { hideHeader = false }: { hideHeader?: boolean } = {}
) {
  const programs = [
    {
      slotNumber: '01',
      badge: 'Enrolling Now · Cohort 04',
      isComingSoon: false,
      name: '21-Day Mārga Habit',
      tagline: 'To sit down every morning, and actually stay.',
      image: '/images/hero-sanctuary-golden.jpg',
      duration: '21 Days · 5 mins daily',
      delivery: 'Daily WhatsApp Audio',
      price: 'Free with any box',
      priceDetail: 'or ₹999 standalone',
      highlights: [
        '5-min sunrise voice guidance on WhatsApp',
        'How to sit comfortably & count 108 beads effortlessly',
        'Direct 1-on-1 mentor guidance & morning check-ins',
      ],
      whatsappText: 'Pranam! I would like to register for the 21-Day Mārga Habit',
    },
    {
      slotNumber: '02',
      badge: 'Upcoming Cohort · Pre-Book',
      isComingSoon: true,
      name: 'Panchtatva Space Clearing',
      tagline: 'To clear heavy energy from your home, room by room.',
      image: '/images/box-protection-real.jpg',
      duration: '7 Days · Practical Home Ritual',
      delivery: 'Step-by-Step Vastu Protocol',
      price: '₹1,499',
      priceDetail: 'Free with Energy Protection Box',
      highlights: [
        'Room-by-room salt, camphor & bell sound cleansing sequence',
        'Vastu placement rules for altar, bells & crystals',
        'Direct guidance thread for room & apartment layouts',
      ],
      whatsappText: 'Pranam! I would like to join the waitlist for Panchtatva Space Clearing',
    },
  ];

  return (
    <section
      id="programs"
      className="relative w-full overflow-hidden border-b border-[rgba(42,35,23,0.13)] bg-[#F5F0E5] py-16 sm:py-24"
    >
      <div className="relative mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-16 xl:px-20 2xl:max-w-[1840px]">
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="mb-10 sm:mb-12 max-w-5xl"
          >
            <div className="mb-3 flex items-center gap-2">
              <GoldSunMark size={15} />
              <span className="eyebrow-label text-[#A8842F]">
                Our Programs
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#2A2317]">
                A box gives you the tools.{' '}
                <span className="text-[#A8842F] block sm:inline">A program builds the habit.</span>
              </h2>

              <p className="max-w-md text-xs sm:text-sm font-light leading-relaxed text-[#6A6052]">
                Short, guided, and run on WhatsApp. No app to download. Nothing to log into.
              </p>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {programs.map((program, idx) => (
            <motion.div
              key={program.slotNumber}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col justify-between overflow-hidden border border-[rgba(42,35,23,0.12)] bg-[#FCFAF5] shadow-xs transition-all duration-300 hover:border-[#A8842F]/50 hover:shadow-lg"
            >
              {/* Card Banner Image */}
              <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-[#171208]">
                <Image
                  src={program.image}
                  alt={program.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171208] via-[#171208]/50 to-black/25" />

                {/* Top Badges */}
                <div className="absolute left-4 right-4 top-4 z-10 flex items-center justify-between gap-2">
                  <span className="border border-white/15 bg-[#171208]/75 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-[#D3B36B] backdrop-blur-xs">
                    Program {program.slotNumber}
                  </span>

                  <span
                    className={`border px-2.5 py-1 text-[9px] uppercase tracking-[0.14em] backdrop-blur-xs ${
                      program.isComingSoon
                        ? 'border-[#A8842F]/50 bg-[#171208]/75 text-[#D3B36B]'
                        : 'border-emerald-400/40 bg-[#171208]/75 text-[#FCFAF5]'
                    }`}
                  >
                    {!program.isComingSoon && (
                      <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    )}
                    {program.badge}
                  </span>
                </div>

                {/* Title & Tagline inside banner */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="font-serif text-2xl sm:text-3xl tracking-tight text-[#FCFAF5]">
                    {program.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-serif italic text-[#E9DBBC]/90 line-clamp-1">
                    {program.tagline}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  {/* Format & Duration Meta */}
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 border border-[rgba(42,35,23,0.08)] bg-[#F5F0E5] px-2.5 py-1 text-[11px] font-medium text-[#2A2317]">
                      <Clock className="h-3 w-3 text-[#A8842F]" />
                      {program.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 border border-[rgba(42,35,23,0.08)] bg-[#F5F0E5] px-2.5 py-1 text-[11px] font-medium text-[#2A2317]">
                      <MessageSquare className="h-3 w-3 text-[#A8842F]" />
                      {program.delivery}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {program.highlights.map((point, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#52493D] leading-relaxed">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#A8842F] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Pricing & CTA */}
                <div className="border-t border-[rgba(42,35,23,0.1)] pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="block font-mono text-[9px] uppercase tracking-[0.16em] text-[#9B9081]">
                      Enrollment
                    </span>
                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      <span className="font-serif text-lg sm:text-xl font-medium text-[#2A2317]">
                        {program.price}
                      </span>
                      <span className="text-[11px] text-[#6A6052]">
                        {program.priceDetail}
                      </span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/919999999999?text=${encodeURIComponent(
                      program.whatsappText
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] transition-all duration-300 ${
                      program.isComingSoon
                        ? 'border border-[#A8842F] bg-transparent text-[#2A2317] hover:bg-[#A8842F] hover:text-[#FCFAF5]'
                        : 'bg-[#A8842F] text-[#FCFAF5] hover:bg-[#8F6F24]'
                    }`}
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>
                      {program.isComingSoon ? 'Join Waitlist' : 'Enroll on WhatsApp'}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal link to programs */}
        {!hideHeader && (
          <div className="mt-8 text-center">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#A8842F] hover:text-[#2A2317] font-medium transition-colors"
            >
              <span>Explore full program details</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}