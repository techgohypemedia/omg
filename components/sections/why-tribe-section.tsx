'use client';

import React from 'react';
import { GoldSunMark } from '@/components/ui/gold-sun-mark';
import { motion } from 'framer-motion';

export function WhyTribeSection() {
  const reasons = [
    {
      num: '1',
      title: 'A reason for everything',
      desc: 'Every piece arrives with a card: what it is, why it is used, how to use it. No mystery, no guessing.'
    },
    {
      num: '2',
      title: 'Named origins',
      desc: 'We name the town, the river, the person who cut it. If a seller will not tell us where it came from, we do not buy it.'
    },
    {
      num: '3',
      title: 'Nothing sold with fear',
      desc: 'No curses. No warnings. No "buy this or else". We will never scare you into buying.'
    },
    {
      num: '4',
      title: 'Blessed before it ships',
      desc: 'Every batch rests in rock salt. Then our pandit prays over it before we pack it.'
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
            <span className="eyebrow-label text-[#A8842F]">Why OMG Tribe</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2A2317] tracking-tight mb-4">
            Four reasons people stay.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#6A6052] font-light leading-relaxed">
            There are a hundred places to buy a crystal. Here is what is different about ours.
          </p>
        </motion.div>

        {/* Four items in a row, each with the gold sun mark and a number */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="p-7 sm:p-8 bg-[#FCFAF5] border border-[rgba(42,35,23,0.13)] hover:border-[#A8842F]/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group rounded-xs"
            >
              <div>
                {/* Gold sun mark + number */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[rgba(42,35,23,0.08)]">
                  <div className="flex items-center gap-2.5">
                    <GoldSunMark size={20} />
                    <span className="font-mono text-xs font-medium text-[#A8842F]">
                      0{reason.num}
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#2A2317] group-hover:text-[#A8842F] transition-colors mb-3">
                  {reason.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6A6052] font-light leading-relaxed">
                  {reason.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[rgba(42,35,23,0.06)]">
                <span className="text-[10px] uppercase tracking-widest text-[#9B9081]">
                  OMG Standard
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
