'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GoldSunMark } from '@/components/ui/gold-sun-mark';
import { motion } from 'framer-motion';

export function PhilosophySection() {
  const elements = [
    { number: '1', devanagari: 'पृथ्वी', english: 'Earth', hands: 'The stone you hold' },
    { number: '2', devanagari: 'अग्नि', english: 'Fire', hands: 'The diya you light' },
    { number: '3', devanagari: 'जल', english: 'Water', hands: 'The copper you drink from' },
    { number: '4', devanagari: 'आकाश', english: 'Sky', hands: 'The space you sit in' },
    { number: '5', devanagari: 'वायु', english: 'Air', hands: 'The smoke and the sound' },
  ];

  return (
    <section id="philosophy" className="bg-[#171208] text-[#FCFAF5] py-28 sm:py-36 border-b border-[rgba(233,219,188,0.17)] relative w-full overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#A8842F]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Centered flowing piece of writing */}
      <div className="w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-[72ch] mx-auto"
        >
          {/* Label */}
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <GoldSunMark size={16} />
            <span className="eyebrow-label text-[#D3B36B] tracking-[0.26em]">Our Philosophy</span>
            <GoldSunMark size={16} />
          </div>

          {/* H2 */}
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#FCFAF5] tracking-tight mb-8">
            Everything we sell is one of five things.
          </h2>

          {/* Flowing copy */}
          <div className="space-y-6 text-base sm:text-lg font-sans font-light leading-relaxed text-[#FCFAF5]/85 text-left sm:text-center mb-16">
            <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#E9DBBC] leading-snug">
              Long ago, India did not see the world as hundreds of different things. It said there are five. Panchtatva.
            </p>

            <p>
              Earth, fire, water, sky and air. Your body is made of these five. So is the stone in your hand, the flame of your diya, the water in your copper bottle, the sky — aasman — above your head, and the air that carries every smell and every sound.
            </p>

            <p>
              That is the simple idea behind this whole shop. We are not selling charms. We are giving you the five elements in a form you can hold, keep, drink, light and say out loud. Real things are much easier to stay with than good intentions.
            </p>

            <p>
              This is the difference that matters most to us. Superstition says: <em className="italic text-[#E9DBBC]">do this, or something bad will happen.</em> Panchtatva says: <em className="italic text-[#D3B36B]">you are made of the same five things as everything around you, so take care of both.</em> One is fear. The other is a way of living.
            </p>

            <p className="font-medium text-[#D3B36B] pt-2 text-lg">
              We chose the second one. That is why OMG Tribe exists. And why everything we sell comes with its reason written down.
            </p>
          </div>
        </motion.div>

        {/* The five, as one strip: One label, five parts. Presented as a single idea, not five boxes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-14 max-w-6xl mx-auto"
        >
          <div className="text-center mb-7">
            <span className="font-devanagari text-xl sm:text-2xl text-[#D3B36B]">पंचतत्व</span>
            <span className="text-xs uppercase tracking-[0.24em] text-[#E9DBBC] ml-2 font-medium">
              · Panchtatva — the five elements, in your hands
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(233,219,188,0.15)] border border-[rgba(233,219,188,0.22)] bg-[#221A0E]/70 backdrop-blur-md rounded-xs shadow-xl overflow-hidden">
            {elements.map((item) => (
              <motion.div
                key={item.number}
                whileHover={{ backgroundColor: '#2E2413', transition: { duration: 0.2 } }}
                className="p-6 sm:p-7 text-center flex flex-col justify-center items-center group transition-colors cursor-default"
              >
                <span className="font-mono text-[10px] text-[#A8842F] mb-1.5">
                  0{item.number}
                </span>
                <span className="font-devanagari text-3xl text-[#E9DBBC] group-hover:text-[#D3B36B] transition-colors mb-1.5">
                  {item.devanagari}
                </span>
                <strong className="font-serif text-xl text-[#FCFAF5] block mb-1">
                  {item.english}
                </strong>
                <span className="text-xs text-[#9B9081] group-hover:text-[#FCFAF5]/90 transition-colors">
                  {item.hands}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <div className="text-center mt-12">
            <Link
              href="/gyan"
              className="inline-flex items-center gap-2 px-9 py-4 bg-[#A8842F] hover:bg-[#D3B36B] text-[#FCFAF5] text-xs uppercase tracking-[0.2em] transition-all font-medium rounded-xs shadow-lg"
            >
              <span>Read more about panchtatva</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
