'use client';

import React from 'react';
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
  ShieldCheck
} from 'lucide-react';
import { GoldSunMark } from '@/components/ui/gold-sun-mark';
import { motion } from 'framer-motion';

export function ProgramsSection({ hideHeader = false }: { hideHeader?: boolean } = {}) {
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
        'Morning ritual checklist that fits busy working days'
      ],
      whatsappText: 'Pranam! I would like to register for the 21-Day Mārga Habit'
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
        'Direct Q&A thread for awkward corners and apartment layouts'
      ],
      whatsappText: 'Pranam! I would like to join the waitlist for Panchtatva Space Clearing'
    }
  ];

  return (
    <section id="programs" className="bg-[#F5F0E5] py-24 sm:py-32 border-b border-[rgba(42,35,23,0.13)] w-full">
      <div className="w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section Header */}
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-16"
          >
            <div className="flex items-center gap-2 mb-3">
              <GoldSunMark size={16} />
              <span className="eyebrow-label text-[#A8842F]">Our Programs</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2A2317] tracking-tight mb-4">
              A box gives you the tools. A program builds the habit.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#6A6052] font-light leading-relaxed">
              Short, guided, and run on WhatsApp. No app to download. Nothing to log into.
            </p>
          </motion.div>
        )}

        {/* Upgraded Luxury Program Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group flex flex-col bg-[#FCFAF5] border border-[rgba(42,35,23,0.14)] hover:border-[#A8842F] hover:shadow-2xl transition-all duration-500 rounded-xs overflow-hidden"
            >
              {/* Card Banner Image with Atmospheric Gradient */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden border-b border-[rgba(42,35,23,0.1)] bg-[#171208]">
                <Image
                  src={program.image}
                  alt={program.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171208] via-[#171208]/50 to-black/20" />

                {/* Top Floating Badge Bar */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-2 bg-[#171208]/80 backdrop-blur-md px-3 py-1 rounded-xs border border-[rgba(233,219,188,0.2)]">
                    <span className="font-mono text-xs font-medium text-[#D3B36B]">
                      PROGRAM {program.slotNumber}
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#E9DBBC]/70">
                      WHATSAPP COHORT
                    </span>
                  </div>

                  {program.isComingSoon ? (
                    <span className="text-xs uppercase font-mono tracking-widest text-[#D3B36B] px-3 py-1 bg-[#171208]/80 backdrop-blur-md border border-[#A8842F]/40 rounded-xs">
                      {program.badge}
                    </span>
                  ) : (
                    <span className="text-xs uppercase font-mono tracking-widest text-[#FCFAF5] px-3 py-1 bg-[#171208]/80 backdrop-blur-md border border-emerald-500/40 rounded-xs flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {program.badge}
                    </span>
                  )}
                </div>

                {/* Banner Bottom Title Overlay */}
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#FCFAF5] tracking-tight mb-1 drop-shadow-sm">
                    {program.name}
                  </h3>
                  <p className="text-xs sm:text-sm italic text-[#E9DBBC] font-serif font-light">
                    {program.tagline}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Tangible WhatsApp Audio / Protocol Preview Widget */}
                  <div className="mb-6 p-4 bg-[#F5F0E5] border border-[rgba(168,132,47,0.25)] rounded-xs flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#A8842F] text-[#FCFAF5] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      {program.isComingSoon ? (
                        <Compass className="w-5 h-5 text-[#FCFAF5]" />
                      ) : (
                        <Play className="w-4 h-4 ml-0.5 fill-current text-[#FCFAF5]" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-[#A8842F] font-semibold">
                          {program.delivery}
                        </span>
                        <span className="text-[10px] font-mono text-[#9B9081]">
                          {program.audioDuration}
                        </span>
                      </div>
                      <p className="text-xs font-serif italic text-[#2A2317] truncate font-medium">
                        &ldquo;{program.audioTitle}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Specification Pills */}
                  <div className="grid grid-cols-2 gap-2.5 mb-6">
                    <div className="flex items-center gap-2 p-2.5 bg-[#FCFAF5] border border-[rgba(42,35,23,0.08)] rounded-xs">
                      <Clock className="w-3.5 h-3.5 text-[#A8842F] shrink-0" />
                      <div className="text-[11px] leading-tight">
                        <span className="text-[#9B9081] block text-[9px] uppercase tracking-wider">Duration</span>
                        <span className="text-[#2A2317] font-medium">{program.length}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-2.5 bg-[#FCFAF5] border border-[rgba(42,35,23,0.08)] rounded-xs">
                      <Calendar className="w-3.5 h-3.5 text-[#A8842F] shrink-0" />
                      <div className="text-[11px] leading-tight">
                        <span className="text-[#9B9081] block text-[9px] uppercase tracking-wider">Timing</span>
                        <span className="text-[#2A2317] font-medium">{program.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Program Coverage Bullet Points */}
                  <div className="mb-6 pt-4 border-t border-[rgba(42,35,23,0.08)]">
                    <span className="text-[10px] uppercase tracking-widest text-[#9B9081] block mb-3 font-mono">
                      What is included:
                    </span>
                    <ul className="space-y-2.5">
                      {program.covers.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#6A6052] leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#A8842F] shrink-0 mt-0.5" />
                          <span className="text-[#2A2317]">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Price & WhatsApp Action CTA */}
                <div className="pt-6 border-t border-[rgba(42,35,23,0.1)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#9B9081] block font-mono">
                      Enrollment Fee
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-2xl text-[#2A2317] font-medium">
                        {program.price}
                      </span>
                      <span className="text-xs text-[#6A6052]">
                        {program.priceDetail}
                      </span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/919999999999?text=${encodeURIComponent(program.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-medium transition-all rounded-xs shadow-xs ${
                      program.isComingSoon
                        ? 'border border-[#A8842F] text-[#2A2317] hover:bg-[#A8842F] hover:text-[#FCFAF5]'
                        : 'bg-[#A8842F] hover:bg-[#D3B36B] text-[#FCFAF5]'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{program.isComingSoon ? 'Join Priority Waitlist' : 'Enroll via WhatsApp'}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Framed Editorial Reassurance Bar */}
        <div className="p-8 sm:p-10 bg-[#FCFAF5] border border-[rgba(168,132,47,0.3)] rounded-xs shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 max-w-2xl">
            <div className="w-12 h-12 rounded-full bg-[#F5F0E5] border border-[rgba(168,132,47,0.3)] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#A8842F]" />
            </div>
            <div>
              <h4 className="font-serif text-xl sm:text-2xl text-[#2A2317] mb-1">
                Zero spam. No app to install. Just 5 minutes of stillness.
              </h4>
              <p className="text-xs sm:text-sm text-[#6A6052] font-light leading-relaxed">
                Direct audio and guidance delivered right into WhatsApp at sunrise. One prompt, one practice, and direct mentor Q&amp;A.
              </p>
            </div>
          </div>

          <Link
            href="/programs"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 border border-[#A8842F] text-[#2A2317] hover:bg-[#F5F0E5] hover:text-[#A8842F] text-xs uppercase tracking-[0.18em] transition-all font-medium rounded-xs"
          >
            <span>Explore all programs</span>
            <ArrowRight className="w-4 h-4 text-[#A8842F]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
