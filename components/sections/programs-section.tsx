'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  MessageSquare,
  Clock,
  Play,
  CheckCircle2,
  Compass,
  Calendar,
  ShieldCheck,
} from 'lucide-react';
import { GoldSunMark } from '@/components/ui/gold-sun-mark';
import { motion } from 'framer-motion';

export function ProgramsSection(
  { hideHeader = false }: { hideHeader?: boolean } = {}
) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const programs = [
    {
      slotNumber: '01',
      badge: 'Enrolling Now · Cohort 04',
      isComingSoon: false,
      name: '21-Day Mārga Habit',
      tagline: 'To sit down every morning, and actually stay.',
      image: '/images/hero-sanctuary-golden.jpg',
      delivery: 'Daily WhatsApp Voice Guidance',
      length: '21 Days · 5 mins daily',
      time: 'Delivered 6:30 AM IST',
      suitability: 'For beginners struggling with consistency or posture',
      price: 'Free with any box',
      priceDetail: 'or ₹999 standalone',
      audioTitle: 'Day 04: The Stillness Before the Bead',
      audioDuration: '4:15 min',
      covers: [
        'Daily morning 5-minute audio prompt right on WhatsApp',
        'How to sit without back pain and count 108 beads effortlessly',
        'Direct 1-on-1 check-in with your spiritual mentor',
        'Morning ritual checklist that fits busy working days',
      ],
      whatsappText:
        'Pranam! I would like to register for the 21-Day Mārga Habit',
    },
    {
      slotNumber: '02',
      badge: 'Upcoming Cohort · Pre-Book',
      isComingSoon: true,
      name: 'Panchtatva Space Clearing',
      tagline: 'To clear heavy energy from your home, room by room.',
      image: '/images/box-protection-real.jpg',
      delivery: 'Step-by-Step Vastu Protocol',
      length: '7 Days · Practical Home Ritual',
      time: 'Self-paced with daily check-ins',
      suitability: 'For new homes, office spaces, or heavy sluggish energy',
      price: '₹1,499',
      priceDetail: 'Free with Energy Protection Box',
      audioTitle: 'Room Protocol: Salt, Smoke & Sound Sequencing',
      audioDuration: 'Blueprint Guide',
      covers: [
        'Room-by-room salt and camphor smoke cleansing order',
        'Vastu placement rules for your altar, clock, and crystals',
        'Harmonic tuning using tuned acoustic brass bells',
        'Direct Q&A thread for awkward corners and apartment layouts',
      ],
      whatsappText:
        'Pranam! I would like to join the waitlist for Panchtatva Space Clearing',
    },
  ];

  return (
    <section
      id="programs"
      className="relative w-full overflow-hidden border-b border-[rgba(42,35,23,0.13)] bg-[#F5F0E5] py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#A8842F]/[0.035] blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#A8842F]/[0.04] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1720px] px-6 sm:px-10 lg:px-16 xl:px-20 2xl:max-w-[1840px]">
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7 }}
            className="mb-16 max-w-5xl"
          >
            <div className="mb-4 flex items-center gap-2">
              <GoldSunMark size={16} />
              <span className="eyebrow-label text-[#A8842F]">
                Our Programs
              </span>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
              <h2 className="font-serif text-4xl tracking-tight text-[#2A2317] sm:text-5xl lg:text-6xl">
                A box gives you the tools.
                <span className="block text-[#A8842F]">
                  A program builds the habit.
                </span>
              </h2>

              <p className="max-w-md text-sm font-light leading-relaxed text-[#6A6052] sm:text-base">
                Short, guided, and run on WhatsApp. No app to download.
                Nothing to log into.
              </p>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {programs.map((program, idx) => {
            const isHovered = hoveredIndex === idx;
            const otherIsHovered =
              hoveredIndex !== null && hoveredIndex !== idx;

            return (
              <motion.article
                key={program.slotNumber}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative transition-all duration-500 ${
                  otherIsHovered
                    ? 'scale-[0.985] opacity-40'
                    : 'scale-100 opacity-100'
                }`}
              >
                <div
                  className={`pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle,rgba(168,132,47,0.28),transparent_68%)] blur-2xl transition-all duration-700 ${
                    isHovered
                      ? 'scale-100 opacity-100'
                      : 'scale-75 opacity-0'
                  }`}
                />

                <div
                  className={`relative overflow-hidden border bg-[#171208] transition-all duration-500 ${
                    isHovered
                      ? 'border-[#A8842F] shadow-[0_30px_80px_rgba(42,35,23,0.28)]'
                      : 'border-[rgba(42,35,23,0.14)] shadow-[0_15px_40px_rgba(42,35,23,0.08)]'
                  }`}
                >
                  <div className="relative h-[330px] overflow-hidden sm:h-[390px]">
                    <Image
                      src={program.image}
                      alt={program.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className={`object-cover object-center transition-transform duration-[1400ms] ease-out ${
                        isHovered ? 'scale-110' : 'scale-100'
                      }`}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#171208] via-[#171208]/40 to-black/10" />

                    <div
                      className={`absolute inset-0 bg-[#A8842F]/10 transition-opacity duration-700 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                    />

                    <div
                      className={`pointer-events-none absolute -right-3 top-4 font-serif text-[11rem] leading-none text-white/[0.055] transition-all duration-700 ${
                        isHovered
                          ? 'translate-x-0 scale-105'
                          : 'translate-x-6'
                      }`}
                    >
                      {program.slotNumber}
                    </div>

                    <div className="absolute left-5 right-5 top-5 z-10 flex items-start justify-between gap-3">
                      <div className="border border-white/15 bg-[#171208]/65 px-3 py-2 backdrop-blur-md">
                        <div className="font-mono text-[10px] tracking-[0.2em] text-[#D3B36B]">
                          PROGRAM {program.slotNumber}
                        </div>
                        <div className="mt-1 text-[8px] uppercase tracking-[0.18em] text-[#E9DBBC]/60">
                          WhatsApp Cohort
                        </div>
                      </div>

                      <div
                        className={`border px-3 py-2 text-[9px] uppercase tracking-[0.12em] backdrop-blur-md ${
                          program.isComingSoon
                            ? 'border-[#A8842F]/50 bg-[#171208]/65 text-[#D3B36B]'
                            : 'border-emerald-400/40 bg-[#171208]/65 text-[#FCFAF5]'
                        }`}
                      >
                        {!program.isComingSoon && (
                          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        )}
                        {program.badge}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-8">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#D3B36B]" />
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#D3B36B]">
                          Ritual Path
                        </span>
                      </div>

                      <h3 className="max-w-xl font-serif text-3xl tracking-tight text-[#FCFAF5] sm:text-4xl lg:text-[2.8rem]">
                        {program.name}
                      </h3>

                      <p className="mt-2 max-w-lg font-serif text-sm italic text-[#E9DBBC]">
                        {program.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="relative bg-[#FCFAF5]">
                    <div className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#E8DFCF]">
                      <div
                        className={`w-full bg-[#A8842F] transition-all duration-700 ${
                          isHovered ? 'h-full' : 'h-1/4'
                        }`}
                      />
                    </div>

                    <div className="p-6 pl-8 sm:p-8 sm:pl-10 lg:p-10 lg:pl-12">
                      <div className="relative mb-10">
                        <div className="mb-5 flex items-center justify-between">
                          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#A8842F]">
                            01 / Your Practice
                          </span>
                          <span className="font-mono text-[9px] text-[#9B9081]">
                            {program.audioDuration}
                          </span>
                        </div>

                        <div
                          className={`relative overflow-hidden border border-[rgba(42,35,23,0.12)] bg-[#F5F0E5] p-5 transition-all duration-500 ${
                            isHovered
                              ? 'border-[#A8842F]/50 shadow-[0_12px_35px_rgba(168,132,47,0.10)]'
                              : ''
                          }`}
                        >
                          <div className="mb-5 flex h-6 items-center gap-[3px] overflow-hidden opacity-50">
                            {[2, 5, 9, 4, 12, 7, 16, 6, 11, 4, 14, 8, 5, 13, 7, 3, 10, 6, 12, 5, 8, 4].map(
                              (height, i) => (
                                <span
                                  key={i}
                                  className={`w-[2px] bg-[#A8842F] transition-all duration-500 ${
                                    isHovered ? 'scale-y-125' : ''
                                  }`}
                                  style={{ height: `${height}px` }}
                                />
                              )
                            )}
                          </div>

                          <div className="flex items-center gap-4">
                            <div
                              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#A8842F] text-[#FCFAF5] transition-all duration-500 ${
                                isHovered
                                  ? 'scale-110 shadow-[0_8px_25px_rgba(168,132,47,0.35)]'
                                  : ''
                              }`}
                            >
                              {program.isComingSoon ? (
                                <Compass className="h-5 w-5" />
                              ) : (
                                <Play className="ml-0.5 h-4 w-4 fill-current" />
                              )}
                            </div>

                            <div className="min-w-0">
                              <div className="mb-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#A8842F]">
                                {program.delivery}
                              </div>
                              <p className="font-serif text-base italic text-[#2A2317]">
                                &ldquo;{program.audioTitle}&rdquo;
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-10">
                        <div className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#A8842F]">
                          02 / Program Rhythm
                        </div>

                        <div className="grid grid-cols-2 border-y border-[rgba(42,35,23,0.12)]">
                          <div className="border-r border-[rgba(42,35,23,0.12)] py-5 pr-5">
                            <Clock className="mb-3 h-4 w-4 text-[#A8842F]" />
                            <span className="mb-1 block text-[9px] uppercase tracking-[0.15em] text-[#9B9081]">
                              Duration
                            </span>
                            <span className="block font-serif text-sm text-[#2A2317]">
                              {program.length}
                            </span>
                          </div>

                          <div className="py-5 pl-5">
                            <Calendar className="mb-3 h-4 w-4 text-[#A8842F]" />
                            <span className="mb-1 block text-[9px] uppercase tracking-[0.15em] text-[#9B9081]">
                              Timing
                            </span>
                            <span className="block font-serif text-sm text-[#2A2317]">
                              {program.time}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-10">
                        <div className="mb-5 flex items-center justify-between">
                          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#A8842F]">
                            03 / What Is Included
                          </span>
                          <span className="font-mono text-[9px] text-[#9B9081]">
                            {program.covers.length} Elements
                          </span>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                          {program.covers.map((point, i) => (
                            <div
                              key={i}
                              className={`group/item relative border border-[rgba(42,35,23,0.08)] bg-[#F8F4EB] p-4 transition-all duration-300 ${
                                isHovered
                                  ? 'hover:-translate-y-1 hover:border-[#A8842F]/40 hover:bg-[#F5F0E5]'
                                  : ''
                              }`}
                            >
                              <div className="mb-3 flex items-center justify-between">
                                <span className="font-mono text-[10px] text-[#A8842F]">
                                  0{i + 1}
                                </span>
                                <CheckCircle2 className="h-3.5 w-3.5 text-[#A8842F]/70" />
                              </div>

                              <p className="text-[11px] leading-relaxed text-[#2A2317]">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="relative overflow-hidden border border-[#A8842F]/30 bg-[#F5F0E5]">
                        <div className="pointer-events-none absolute -right-2 -top-8 font-serif text-[9rem] leading-none text-[#A8842F]/[0.055]">
                          {program.slotNumber}
                        </div>

                        <div className="relative p-6 sm:p-7">
                          <div className="mb-5 flex items-center justify-between gap-4">
                            <div>
                              <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.18em] text-[#9B9081]">
                                Enrollment Fee
                              </span>

                              <div className="flex flex-wrap items-baseline gap-2">
                                <span className="font-serif text-2xl text-[#2A2317]">
                                  {program.price}
                                </span>
                                <span className="text-xs text-[#6A6052]">
                                  {program.priceDetail}
                                </span>
                              </div>
                            </div>

                            <div className="hidden text-right sm:block">
                              <span className="block font-mono text-[8px] uppercase tracking-[0.15em] text-[#9B9081]">
                                Suitable For
                              </span>
                              <span className="mt-1 block max-w-[190px] text-[10px] leading-relaxed text-[#6A6052]">
                                {program.suitability}
                              </span>
                            </div>
                          </div>

                          <a
                            href={`https://wa.me/919999999999?text=${encodeURIComponent(
                              program.whatsappText
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group/cta flex w-full items-center justify-center gap-3 px-6 py-4 text-[10px] font-medium uppercase tracking-[0.17em] transition-all duration-300 ${
                              program.isComingSoon
                                ? 'border border-[#A8842F] bg-transparent text-[#2A2317] hover:bg-[#A8842F] hover:text-[#FCFAF5]'
                                : 'bg-[#A8842F] text-[#FCFAF5] hover:bg-[#D3B36B]'
                            }`}
                          >
                            <MessageSquare className="h-4 w-4" />
                            <span>
                              {program.isComingSoon
                                ? 'Join Priority Waitlist'
                                : 'Enroll via WhatsApp'}
                            </span>
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-col justify-between gap-6 border border-[rgba(168,132,47,0.3)] bg-[#FCFAF5] p-7 sm:p-9 md:flex-row md:items-center"
        >
          <div className="flex max-w-3xl items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#A8842F]/30 bg-[#F5F0E5]">
              <ShieldCheck className="h-6 w-6 text-[#A8842F]" />
            </div>

            <div>
              <h4 className="font-serif text-xl text-[#2A2317] sm:text-2xl">
                Zero spam. No app to install. Just 5 minutes of stillness.
              </h4>
              <p className="mt-1 text-xs font-light leading-relaxed text-[#6A6052] sm:text-sm">
                Direct audio and guidance delivered right into WhatsApp at
                sunrise. One prompt, one practice, and direct mentor Q&amp;A.
              </p>
            </div>
          </div>

          <Link
            href="/programs"
            className="inline-flex shrink-0 items-center gap-3 border border-[#A8842F] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-[#2A2317] transition-all duration-300 hover:bg-[#A8842F] hover:text-[#FCFAF5]"
          >
            <span>Explore all programs</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}