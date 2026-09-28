'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { FooterSection } from '@/components/sections/footer-section';
import { GoldSunMark } from '@/components/ui/gold-sun-mark';
import { useCart } from '@/lib/cart-context';
import {
  ShoppingBag,
  Check,
  Search,
  SlidersHorizontal,
  Sparkles,
  ShieldCheck,
  Truck,
  HeartHandshake,
  ArrowRight,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  category: 'boxes' | 'crystals' | 'tools';
  categoryLabel: string;
  devanagari?: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  description: string;
  contents?: string[];
  provenance: string;
}

const ALL_PRODUCTS: Product[] = [
  // Spiritual Boxes
  {
    id: 'meditation-box',
    name: 'Meditation Box',
    category: 'boxes',
    categoryLabel: 'Spiritual Box',
    devanagari: 'ध्यान',
    tagline: 'To sit down, and actually stay.',
    price: 4999,
    originalPrice: 6499,
    image: '/images/box-meditation-real.jpg',
    badge: 'Bestseller',
    description:
      'Everything required to begin and sustain a 15-minute daily sitting habit. Handcrafted by heritage artisans in Haridwar and Jaipur.',
    contents: [
      '108 Hand-Knotted Lotus Seed (Kamalgatta) Mala',
      'Heavy Gauge Pure Copper Handcrafted Diya',
      'Cold-Pressed Himalayan Sandalwood Cones',
      'The 108 Astronomy & Technique Instruction Card',
    ],
    provenance: 'Conch seeds from sacred Pushkar waters, cast copper from Moradabad.',
  },
  {
    id: 'protection-box',
    name: 'Energy Protection Box',
    category: 'boxes',
    categoryLabel: 'Spiritual Box',
    devanagari: 'रक्षा',
    tagline: 'To clear a room, and keep it clear.',
    price: 4499,
    originalPrice: 5999,
    image: '/images/box-protection-real.jpg',
    badge: 'Vastu Essential',
    description:
      'A complete energy-cleansing ritual system for homes, workplaces, and threshold entryways. Clears stagnant vibrations and restores balance.',
    contents: [
      'Natural Raw Untreated Black Tourmaline Log',
      'Carved Terracotta Pot with Himalayan Pink Halite Rock Salt',
      'Pure Brass Camphor & Guggal Ritual Burner',
      'Vastu Space-Clearing Sequence Protocol Manual',
    ],
    provenance: 'Deep-earth tourmaline from Rajasthan, rock salt from Khewra range.',
  },
  {
    id: 'wealth-box',
    name: 'Health & Wealth Box',
    category: 'boxes',
    categoryLabel: 'Spiritual Box',
    devanagari: 'श्री',
    tagline: 'To keep your mind on what you are building.',
    price: 5499,
    originalPrice: 7199,
    image: '/images/box-wealth-real.jpg',
    badge: 'Prosperity',
    description:
      'Designed to anchor clarity, focus, and abundance in your workspace or wealth altar according to authentic Vedic geometry.',
    contents: [
      'Natural Cubic Pyrite Cluster (Fool’s Gold)',
      'Consecrated Pure Copper Kuber Yantra Plate',
      'Pair of Natural Energized Gomti Chakras',
      'The Sacred Direction & Lakshmi Sankalpa Booklet',
    ],
    provenance: 'Golden pyrite from Navajún, copper etched in Varanasi.',
  },

  // Crystals & Wands
  {
    id: 'raw-amethyst',
    name: 'Raw Amethyst Cluster',
    category: 'crystals',
    categoryLabel: 'Raw Crystal',
    tagline: 'Uncut, exactly as it grew from the earth.',
    price: 1299,
    originalPrice: 1799,
    image: '/images/single-amethyst.jpg',
    badge: 'Crown Chakra',
    description:
      'Pure deep-violet crystal points that naturally soothe nervous exhaustion and bring restful deep sleep when kept bedside.',
    provenance: 'Ethically mined geodes from Minas Gerais.',
  },
  {
    id: 'crystal-hand-wand',
    name: 'Clear Quartz Crystal Wand',
    category: 'crystals',
    categoryLabel: 'Crystal Wand',
    tagline: 'Faceted point to direct and clear energy.',
    price: 999,
    originalPrice: 1399,
    image: '/images/single-wand.jpg',
    description:
      'Dual-ended wand with a precision faceted point and smooth rounded massage orb. Ideal for marma touch and meditation focus.',
    provenance: 'Optical-grade clear quartz from Himalayan valleys.',
  },
  {
    id: 'crystal-pyramid',
    name: 'Natural Crystal Pyramid',
    category: 'crystals',
    categoryLabel: 'Vastu Form',
    tagline: 'Four sides converging into one apex.',
    price: 1499,
    originalPrice: 2099,
    image: '/images/single-pyramid.jpg',
    badge: 'Focus',
    description:
      'Pyramidal sacred geometry gathers subtle ambient energy. Place in the northeast corner of your desk or living room.',
    provenance: 'Carved from monolithic natural quartz block.',
  },
  {
    id: 'moonstone',
    name: 'Rainbow Moonstone (Chandrakanta)',
    category: 'crystals',
    categoryLabel: 'Gemstone',
    tagline: 'Ethereal blue glow for emotional peace.',
    price: 899,
    originalPrice: 1249,
    image: '/images/single-moonstone.jpg',
    description:
      'Historically revered as solidified moonbeams. Deeply calming stone for introspective journaling and easing inner agitation.',
    provenance: 'Southern peninsular gemstone pegmatite deposits.',
  },
  {
    id: 'pyrite',
    name: 'Golden Pyrite Cluster',
    category: 'crystals',
    categoryLabel: 'Raw Crystal',
    tagline: 'Cubic fire energy to fuel resolve.',
    price: 1099,
    originalPrice: 1549,
    image: '/images/single-pyrite.jpg',
    description:
      'Mirror-metallic cubic formations reflecting solar vitality. Excellent for desk placements and creative business spaces.',
    provenance: 'Natural untreated mineral cluster from Navajún.',
  },
  {
    id: 'crystal-wall-clock',
    name: 'Agate Slice Royal Wall Clock',
    category: 'crystals',
    categoryLabel: 'Vastu Timepiece',
    tagline: 'A natural banded stone slice as the dial.',
    price: 4999,
    originalPrice: 6999,
    image: '/images/single-clock.jpg',
    badge: 'Handcrafted',
    description:
      'Each timepiece is unique, sliced from ancient volcanic agate geodes with gilded brass hands. Harmonizes the north or east wall.',
    provenance: 'Natural agate mined in Khambhat, silent quartz sweep movement.',
  },

  // Sacred Tools
  {
    id: 'sacred-kansa-wand',
    name: 'Ayurvedic Kansa Massage Wand',
    category: 'tools',
    categoryLabel: 'Sacred Tool',
    tagline: 'Healing bronze alloy to relieve face and foot heat.',
    price: 1899,
    originalPrice: 2499,
    image: '/images/tool-kansa-wand-luxury.jpg',
    badge: 'Ayurvedic',
    description:
      'Handcrafted using the ancient bronze alloy ratio (copper and tin) that alkalizes skin and pulls excess pitta heat from tired eyes and soles.',
    provenance: 'Sand-cast by traditional copper-smiths of Moradabad.',
  },
  {
    id: 'brass-chime',
    name: 'Harmonic Acoustic Brass Chime',
    category: 'tools',
    categoryLabel: 'Sound Healing',
    tagline: 'Pure sustained resonance to clear sluggish rooms.',
    price: 1599,
    originalPrice: 2199,
    image: '/images/tool-chime-luxury.jpg',
    description:
      'Tuned to a clean 432 Hz harmonic frequency. Strike once at room entryways to dissolve acoustic and energetic heaviness.',
    provenance: 'Hand-tuned bell metal alloy from Odisha.',
  },
  {
    id: 'manifest-diary',
    name: 'Sankalpa Hand-Bound Leather Diary',
    category: 'tools',
    categoryLabel: 'Sacred Stationery',
    tagline: 'Cotton rag handmade paper for daily intentions.',
    price: 999,
    originalPrice: 1399,
    image: '/images/tool-diary-luxury.jpg',
    description:
      'Wood-free tree-free handmade cotton paper with sun-dried deckled edges. Wrapped in genuine vegetable-tanned leather.',
    provenance: 'Hand-pressed paper from Sanganer craftsmen.',
  },
];

