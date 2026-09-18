'use client';

import React, { useState } from 'react';
import { GoldSunMark } from '@/components/ui/gold-sun-mark';
import { ArrowRight, X } from 'lucide-react';
import { YouTubeIcon } from '@/components/ui/social-icons';
import { motion, AnimatePresence } from 'framer-motion';

interface YouTubeItem {
  id: string;
  number: string;
  title: string;
  duration: string;
  description: string;
  youtubeId?: string;
}

export function YouTubeSection() {
  const [activeVideo, setActiveVideo] = useState<YouTubeItem | null>(null);

  const videos: YouTubeItem[] = [
    {
      id: '108-beads',
      number: '01',
      title: 'Why 108 beads, and where to stop',
      duration: '4:12',
      description: 'The sumeru bead, why you never cross it, and the astronomy behind the number 108.'
    },
    {
      id: 'shri-yantra',
      number: '02',
      title: 'How to actually use a Shri Yantra',
      duration: '5:45',
      description: 'The 9 interlocking triangles, which way it faces in the morning, and daily copper care.'
    },
    {
      id: 'mukhi-guide',
      number: '03',
      title: 'Which mukhi is right for you',
      duration: '6:18',
      description: 'From 1 to 14 mukhi: tests to check real seeds, and what suits your current phase.'
    },
    {
      id: 'space-clearing',
      number: '04',
      title: 'Clearing your home: the correct order',
      duration: '3:50',
      description: 'Salt first, then camphor, then sound. Why clockwise movement around doorways matters.'
    }
  ];

  return (
    <section className="bg-[#171208] text-[#FCFAF5] py-24 sm:py-32 border-b border-[rgba(233,219,188,0.17)] w-full">
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
            <span className="eyebrow-label text-[#D3B36B] tracking-[0.26em]">Watch & Learn</span>
            <GoldSunMark size={16} />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FCFAF5] tracking-tight mb-4">
            The reasons, explained simply.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#FCFAF5]/80 font-light leading-relaxed">
            Short videos on what each thing is for, how to use it, and why it is done this way.
          </p>
        </motion.div>

        {/* Four Video Tiles in a Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {videos.map((vid, idx) => (
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-[#221A0E] border border-[rgba(233,219,188,0.15)] hover:border-[#A8842F]/80 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group rounded-xs overflow-hidden"
            >
              {/* Thumbnail Tile (Click to load) */}
              <div
                onClick={() => setActiveVideo(vid)}
                className="relative aspect-16/10 bg-[#171208] cursor-pointer overflow-hidden flex items-center justify-center border-b border-[rgba(233,219,188,0.1)]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#171208] via-transparent to-transparent opacity-80" />

                {/* Lesson number badge */}
                <div className="absolute top-3 left-3 text-[10px] font-mono text-[#A8842F] uppercase tracking-wider">
                  EP · {vid.number}
                </div>

                {/* Gold ring play button */}
                <div className="relative z-10 w-12 h-12 rounded-full border border-[#D3B36B] group-hover:border-[#FCFAF5] bg-[#171208]/75 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-md">
                  <GoldSunMark size={20} />
                </div>

                {/* Duration */}
                <div className="absolute bottom-2.5 right-2.5 bg-[#171208]/90 text-[#E9DBBC] text-[10px] font-mono px-2 py-0.5 rounded-xs border border-[rgba(233,219,188,0.15)]">
                  {vid.duration}
                </div>
              </div>

              {/* Video Title & Explanation */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#FCFAF5] group-hover:text-[#D3B36B] transition-colors mb-2.5">
                    {vid.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#E9DBBC]/80 font-light leading-relaxed mb-6">
                    {vid.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveVideo(vid)}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#D3B36B] group-hover:text-[#FCFAF5] transition-colors pt-3 border-t border-[rgba(233,219,188,0.08)]"
                >
                  <span>Watch episode</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link to YouTube */}
        <div className="text-center">
          <a
            href="https://youtube.com/@omgtribe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-9 py-4 border border-[rgba(233,219,188,0.3)] hover:border-[#D3B36B] text-[#E9DBBC] hover:text-[#FCFAF5] text-xs uppercase tracking-[0.2em] transition-all font-medium rounded-xs"
          >
            <YouTubeIcon size={16} />
            <span>Visit the OMG Tribe YouTube Channel</span>
          </a>
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
              className="relative z-10 w-full max-w-3xl bg-[#221A0E] border border-[#A8842F]/60 shadow-2xl p-6 sm:p-8 text-[#FCFAF5] rounded-xs"
            >
              <div className="flex items-center justify-between border-b border-[rgba(233,219,188,0.15)] pb-3.5 mb-5">
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#A8842F]">
                    Lesson {activeVideo.number} · {activeVideo.duration}
                  </span>
                  <h3 className="font-serif text-2xl text-[#FCFAF5] mt-0.5">
                    {activeVideo.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="text-[#9B9081] hover:text-[#FCFAF5] p-1.5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="aspect-16/9 bg-[#171208] flex flex-col items-center justify-center border border-[rgba(233,219,188,0.1)] p-8 text-center rounded-xs">
                <div className="w-16 h-16 rounded-full border-2 border-[#D3B36B] flex items-center justify-center mb-4 bg-[#171208]/90">
                  <GoldSunMark size={32} />
                </div>
                <h4 className="font-serif text-xl text-[#E9DBBC] mb-2">
                  {activeVideo.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#9B9081] max-w-md mb-6">
                  {activeVideo.description}
                </p>
                <a
                  href="https://youtube.com/@omgtribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#A8842F] hover:bg-[#D3B36B] text-[#FCFAF5] text-xs uppercase tracking-widest font-medium transition-colors rounded-xs shadow-md"
                >
                  <YouTubeIcon size={16} />
                  <span>Watch on YouTube Channel</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
