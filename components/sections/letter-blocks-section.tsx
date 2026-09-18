'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

type LetterType = 'O' | 'M' | 'G' | null;

export function LetterBlocksSection() {
  const [activeLetter, setActiveLetter] = useState<LetterType>(null);

  const letterDetails = {
    O: {
      letter: 'O',
      devanagari: 'ॐ',
      word: 'Om',
      summary: 'The sound everything began with.',
      heading: 'Everything starts with a sound.',
      paragraphs: [
        'Before anything was made, there was a sound. Om is that sound. The oldest books call it the first one, the one everything else came from.',
        'This is why every prayer in India starts with it. And why it is the first letter of our name.',
        'It is also the easiest practice there is. You do not have to believe anything. Sit down, say it once, and see how much quieter you feel.'
      ],
      ctaText: 'Start with the Meditation Box →',
      ctaHref: '#boxes',
      pageHref: '/om'
    },
    M: {
      letter: 'M',
      devanagari: 'मार्ग',
      word: 'Mārga',
      summary: 'The path. Five minutes, every day.',
      heading: 'A path, not a purchase.',
      paragraphs: [
        'Mārga means path. Not a feeling. A road you walk, one day at a time.',
        'Most people buy something spiritual and it ends up in a drawer. A path is different. Five minutes. Same corner. Same time. Until you stop having to decide.',
        'Every box we make is built around one short daily practice. Short, so that you keep doing it.'
      ],
      ctaText: 'See our programs →',
      ctaHref: '#programs',
      pageHref: '/marga'
    },
    G: {
      letter: 'G',
      devanagari: 'ज्ञान',
      word: 'Gyān',
      summary: 'The knowing. Every ritual has a reason.',
      heading: 'You were given the ritual. Not the reason.',
      paragraphs: [
        'Gyān means knowing.',
        'A thread on your wrist. A shell in the cash box. Haldi tied in yellow cloth. Most of us grew up doing these things. Nobody told us why.',
        'The reasons are there. Some are three thousand years old and written down. They are much better than the half answers we got.',
        'So everything we sell comes with a card that tells you the reason. That is our promise. Nothing here is just for show.'
      ],
      ctaText: 'Read our philosophy →',
      ctaHref: '#philosophy',
      pageHref: '/gyan'
    }
  };

  const toggleLetter = (letter: 'O' | 'M' | 'G') => {
    setActiveLetter(activeLetter === letter ? null : letter);
  };

  return (
    <section className="bg-[#171208] text-[#FCFAF5] py-14 sm:py-18 border-b border-[rgba(233,219,188,0.17)] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[11px] uppercase tracking-[0.26em] text-[#A8842F] mb-8 font-medium">
          The Three Pillars of OMG · Click to reveal the meaning
        </p>

        {/* The Three Letter Blocks in a Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 text-left">
          {(['O', 'M', 'G'] as const).map((letterKey) => {
            const item = letterDetails[letterKey];
            const isSelected = activeLetter === letterKey;

            return (
              <button
                key={letterKey}
                type="button"
                onClick={() => toggleLetter(letterKey)}
                className={`group relative p-7 border transition-all duration-300 text-left cursor-pointer ${
                  isSelected
                    ? 'bg-[#221A0E] border-[#A8842F] shadow-xl scale-[1.01]'
                    : 'bg-[#1D170C] border-[rgba(233,219,188,0.14)] hover:border-[rgba(168,132,47,0.5)] hover:bg-[#221A0E]'
                }`}
              >
                {/* Huge Letter in gold at 40% opacity, brightening to full gold on hover */}
                <div className="flex justify-between items-start mb-5">
                  <span
                    className={`font-serif text-5xl sm:text-6xl font-light transition-all duration-300 ${
                      isSelected
                        ? 'text-[#D3B36B] opacity-100 scale-105'
                        : 'text-[#A8842F] opacity-40 group-hover:opacity-100 group-hover:text-[#D3B36B]'
                    }`}
                  >
                    {item.letter}
                  </span>
                  <span className="font-devanagari text-2xl text-[#E9DBBC]/70 group-hover:text-[#D3B36B] transition-colors">
                    {item.devanagari}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl text-[#FCFAF5] group-hover:text-[#D3B36B] transition-colors">
                      {item.word}
                    </h3>
                    {isSelected ? (
                      <ChevronUp className="w-4 h-4 text-[#D3B36B]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#9B9081] group-hover:text-[#D3B36B] transition-colors" />
                    )}
                  </div>
                  <p className="text-xs text-[#9B9081] group-hover:text-[#E9DBBC] transition-colors leading-relaxed font-light">
                    {item.summary}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Expandable Active Letter Panel */}
        {activeLetter && (
          <div className="mt-6 p-6 sm:p-8 bg-[#221A0E] border border-[rgba(168,132,47,0.35)] text-left animate-in fade-in slide-in-from-top-4 duration-300 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[rgba(233,219,188,0.12)] pb-4 mb-5">
              <div className="flex items-center gap-3">
                <span className="font-serif text-3xl text-[#D3B36B]">
                  {letterDetails[activeLetter].letter} is for {letterDetails[activeLetter].word}
                </span>
                <span className="font-devanagari text-xl text-[#E9DBBC]">
                  {letterDetails[activeLetter].devanagari}
                </span>
              </div>
              <Link
                href={letterDetails[activeLetter].pageHref}
                className="text-xs uppercase tracking-widest text-[#D3B36B] hover:text-[#FCFAF5] flex items-center gap-1.5 mt-2 sm:mt-0 transition-colors"
              >
                <span>Dedicated page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <h4 className="font-serif text-2xl sm:text-3xl text-[#FCFAF5] mb-4">
              {letterDetails[activeLetter].heading}
            </h4>

            <div className="space-y-3.5 text-sm sm:text-base text-[#FCFAF5]/85 leading-relaxed mb-6 max-w-3xl font-light">
              {letterDetails[activeLetter].paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={letterDetails[activeLetter].ctaHref}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#A8842F] hover:bg-[#D3B36B] text-[#FCFAF5] text-xs uppercase tracking-widest transition-colors font-medium rounded-xs"
              >
                <span>{letterDetails[activeLetter].ctaText}</span>
              </a>
              <button
                type="button"
                onClick={() => setActiveLetter(null)}
                className="text-xs uppercase tracking-widest text-[#9B9081] hover:text-[#FCFAF5] py-2 px-3"
              >
                Close panel
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
