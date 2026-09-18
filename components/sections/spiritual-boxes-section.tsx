'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/cart-context';
import { ArrowRight, Plus } from 'lucide-react';
import { GoldSunMark } from '@/components/ui/gold-sun-mark';
import { motion } from 'framer-motion';

export function SpiritualBoxesSection() {
  const { addItem } = useCart();

  const boxes = [
    {
      id: 'meditation-box',
      name: 'Meditation Box',
      devanagari: 'ध्यान',
      line: 'To sit down, and actually stay.',
      price: 4999,
      image: '/images/box-meditation-real.jpg',
      itemsSummary: '108 Lotus Mala · Copper Diya · Sandalwood Incense · Origin Cards'
    },
    {
      id: 'protection-box',
      name: 'Energy Protection Box',
      devanagari: 'रक्षा',
      line: 'To clear a room, and keep it clear.',
      price: 4499,
      image: '/images/box-protection-real.jpg',
      itemsSummary: 'Raw Black Tourmaline · Rock Salt Pot · Camphor Burner · Purifying Card'
    },
    {
      id: 'wealth-box',
      name: 'Health & Wealth Box',
      devanagari: 'श्री',
      line: 'To keep your mind on what you are building.',
      price: 5499,
      image: '/images/box-wealth-real.jpg',
      itemsSummary: 'Sacred Pyrite Cluster · Kuber Yantra Plate · Gomti Chakra Duo · Vastu Card'
    }
  ];

  const singleProducts = [
    {
      id: 'raw-amethyst',
      name: 'Raw Amethyst Crystal',
      tagline: 'Uncut, exactly as it grew',
      price: 1299,
      originalPrice: 1799,
      image: '/images/single-amethyst.jpg',
      category: 'Crown Chakra · Raw Crystal',
      summary: 'Raw natural geode points to place beside your bed or meditation space.'
    },
    {
      id: 'crystal-hand-wand',
      name: 'Crystal Hand Wand',
      tagline: 'Made to sit in your hand',
      price: 999,
      originalPrice: 1399,
      image: '/images/single-wand.jpg',
      category: 'Energy Flow · Quartz',
      summary: 'Faceted point sends and rounded sphere draws along the neck and arms.'
    },
    {
      id: 'crystal-pyramid',
      name: 'Crystal Pyramid',
      tagline: 'Four sides, one point',
      price: 1499,
      originalPrice: 2099,
      image: '/images/single-pyramid.jpg',
      category: 'Vastu Focus · Sacred Form',
      summary: 'Gathers attention at the apex. Place in the north-east corner or desk.'
    },
    {
      id: 'moonstone',
      name: 'Moonstone',
      tagline: 'Chandrakanta — the moon stone',
      price: 899,
      originalPrice: 1249,
      image: '/images/single-moonstone.jpg',
      category: 'Lunar Calm · Gemstone',
      summary: 'Ethereal blue adularescence light for restful sleep and mental stillness.'
    },
    {
      id: 'pyrite',
      name: 'Pyrite',
      tagline: "Fool's gold, and not foolish at all",
      price: 1099,
      originalPrice: 1549,
      image: '/images/single-pyrite.jpg',
      category: 'Navel Fire · Prosperity',
      summary: 'Striking cubic crystals to anchor focus on your desk or cash locker.'
    },
    {
      id: 'crystal-wall-clock',
      name: 'Crystal Royal Wall Clock',
      tagline: 'A real stone slice as the dial',
      price: 4999,
      originalPrice: 6999,
      image: '/images/single-clock.jpg',
      category: 'Vastu Timepiece · Stone',
      summary: 'Handcrafted stone face for north or east wall. Eye-level presence.'
    }
  ];

  return (
    <section id="boxes" className="bg-[#FCFAF5] py-24 sm:py-32 border-b border-[rgba(42,35,23,0.13)] w-full">
      <div className="w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section Header: Our Spiritual Boxes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-2 mb-3">
            <GoldSunMark size={16} />
            <span className="eyebrow-label text-[#A8842F]">Our Spiritual Boxes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2A2317] tracking-tight mb-4">
            Three complete practices.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#6A6052] font-light leading-relaxed">
            Everything you need for one daily ritual, in one box. Real stones, real seeds, real copper. And a card for every piece that tells you what it is and why it is there.
          </p>
        </motion.div>

        {/* The Three Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {boxes.map((box, idx) => (
            <motion.div
              key={box.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group flex flex-col bg-[#FCFAF5] border border-[rgba(42,35,23,0.13)] hover:border-[#A8842F]/80 hover:shadow-xl transition-all duration-300 rounded-xs"
            >
              {/* Box Photo: High-end Studio Product Photography */}
              <div className="relative aspect-4/3 bg-[#171208] overflow-hidden border-b border-[rgba(42,35,23,0.1)]">
                <Image
                  src={box.image}
                  alt={box.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle dark vignette overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171208]/60 via-transparent to-black/20 pointer-events-none" />

                {/* Refined Devanagari Badge (Top Right) */}
                <div className="absolute top-3.5 right-3.5 bg-[#FCFAF5]/90 backdrop-blur-xs border border-[rgba(168,132,47,0.3)] px-2.5 py-1 rounded-xs shadow-xs">
                  <span className="font-devanagari text-xs font-semibold text-[#A8842F]">
                    {box.devanagari}
                  </span>
                </div>

                {/* Ritual Set Pill (Bottom Left) */}
                <div className="absolute bottom-3 left-3.5">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#FCFAF5]/90 drop-shadow-xs">
                    Complete Ritual Box
                  </span>
                </div>
              </div>

              {/* Card Details: Streamlined & Compact */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#2A2317] group-hover:text-[#A8842F] transition-colors mb-1">
                    {box.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6A6052] font-light leading-relaxed mb-3">
                    {box.line}
                  </p>

                  <div className="mb-5 pt-3 border-t border-[rgba(42,35,23,0.08)]">
                    <span className="text-[10px] uppercase tracking-widest text-[#9B9081] block mb-1">
                      Included inside:
                    </span>
                    <p className="text-xs text-[#2A2317]/85 font-medium leading-relaxed">
                      {box.itemsSummary}
                    </p>
                  </div>
                </div>

                <div className="pt-3.5 border-t border-[rgba(42,35,23,0.08)] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#9B9081] block">Price</span>
                    <span className="font-serif text-xl sm:text-2xl text-[#2A2317]">
                      ₹{box.price.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      addItem({
                        id: box.id,
                        name: box.name,
                        subtitle: `${box.devanagari} · ${box.line}`,
                        price: box.price,
                        image: box.image,
                        category: 'Spiritual Box'
                      })
                    }
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#A8842F] hover:bg-[#D3B36B] text-[#FCFAF5] text-xs uppercase tracking-widest font-medium transition-colors rounded-xs shadow-xs"
                  >
                    <span>Shop box</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button below boxes: Explore all boxes */}
        <div className="text-center mb-20">
          <Link
            href="/spiritual-boxes"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#A8842F] text-[#2A2317] hover:bg-[#F5F0E5] hover:text-[#A8842F] text-xs uppercase tracking-[0.18em] transition-all font-medium rounded-xs"
          >
            <span>Explore all boxes</span>
            <ArrowRight className="w-4 h-4 text-[#A8842F]" />
          </Link>
        </div>

        {/* Hairline separator */}
        <hr id="single-pieces" className="border-t border-[rgba(42,35,23,0.13)] mb-20" />

        {/* Section 6: SIX SINGLE PRODUCTS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14"
        >
          <div className="flex items-center gap-2 mb-3">
            <GoldSunMark size={16} />
            <span className="eyebrow-label text-[#A8842F]">Also in this collection</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2A2317] tracking-tight mb-3">
            Six single pieces, each with its reason.
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-[#6A6052] font-light leading-relaxed">
            Not everyone wants a full box. Buy one thing, and know exactly what it is, where to keep it, and why it is used.
          </p>
        </motion.div>

        {/* Six Single Products Grid (3 columns on lg, 2 on sm) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {singleProducts.map((prod, idx) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group flex flex-col bg-[#FCFAF5] border border-[rgba(42,35,23,0.13)] hover:border-[#A8842F]/70 hover:shadow-lg transition-all duration-300 rounded-xs overflow-hidden"
            >
              {/* Product Photo Tile */}
              <div className="relative aspect-4/3 sm:aspect-square bg-[#171208] overflow-hidden border-b border-[rgba(42,35,23,0.1)]">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171208]/60 via-transparent to-black/10 pointer-events-none" />

                {/* Refined Category Pill */}
                <div className="absolute top-3 right-3 bg-[#FCFAF5]/90 backdrop-blur-xs border border-[rgba(168,132,47,0.3)] px-2.5 py-0.5 rounded-xs shadow-xs">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#A8842F]">
                    {prod.category}
                  </span>
                </div>
              </div>

              {/* Product Info: Compact & Refined */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl text-[#2A2317] group-hover:text-[#A8842F] transition-colors leading-snug mb-1">
                    {prod.name}
                  </h4>
                  <p className="text-xs italic text-[#A8842F] font-serif mb-2">
                    {prod.tagline}
                  </p>
                  <p className="text-xs text-[#6A6052] font-light leading-relaxed mb-4">
                    {prod.summary}
                  </p>
                </div>

                {/* Price & Add to Bag */}
                <div className="pt-3.5 border-t border-[rgba(42,35,23,0.08)] flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-xl sm:text-2xl text-[#2A2317]">
                        ₹{prod.price.toLocaleString('en-IN')}
                      </span>
                      {prod.originalPrice && (
                        <span className="text-xs text-[#9B9081] line-through">
                          ₹{prod.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      addItem({
                        id: prod.id,
                        name: prod.name,
                        subtitle: prod.tagline,
                        price: prod.price,
                        originalPrice: prod.originalPrice,
                        image: prod.image,
                        category: 'Single Piece'
                      })
                    }
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#221A0E] hover:bg-[#A8842F] text-[#FCFAF5] text-xs uppercase tracking-widest font-medium transition-colors rounded-xs shadow-xs"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button below products: Shop all spiritual products */}
        <div className="text-center">
          <Link
            href="/spiritual-boxes#all"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#A8842F] hover:bg-[#D3B36B] text-[#FCFAF5] text-xs uppercase tracking-[0.18em] transition-colors font-medium rounded-xs shadow-xs"
          >
            <span>Shop all spiritual products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
