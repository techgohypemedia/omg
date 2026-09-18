'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { Search, X, ArrowRight } from 'lucide-react';

const SEARCHABLE_ITEMS = [
  { title: 'Meditation Box', type: 'Spiritual Box', href: '/#boxes', dect: 'ध्यान · To sit down, and actually stay.' },
  { title: 'Energy Protection Box', type: 'Spiritual Box', href: '/#boxes', dect: 'रक्षा · To clear a room, and keep it clear.' },
  { title: 'Health & Wealth Box', type: 'Spiritual Box', href: '/#boxes', dect: 'श्री · To keep your mind on what you are building.' },
  { title: 'Raw Amethyst Crystal', type: 'Single Piece', href: '/#single-pieces', dect: 'Uncut, exactly as it grew.' },
  { title: 'Crystal Hand Wand', type: 'Single Piece', href: '/#single-pieces', dect: 'Made to sit in your hand.' },
  { title: 'Crystal Pyramid', type: 'Single Piece', href: '/#single-pieces', dect: 'Four sides, one point.' },
  { title: 'Moonstone', type: 'Single Piece', href: '/#single-pieces', dect: 'Chandrakanta — the moon stone.' },
  { title: 'Pyrite', type: 'Single Piece', href: '/#single-pieces', dect: "Fool's gold, and not foolish at all." },
  { title: 'Crystal Royal Wall Clock', type: 'Single Piece', href: '/#single-pieces', dect: 'A real stone slice as the dial.' },
  { title: 'Om — The Sound', type: 'Meaning', href: '/om', dect: 'Everything starts with a sound.' },
  { title: 'Mārga — The Path', type: 'Meaning', href: '/marga', dect: 'A path, not a purchase. Five minutes, every day.' },
  { title: 'Gyān — The Knowing', type: 'Meaning', href: '/gyan', dect: 'You were given the ritual. Not the reason.' },
  { title: 'Panchtatva — The Five Elements', type: 'Philosophy', href: '/#philosophy', dect: 'Earth, fire, water, sky and air.' },
];

export function SearchModal() {
  const { isSearchOpen, setIsSearchOpen } = useCart();
  const [query, setQuery] = useState('');

  if (!isSearchOpen) return null;

  const filtered = query.trim() === ''
    ? SEARCHABLE_ITEMS.slice(0, 6)
    : SEARCHABLE_ITEMS.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.dect.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#171208]/70 backdrop-blur-xs transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      {/* Dialog */}
      <div className="relative z-10 w-full max-w-xl bg-[#FCFAF5] border border-[rgba(168,132,47,0.32)] shadow-2xl p-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center gap-3 border-b border-[rgba(42,35,23,0.13)] pb-4">
          <Search className="w-5 h-5 text-[#A8842F]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search boxes, stones, tatvas, rituals..."
            className="flex-1 bg-transparent text-lg text-[#2A2317] placeholder:text-[#9B9081] outline-none font-sans"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-[#6A6052] hover:text-[#2A2317] p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4">
          <span className="block text-[10px] uppercase tracking-widest text-[#9B9081] mb-2 font-medium">
            {query.trim() === '' ? 'Suggested Searches' : 'Results'}
          </span>
          <div className="space-y-1">
            {filtered.length === 0 ? (
              <p className="text-sm text-[#6A6052] py-4 text-center">
                No rituals or pieces found for &ldquo;{query}&rdquo;.
              </p>
            ) : (
              filtered.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setIsSearchOpen(false)}
                  className="flex items-center justify-between p-3 hover:bg-[#F5F0E5] transition-colors group"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-lg text-[#2A2317] group-hover:text-[#A8842F] transition-colors">
                        {item.title}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#EDE5D5] text-[#6A6052]">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-xs text-[#6A6052] mt-0.5">{item.dect}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#9B9081] group-hover:text-[#A8842F] transition-colors" />
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
