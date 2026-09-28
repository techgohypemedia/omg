'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from '@/lib/cart-context';
import { GoldSunMark } from '@/components/ui/gold-sun-mark';
import {
  Search,
  X,
  ArrowRight,
  ShoppingBag,
  Check,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface SearchItem {
  id: string;
  title: string;
  type: 'box' | 'crystal' | 'tool' | 'guide';
  typeLabel: string;
  href: string;
  tagline: string;
  price?: number;
  originalPrice?: number;
  image?: string;
  devanagari?: string;
  keywords?: string[];
}

const SEARCH_ITEMS: SearchItem[] = [
  // Spiritual Boxes
  {
    id: 'meditation-box',
    title: 'Meditation Box',
    type: 'box',
    typeLabel: 'Spiritual Box',
    devanagari: 'ध्यान',
    href: '/shop',
    tagline: 'To sit down, and actually stay. 108 Lotus Mala & Copper Diya.',
    price: 4999,
    originalPrice: 6499,
    image: '/images/box-meditation-real.jpg',
    keywords: ['japa', 'mala', 'lotus', 'diya', 'copper', 'dhyan', 'peace', 'sitting'],
  },
  {
    id: 'protection-box',
    title: 'Energy Protection Box',
    type: 'box',
    typeLabel: 'Spiritual Box',
    devanagari: 'रक्षा',
    href: '/shop',
    tagline: 'To clear a room, and keep it clear. Raw Tourmaline & Camphor.',
    price: 4499,
    originalPrice: 5999,
    image: '/images/box-protection-real.jpg',
    keywords: ['tourmaline', 'salt', 'camphor', 'vastu', 'clearing', 'negative energy', 'raksha'],
  },
  {
    id: 'wealth-box',
    title: 'Health & Wealth Box',
    type: 'box',
    typeLabel: 'Spiritual Box',
    devanagari: 'श्री',
    href: '/shop',
    tagline: 'To keep your mind on what you are building. Pyrite & Kuber Yantra.',
    price: 5499,
    originalPrice: 7199,
    image: '/images/box-wealth-real.jpg',
    keywords: ['pyrite', 'kuber', 'yantra', 'gomti chakra', 'lakshmi', 'money', 'prosperity', 'shri'],
  },

  // Crystals & Stones
  {
    id: 'raw-amethyst',
    title: 'Raw Amethyst Crystal',
    type: 'crystal',
    typeLabel: 'Raw Crystal',
    href: '/shop',
    tagline: 'Uncut geode points for crown calm & deep sleep bedside.',
    price: 1299,
    originalPrice: 1799,
    image: '/images/single-amethyst.jpg',
    keywords: ['amethyst', 'purple', 'sleep', 'crown chakra', 'anxiety', 'stone'],
  },
  {
    id: 'crystal-hand-wand',
    title: 'Clear Quartz Hand Wand',
    type: 'crystal',
    typeLabel: 'Crystal Wand',
    href: '/shop',
    tagline: 'Dual-ended optical quartz wand for focus and acupressure.',
    price: 999,
    originalPrice: 1399,
    image: '/images/single-wand.jpg',
    keywords: ['quartz', 'wand', 'healing', 'energy flow', 'marma'],
  },
  {
    id: 'crystal-pyramid',
    title: 'Natural Quartz Pyramid',
    type: 'crystal',
    typeLabel: 'Vastu Form',
    href: '/shop',
    tagline: 'Four sides converging to one point for northeast vastu harmony.',
    price: 1499,
    originalPrice: 2099,
    image: '/images/single-pyramid.jpg',
    keywords: ['pyramid', 'vastu', 'focus', 'desk', 'north east'],
  },
  {
    id: 'moonstone',
    title: 'Rainbow Moonstone (Chandrakanta)',
    type: 'crystal',
    typeLabel: 'Gemstone',
    href: '/shop',
    tagline: 'Ethereal blue adularescence light for emotional stillness.',
    price: 899,
    originalPrice: 1249,
    image: '/images/single-moonstone.jpg',
    keywords: ['moonstone', 'lunar', 'calm', 'gemstone', 'chandrakanta'],
  },
  {
    id: 'pyrite',
    title: 'Golden Cubic Pyrite Cluster',
    type: 'crystal',
    typeLabel: 'Raw Crystal',
    href: '/shop',
    tagline: "Fool's gold natural mirror cubes for solar drive & prosperity.",
    price: 1099,
    originalPrice: 1549,
    image: '/images/single-pyrite.jpg',
    keywords: ['pyrite', 'gold', 'fire', 'abundance', 'navajun'],
  },
  {
    id: 'crystal-wall-clock',
    title: 'Agate Slice Royal Wall Clock',
    type: 'crystal',
    typeLabel: 'Vastu Timepiece',
    href: '/shop',
    tagline: 'Handcrafted volcanic agate slice dial for auspicious walls.',
    price: 4999,
    originalPrice: 6999,
    image: '/images/single-clock.jpg',
    keywords: ['clock', 'agate', 'stone', 'vastu', 'wall'],
  },

  // Sacred Tools
  {
    id: 'sacred-kansa-wand',
    title: 'Ayurvedic Kansa Wand',
    type: 'tool',
    typeLabel: 'Sacred Tool',
    href: '/shop',
    tagline: 'Bronze alloy wand for pulling pitta heat from skin & soles.',
    price: 1899,
    originalPrice: 2499,
    image: '/images/tool-kansa-wand-luxury.jpg',
    keywords: ['kansa', 'bronze', 'ayurveda', 'massage', 'pitta'],
  },
  {
    id: 'brass-chime',
    title: 'Harmonic Acoustic Brass Chime',
    type: 'tool',
    typeLabel: 'Sound Healing',
    href: '/shop',
    tagline: '432 Hz tuned bell metal resonance to dissolve stagnant energy.',
    price: 1599,
    originalPrice: 2199,
    image: '/images/tool-chime-luxury.jpg',
    keywords: ['chime', 'bell', 'sound', 'brass', '432hz', 'clearing'],
  },
  {
    id: 'manifest-diary',
    title: 'Sankalpa Leather Diary',
    type: 'tool',
    typeLabel: 'Sacred Stationery',
    href: '/shop',
    tagline: 'Cotton rag handmade deckle paper for daily intentions.',
    price: 999,
    originalPrice: 1399,
    image: '/images/tool-diary-luxury.jpg',
    keywords: ['diary', 'journal', 'paper', 'sankalpa', 'writing'],
  },

  // Philosophy & Guidance
  {
    id: 'om-meaning',
    title: 'Om — The Sacred Origin',
    type: 'guide',
    typeLabel: 'Philosophy',
    devanagari: 'ॐ',
    href: '/about#trinity',
    tagline: 'Everything begins with vibration. The cosmic root sound.',
    keywords: ['om', 'sound', 'origin', 'philosophy', 'trinity'],
  },
  {
    id: 'panchtatva-guide',
    title: 'Panchtatva — The Five Sacred Elements',
    type: 'guide',
    typeLabel: 'Philosophy',
    href: '/about#panchtatva',
    tagline: 'Earth, Water, Fire, Air, and Space in daily home ritual.',
    keywords: ['panchtatva', 'elements', 'earth', 'water', 'fire', 'air', 'space'],
  },
  {
    id: 'consult-guide',
    title: 'Consult Our Vedic Expert',
    type: 'guide',
    typeLabel: 'Consultation',
    href: '/contact#consult',
    tagline: 'Ask what suits your energy before you spend anything.',
    keywords: ['consultation', 'expert', 'pandit', 'help', 'advice', 'guidance'],
  },
];

const QUICK_TAGS = [
  'Meditation Box',
  'Tourmaline',
  'Pyrite',
  'Amethyst',
  'Kansa Wand',
  'Panchtatva',
];

export function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, addItem } = useCart();
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'box' | 'crystal' | 'tool' | 'guide'>('all');
  const [addedId, setAddedId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Focus input and handle ESC key
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsSearchOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isSearchOpen, setIsSearchOpen]);

  // Lock body scroll and guarantee wheel scrolling works with Lenis
  useEffect(() => {
    if (!isSearchOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const container = scrollContainerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      e.stopPropagation();
      const { scrollTop, scrollHeight, clientHeight } = container;
      const canScrollUp = scrollTop > 0 && e.deltaY < 0;
      const canScrollDown = scrollTop + clientHeight < scrollHeight - 1 && e.deltaY > 0;

      if (canScrollUp || canScrollDown) {
        container.scrollTop += e.deltaY;
        e.preventDefault();
      }
    };

    container.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      document.body.style.overflow = originalOverflow;
      container.removeEventListener('wheel', onWheel);
    };
  }, [isSearchOpen]);

  // Reset query on close
  useEffect(() => {
    if (!isSearchOpen) {
      setQuery('');
      setActiveTab('all');
    }
  }, [isSearchOpen]);

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();

    return SEARCH_ITEMS.filter((item) => {
      const matchesTab = activeTab === 'all' || item.type === activeTab;
      if (!matchesTab) return false;

      if (!q) return true;

      const inTitle = item.title.toLowerCase().includes(q);
      const inTagline = item.tagline.toLowerCase().includes(q);
      const inType = item.typeLabel.toLowerCase().includes(q);
      const inKeywords = item.keywords?.some((k) => k.toLowerCase().includes(q));

      return inTitle || inTagline || inType || inKeywords;
    });
  }, [query, activeTab]);

  const handleQuickAdd = (item: SearchItem, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (item.price) {
      addItem({
        id: item.id,
        name: item.title,
        subtitle: item.tagline,
        price: item.price,
        originalPrice: item.originalPrice,
        image: item.image || '',
        category: item.typeLabel,
      });

      setAddedId(item.id);
      setTimeout(() => setAddedId(null), 1500);
    }
  };

  const handleSelect = (href: string) => {
    setIsSearchOpen(false);
    router.push(href);
  };

  if (!isSearchOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-3 sm:px-4"
      data-lenis-prevent="true"
    >
      {/* Dark backdrop with blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/75 backdrop-blur-md"
        onClick={() => setIsSearchOpen(false)}
        data-lenis-prevent="true"
      />

      {/* Pure White Search Modal Panel with Guaranteed Scroll */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: -15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: -15 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        data-lenis-prevent="true"
        className="relative z-10 w-full max-w-2xl bg-white border border-zinc-200 shadow-2xl rounded-sm overflow-hidden flex flex-col h-[82vh] max-h-[700px]"
      >
        {/* Header Bar (shrink-0 so it never collapses) */}
        <div className="p-4 sm:p-5 border-b border-zinc-200 bg-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white shrink-0">
              <Search className="h-4 w-4" />
            </div>

            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search boxes, crystals, malas, vastu tools..."
              className="flex-1 bg-transparent text-base sm:text-lg text-zinc-900 placeholder:text-zinc-400 font-serif outline-none font-medium"
            />

            {query ? (
              <button
                onClick={() => setQuery('')}
                className="p-1.5 text-zinc-400 hover:text-zinc-900 transition-colors rounded-xs hover:bg-zinc-100"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            ) : (
              <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono font-medium text-zinc-500 bg-zinc-100 border border-zinc-200 rounded-xs">
                ESC
              </kbd>
            )}

            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-1.5 text-zinc-400 hover:text-zinc-900 transition-colors sm:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Quick Trending Tags */}
          <div className="mt-3 pt-3 border-t border-zinc-100 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono shrink-0 mr-1 flex items-center gap-1 font-semibold">
              <Sparkles className="h-3 w-3 text-[#A8842F]" />
              Popular:
            </span>
            {QUICK_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className={`text-[11px] px-2.5 py-1 whitespace-nowrap rounded-xs font-medium transition-colors border ${
                  query.toLowerCase() === tag.toLowerCase()
                    ? 'bg-zinc-900 text-white border-zinc-900'
                    : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100 hover:text-zinc-900'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Filter Tabs */}
          <div className="mt-3 flex items-center gap-1.5 overflow-x-auto scrollbar-none text-[11px]">
            {[
              { id: 'all', label: 'All' },
              { id: 'box', label: 'Boxes' },
              { id: 'crystal', label: 'Crystals' },
              { id: 'tool', label: 'Sacred Tools' },
              { id: 'guide', label: 'Philosophy' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1 font-mono uppercase tracking-wider transition-colors rounded-xs font-medium ${
                  activeTab === tab.id
                    ? 'bg-zinc-900 text-white'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results List: min-h-0, flex-1, ref, and data-lenis-prevent guarantee scrolling */}
        <div
          ref={scrollContainerRef}
          data-lenis-prevent="true"
          className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden p-2 sm:p-3 divide-y divide-zinc-100 bg-white"
          style={{
            overscrollBehavior: 'contain',
            scrollbarWidth: 'thin',
            scrollbarColor: '#a1a1aa #f4f4f5',
          }}
        >
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 px-4">
              <GoldSunMark size={28} className="mx-auto mb-3 opacity-40 text-zinc-400" />
              <p className="font-serif text-lg text-zinc-900 font-medium mb-1">
                No sacred tools matched &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-zinc-500 max-w-sm mx-auto mb-4">
                Looking for something specific? Speak directly with our Pandit on WhatsApp.
              </p>
              <a
                href="https://wa.me/919999999999?text=Pranam!%20I%20am%20looking%20for%20a%20spiritual%20piece%20on%20OMG%20Tribe."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white text-xs uppercase tracking-wider font-medium hover:bg-black transition-colors rounded-xs"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          ) : (
            filteredItems.map((item) => {
              const isAdded = addedId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item.href)}
                  className="group flex items-center justify-between gap-4 p-3 hover:bg-zinc-50 transition-colors rounded-xs cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    {/* Thumbnail Image */}
                    {item.image ? (
                      <div className="relative h-13 w-13 sm:h-14 sm:w-14 rounded-xs overflow-hidden bg-zinc-100 shrink-0 border border-zinc-200">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="60px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="h-13 w-13 sm:h-14 sm:w-14 rounded-xs bg-zinc-100 flex items-center justify-center shrink-0 border border-zinc-200 text-zinc-700">
                        {item.devanagari ? (
                          <span className="font-devanagari text-2xl font-bold text-zinc-800">{item.devanagari}</span>
                        ) : (
                          <GoldSunMark size={20} className="text-zinc-600" />
                        )}
                      </div>
                    )}

                    {/* High-Contrast Visible Text Content */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h4 className="font-serif text-base sm:text-lg text-zinc-900 font-medium group-hover:text-black transition-colors truncate">
                          {item.title}
                        </h4>
                        <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-zinc-100 text-zinc-600 border border-zinc-200 font-mono font-medium shrink-0">
                          {item.typeLabel}
                        </span>
                      </div>

                      <p className="text-xs text-zinc-600 line-clamp-1 font-normal">
                        {item.tagline}
                      </p>

                      {item.price && (
                        <div className="mt-1 flex items-baseline gap-2">
                          <span className="font-serif text-sm font-bold text-zinc-900">
                            ₹{item.price.toLocaleString('en-IN')}
                          </span>
                          {item.originalPrice && (
                            <span className="text-[11px] text-zinc-400 line-through">
                              ₹{item.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    {item.price && (
                      <button
                        onClick={(e) => handleQuickAdd(item, e)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold rounded-xs transition-colors shadow-xs ${
                          isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-zinc-900 text-white hover:bg-black'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="h-3 w-3" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="h-3 w-3" />
                            <span>Add</span>
                          </>
                        )}
                      </button>
                    )}

                    <div className="h-8 w-8 rounded-full flex items-center justify-center text-zinc-400 group-hover:text-zinc-900 group-hover:bg-zinc-200 transition-all">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer (shrink-0 so it always stays anchored at the bottom) */}
        <div className="p-3 sm:px-5 bg-zinc-50 border-t border-zinc-200 shrink-0 flex items-center justify-between text-[11px] text-zinc-600">
          <span className="font-mono font-medium">
            {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} found
          </span>

          <Link
            href="/shop"
            onClick={() => setIsSearchOpen(false)}
            className="inline-flex items-center gap-1 text-zinc-900 hover:text-black font-semibold uppercase tracking-wider text-[10px] transition-colors"
          >
            <span>View All in Sacred Shop</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