export default function ShopPage() {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'boxes' | 'crystals' | 'tools'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Offerings' },
    { id: 'boxes', label: 'Spiritual Boxes' },
    { id: 'crystals', label: 'Crystals & Wands' },
    { id: 'tools', label: 'Sacred Tools & Vastu' },
  ];

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const handleAddToCart = (product: Product, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      subtitle: product.tagline,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      category: product.categoryLabel,
    });
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF5] text-[#2A2317]">
      <Navbar />

      <main className="flex-1">
        {/* Shop Header Banner */}
        <section className="bg-[#171208] text-[#FCFAF5] py-16 sm:py-24 border-b border-[rgba(233,219,188,0.15)] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#A8842F]/10 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#D3B36B]/5 blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="inline-flex items-center justify-center gap-2 mb-3">
              <GoldSunMark size={16} />
              <span className="eyebrow-label text-[#D3B36B] tracking-[0.28em]">
                The Sacred Shop
              </span>
              <GoldSunMark size={16} />
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-[#FCFAF5] tracking-tight mb-4">
              Instruments for Daily Stillness.
            </h1>

            <p className="font-serif italic text-lg sm:text-xl text-[#E9DBBC]/80 max-w-2xl mx-auto font-light leading-relaxed">
              Three complete ritual boxes, uncut natural crystals, and handcrafted temple brass. Each blessed by hand before dispatch.
            </p>
          </div>
        </section>

        {/* Filter & Controls Bar */}
        <section className="sticky top-20 z-30 bg-[#F5F0E5]/95 backdrop-blur-md border-b border-[rgba(42,35,23,0.12)] py-4">
          <div className="w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id as any)}
                    className={`whitespace-nowrap px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-all rounded-xs border ${
                      selectedCategory === cat.id
                        ? 'bg-[#171208] text-[#D3B36B] border-[#171208]'
                        : 'bg-[#FCFAF5] text-[#6A6052] border-[rgba(42,35,23,0.12)] hover:border-[#A8842F]/50 hover:text-[#2A2317]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search & Sort Controls */}
              <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                {/* Search */}
                <div className="relative flex-1 md:w-56">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#9B9081]" />
                  <input
                    type="text"
                    placeholder="Search sacred tools..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#FCFAF5] border border-[rgba(42,35,23,0.12)] pl-9 pr-3 py-2 text-xs text-[#2A2317] placeholder-[#9B9081] focus:outline-none focus:border-[#A8842F]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9B9081] hover:text-[#2A2317]"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#FCFAF5] border border-[rgba(42,35,23,0.12)] px-3 py-2 text-xs text-[#2A2317] focus:outline-none focus:border-[#A8842F]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Product Catalog Grid */}
        <section className="py-14 sm:py-20 w-full">
          <div className="w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-[#F5F0E5] border border-[rgba(42,35,23,0.1)] p-8">
                <p className="font-serif text-2xl text-[#2A2317] mb-2">No sacred pieces found.</p>
                <p className="text-xs text-[#6A6052] mb-6">Try clearing your search query or switching categories.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="px-6 py-2.5 bg-[#A8842F] text-[#FCFAF5] text-xs uppercase tracking-wider font-medium hover:bg-[#8F6F24]"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                {filteredProducts.map((product) => {
                  const isJustAdded = addedId === product.id;

                  return (
                    <motion.article
                      key={product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      onClick={() => setSelectedProduct(product)}
                      className="group cursor-pointer flex flex-col justify-between overflow-hidden border border-[rgba(42,35,23,0.12)] bg-[#FCFAF5] transition-all duration-300 hover:border-[#A8842F]/60 hover:shadow-xl rounded-xs"
                    >
                      {/* Product Image Banner */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#171208]">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                        {/* Top Badges */}
                        <div className="absolute left-3 right-3 top-3 z-10 flex items-center justify-between">
                          <span className="bg-[#171208]/80 text-[#D3B36B] font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 border border-white/10 backdrop-blur-xs">
                            {product.categoryLabel}
                          </span>

                          {product.badge && (
                            <span className="bg-[#A8842F] text-[#FCFAF5] text-[9px] uppercase tracking-wider px-2.5 py-1 font-medium shadow-sm">
                              {product.badge}
                            </span>
                          )}
                        </div>

                        {product.devanagari && (
                          <div className="absolute bottom-3 right-3 font-devanagari text-2xl text-[#E9DBBC]/70 select-none">
                            {product.devanagari}
                          </div>
                        )}
                      </div>

                      {/* Product Details */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-serif text-xl sm:text-2xl text-[#2A2317] group-hover:text-[#A8842F] transition-colors">
                            {product.name}
                          </h3>

                          <p className="mt-1 font-serif italic text-xs sm:text-sm text-[#6A6052] line-clamp-1">
                            {product.tagline}
                          </p>

                          <p className="mt-3 text-xs text-[#52493D] font-light leading-relaxed line-clamp-2">
                            {product.description}
                          </p>
                        </div>

                        {/* Price & Action Row */}
                        <div className="mt-6 pt-4 border-t border-[rgba(42,35,23,0.09)] flex items-center justify-between gap-3">
                          <div>
                            <div className="flex items-baseline gap-2">
                              <span className="font-serif text-xl sm:text-2xl text-[#2A2317] font-medium">
                                ₹{product.price.toLocaleString('en-IN')}
                              </span>
                              {product.originalPrice && (
                                <span className="text-xs text-[#9B9081] line-through">
                                  ₹{product.originalPrice.toLocaleString('en-IN')}
                                </span>
                              )}
                            </div>
                            <span className="text-[10px] text-[#A8842F] uppercase tracking-wider block font-mono">
                              Free Hand Blessing
                            </span>
                          </div>

                          <button
                            onClick={(e) => handleAddToCart(product, e)}
                            className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.16em] transition-all duration-300 ${
                              isJustAdded
                                ? 'bg-emerald-700 text-[#FCFAF5]'
                                : 'bg-[#171208] text-[#E9DBBC] hover:bg-[#A8842F] hover:text-[#FCFAF5]'
                            }`}
                          >
                            {isJustAdded ? (
                              <>
                                <Check className="h-3.5 w-3.5" />
                                <span>Added</span>
                              </>
                            ) : (
                              <>
                                <ShoppingBag className="h-3.5 w-3.5 text-[#D3B36B]" />
                                <span>Add to Bag</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Sacred Trust & Commitments */}
        <section className="bg-[#F5F0E5] py-16 border-t border-[rgba(42,35,23,0.12)]">
          <div className="w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#FCFAF5] border border-[rgba(168,132,47,0.3)] rounded-full text-[#A8842F] shrink-0">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#2A2317] mb-1">Free Delivery Across India</h4>
                  <p className="text-xs text-[#6A6052] font-light leading-relaxed">
                    Carefully packed in multi-layered tamper-proof boxes. Reaches your sanctuary safely in 3–5 working days.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#FCFAF5] border border-[rgba(168,132,47,0.3)] rounded-full text-[#A8842F] shrink-0">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#2A2317] mb-1">Blessed by Hand</h4>
                  <p className="text-xs text-[#6A6052] font-light leading-relaxed">
                    Every seed, copper diya, and crystal cluster is purified and energized with traditional Vedic mantras before packing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#FCFAF5] border border-[rgba(168,132,47,0.3)] rounded-full text-[#A8842F] shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#2A2317] mb-1">Authentic Provenance</h4>
                  <p className="text-xs text-[#6A6052] font-light leading-relaxed">
                    Zero synthetic plastic beads or artificial colors. We disclose the exact origin of every single tool.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FCFAF5] border border-[rgba(168,132,47,0.4)] shadow-2xl p-6 sm:p-8 rounded-xs"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute right-4 top-4 p-2 text-[#9B9081] hover:text-[#2A2317] transition-colors"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="relative aspect-square w-full overflow-hidden bg-[#171208]">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#A8842F]">
                      {selectedProduct.categoryLabel}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#2A2317] mt-1">
                      {selectedProduct.name}
                    </h2>
                    <p className="font-serif italic text-sm text-[#6A6052] mt-1">
                      {selectedProduct.tagline}
                    </p>

                    <div className="flex items-baseline gap-2 mt-4">
                      <span className="font-serif text-2xl text-[#2A2317]">
                        ₹{selectedProduct.price.toLocaleString('en-IN')}
                      </span>
                      {selectedProduct.originalPrice && (
                        <span className="text-xs text-[#9B9081] line-through">
                          ₹{selectedProduct.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-[#52493D] font-light leading-relaxed mt-4">
                      {selectedProduct.description}
                    </p>

                    {selectedProduct.contents && (
                      <div className="mt-5 border-t border-[rgba(42,35,23,0.1)] pt-4">
                        <span className="block font-mono text-[9px] uppercase tracking-wider text-[#A8842F] mb-2">
                          What is Included:
                        </span>
                        <ul className="space-y-1.5 text-xs text-[#2A2317]">
                          {selectedProduct.contents.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[#A8842F]">·</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-4 border-t border-[rgba(42,35,23,0.1)] pt-3 text-[11px] text-[#6A6052]">
                      <span className="font-medium text-[#2A2317]">Provenance: </span>
                      {selectedProduct.provenance}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[rgba(42,35,23,0.1)] flex gap-3">
                    <button
                      onClick={() => {
                        handleAddToCart(selectedProduct);
                        setSelectedProduct(null);
                      }}
                      className="flex-1 py-3 bg-[#A8842F] text-[#FCFAF5] text-xs uppercase tracking-[0.16em] font-medium hover:bg-[#8F6F24] transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      <span>Add to Bag</span>
                    </button>
                    <Link
                      href="/contact#consult"
                      className="px-4 py-3 border border-[#2A2317] text-[#2A2317] text-xs uppercase tracking-wider hover:bg-[#2A2317] hover:text-[#FCFAF5] transition-colors"
                    >
                      Ask Expert
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <FooterSection />
    </div>
  );
}
