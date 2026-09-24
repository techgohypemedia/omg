'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/cart-context';
import { ArrowRight, ArrowUpRight, Plus } from 'lucide-react';
import { GoldSunMark } from '@/components/ui/gold-sun-mark';
import { motion } from 'framer-motion';

const boxes = [
  {
    id: 'meditation-box',
    name: 'Meditation Box',
    devanagari: 'ध्यान',
    line: 'To sit down, and actually stay.',
    price: 4999,
    image: '/images/box-meditation-real.jpg',
    itemsSummary:
      '108 Lotus Mala · Copper Diya · Sandalwood Incense · Origin Cards',
  },
  {
    id: 'protection-box',
    name: 'Energy Protection Box',
    devanagari: 'रक्षा',
    line: 'To clear a room, and keep it clear.',
    price: 4499,
    image: '/images/box-protection-real.jpg',
    itemsSummary:
      'Raw Black Tourmaline · Rock Salt Pot · Camphor Burner · Purifying Card',
  },
  {
    id: 'wealth-box',
    name: 'Health & Wealth Box',
    devanagari: 'श्री',
    line: 'To keep your mind on what you are building.',
    price: 5499,
    image: '/images/box-wealth-real.jpg',
    itemsSummary:
      'Sacred Pyrite Cluster · Kuber Yantra Plate · Gomti Chakra Duo · Vastu Card',
  },
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
    summary:
      'Raw natural geode points to place beside your bed or meditation space.',
  },
  {
    id: 'crystal-hand-wand',
    name: 'Crystal Hand Wand',
    tagline: 'Made to sit in your hand',
    price: 999,
    originalPrice: 1399,
    image: '/images/single-wand.jpg',
    category: 'Energy Flow · Quartz',
    summary:
      'Faceted point sends and rounded sphere draws along the neck and arms.',
  },
  {
    id: 'crystal-pyramid',
    name: 'Crystal Pyramid',
    tagline: 'Four sides, one point',
    price: 1499,
    originalPrice: 2099,
    image: '/images/single-pyramid.jpg',
    category: 'Vastu Focus · Sacred Form',
    summary:
      'Gathers attention at the apex. Place in the north-east corner or desk.',
  },
  {
    id: 'moonstone',
    name: 'Moonstone',
    tagline: 'Chandrakanta — the moon stone',
    price: 899,
    originalPrice: 1249,
    image: '/images/single-moonstone.jpg',
    category: 'Lunar Calm · Gemstone',
    summary:
      'Ethereal blue adularescence light for restful sleep and mental stillness.',
  },
  {
    id: 'pyrite',
    name: 'Pyrite',
    tagline: "Fool's gold, and not foolish at all",
    price: 1099,
    originalPrice: 1549,
    image: '/images/single-pyrite.jpg',
    category: 'Navel Fire · Prosperity',
    summary:
      'Striking cubic crystals to anchor focus on your desk or cash locker.',
  },
  {
    id: 'crystal-wall-clock',
    name: 'Crystal Royal Wall Clock',
    tagline: 'A real stone slice as the dial',
    price: 4999,
    originalPrice: 6999,
    image: '/images/single-clock.jpg',
    category: 'Vastu Timepiece · Stone',
    summary:
      'Handcrafted stone face for north or east wall. Eye-level presence.',
  },
];

export function SpiritualBoxesSection() {
  const { addItem } = useCart();
  const [activeBox, setActiveBox] = useState<string | null>(null);
  const [activeProduct, setActiveProduct] = useState<string | null>(null);

  const addBox = (box: (typeof boxes)[number]) =>
    addItem({
      id: box.id,
      name: box.name,
      subtitle: `${box.devanagari} · ${box.line}`,
      price: box.price,
      image: box.image,
      category: 'Spiritual Box',
    });

  const addProduct = (product: (typeof singleProducts)[number]) =>
    addItem({
      id: product.id,
      name: product.name,
      subtitle: product.tagline,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      category: 'Single Piece',
    });

  return (
    <section id="boxes" className="relative w-full overflow-hidden bg-[#171208] text-[#FCFAF5]">
      <div className="relative mx-auto max-w-[1840px] px-5 py-24 sm:px-10 sm:py-32 lg:px-16 xl:px-20">
        <div className="pointer-events-none absolute right-[-180px] top-[-120px] h-[520px] w-[520px] rounded-full border border-[#A8842F]/10" />
        <div className="pointer-events-none absolute right-[-100px] top-[-40px] h-[360px] w-[360px] rounded-full border border-[#A8842F]/10" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <GoldSunMark size={15} />
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#D3B36B]">
                Our Spiritual Boxes
              </span>
              <span className="h-px w-12 bg-[#A8842F]/50" />
            </div>

            <h2 className="font-serif text-5xl font-light leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Three complete
              <span className="block italic text-[#D3B36B]">practices.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm font-light leading-7 text-[#E9DBBC]/65 sm:text-base">
              Everything you need for one daily ritual, in one box. Real
              stones, real seeds, real copper. And a card for every piece that
              tells you what it is and why it is there.
            </p>
          </div>

          <div className="hidden lg:block">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#A8842F]/30">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#A8842F]/20">
                <GoldSunMark size={22} />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {(() => {
            const box = boxes[0];
            const active = activeBox === box.id;

            return (
              <motion.article
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                onMouseEnter={() => setActiveBox(box.id)}
                onMouseLeave={() => setActiveBox(null)}
                className={`group relative min-h-[600px] overflow-hidden lg:col-span-7 ${
                  activeBox && !active ? 'opacity-50' : ''
                }`}
              >
                <Image
                  src={box.image}
                  alt={box.name}
                  fill
                  sizes="(max-width:1024px) 100vw,58vw"
                  className={`object-cover transition-transform duration-[1200ms] ${
                    active ? 'scale-105' : 'scale-100'
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#090703] via-[#171208]/20 to-[#171208]/5" />

                <div
                  className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(211,179,107,.25),transparent_45%)] transition-opacity duration-700 ${
                    active ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/20 backdrop-blur-sm">
                  <span className="font-mono text-[10px] tracking-[0.2em]">01</span>
                </div>

                <div className="absolute right-6 top-6 bg-[#FCFAF5] px-5 py-2.5">
                  <span className="font-devanagari text-sm text-[#A8842F]">
                    {box.devanagari}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10 lg:p-12">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[#D3B36B]">
                    Complete Ritual Box · Featured Practice
                  </span>

                  <h3 className="mt-3 max-w-xl font-serif text-4xl font-light sm:text-5xl lg:text-6xl">
                    {box.name}
                  </h3>

                  <p className="mt-3 font-serif text-lg italic text-[#E9DBBC]">
                    {box.line}
                  </p>

                  <div className="mt-6 max-w-xl border-t border-white/20 pt-5">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-white/50">
                      Inside
                    </span>
                    <p className="mt-2 text-xs leading-6 text-white/75">
                      {box.itemsSummary}
                    </p>
                  </div>

                  <div className="mt-7 flex items-center justify-between">
                    <span className="font-serif text-2xl">
                      ₹{box.price.toLocaleString('en-IN')}
                    </span>

                    <button
                      type="button"
                      onClick={() => addBox(box)}
                      className="group/btn flex items-center gap-3 bg-[#A8842F] px-6 py-3.5 text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-[#D3B36B]"
                    >
                      Shop box
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })()}

          <div className="flex flex-col gap-5 lg:col-span-5">
            {boxes.slice(1).map((box, index) => {
              const active = activeBox === box.id;

              return (
                <motion.article
                  key={box.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.12 }}
                  onMouseEnter={() => setActiveBox(box.id)}
                  onMouseLeave={() => setActiveBox(null)}
                  className={`group relative min-h-[290px] flex-1 overflow-hidden ${
                    activeBox && !active ? 'opacity-50' : ''
                  }`}
                >
                  <Image
                    src={box.image}
                    alt={box.name}
                    fill
                    sizes="(max-width:1024px) 100vw,42vw"
                    className={`object-cover transition-transform duration-[1000ms] ${
                      active ? 'scale-105' : 'scale-100'
                    }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#090703] via-transparent to-black/10" />

                  <div
                    className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(211,179,107,.25),transparent_50%)] transition-opacity duration-700 ${
                      active ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 backdrop-blur-sm">
                    <span className="font-mono text-[9px] tracking-widest">
                      0{index + 2}
                    </span>
                  </div>

                  <div className="absolute right-5 top-5 bg-[#FCFAF5] px-4 py-2">
                    <span className="font-devanagari text-xs text-[#A8842F]">
                      {box.devanagari}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                    <span className="text-[8px] uppercase tracking-[0.25em] text-[#D3B36B]">
                      Complete Ritual Box
                    </span>

                    <h3 className="mt-2 font-serif text-3xl font-light">
                      {box.name}
                    </h3>

                    <p className="mt-1 font-serif text-sm italic text-[#E9DBBC]/80">
                      {box.line}
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="font-serif text-xl">
                        ₹{box.price.toLocaleString('en-IN')}
                      </span>

                      <button
                        type="button"
                        onClick={() => addBox(box)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm transition-all hover:border-[#D3B36B] hover:bg-[#A8842F]"
                        aria-label={`Shop ${box.name}`}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/spiritual-boxes"
            className="group flex items-center gap-4 border border-[#A8842F]/50 px-8 py-4 text-[10px] uppercase tracking-[0.25em] text-[#E9DBBC] transition-all hover:border-[#D3B36B] hover:bg-[#A8842F]"
          >
            Explore all boxes
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div
        id="single-pieces"
        className="relative border-t border-[#A8842F]/15 bg-[#F5F0E5] text-[#2A2317]"
      >
        <div className="mx-auto max-w-[1840px] px-5 py-24 sm:px-10 sm:py-32 lg:px-16 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end"
          >
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <GoldSunMark size={14} />
                <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#A8842F]">
                  Also in this collection
                </span>
                <span className="h-px w-10 bg-[#A8842F]/35" />
              </div>

              <h3 className="font-serif text-4xl font-light leading-[1] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                Six single pieces.
                <span className="block italic text-[#A8842F]">
                  Each with its reason.
                </span>
              </h3>
            </div>

            <p className="max-w-md text-sm font-light leading-7 text-[#6A6052]">
              Not everyone wants a full box. Buy one thing, and know exactly
              what it is, where to keep it, and why it is used.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {singleProducts.map((prod, index) => {
              const active = activeProduct === prod.id;
              const dimmed = activeProduct !== null && !active;

              return (
                <motion.article
                  key={prod.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  onMouseEnter={() => setActiveProduct(prod.id)}
                  onMouseLeave={() => setActiveProduct(null)}
                  className={`group relative transition-all duration-500 ${
                    dimmed ? 'scale-[0.985] opacity-45' : 'scale-100 opacity-100'
                  }`}
                >
                  <div
                    className={`pointer-events-none absolute -inset-7 rounded-full bg-[#D3B36B]/25 blur-3xl transition-opacity duration-700 ${
                      active ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  <div className="relative">
                    <div
                      className={`relative overflow-hidden bg-[#DED5C5] transition-all duration-500 ${
                        active
                          ? 'shadow-[0_25px_60px_rgba(42,35,23,.18)]'
                          : 'shadow-[0_10px_30px_rgba(42,35,23,.06)]'
                      }`}
                    >
                      <div className="relative aspect-[4/4.2] overflow-hidden">
                        <Image
                          src={prod.image}
                          alt={prod.name}
                          fill
                          sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
                          className={`object-cover transition-transform duration-[900ms] ease-out ${
                            active ? 'scale-[1.08]' : 'scale-100'
                          }`}
                        />

                        <div
                          className={`absolute inset-0 transition-opacity duration-500 ${
                            active
                              ? 'bg-gradient-to-t from-[#171208]/55 via-transparent to-[#A8842F]/10'
                              : 'bg-gradient-to-t from-[#171208]/35 via-transparent to-transparent'
                          }`}
                        />

                        <div
                          className={`absolute left-0 right-0 top-0 h-[2px] bg-[#A8842F] transition-opacity duration-500 ${
                            active ? 'opacity-100' : 'opacity-30'
                          }`}
                        />

                        <div className="absolute left-5 top-5">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-500 ${
                              active
                                ? 'border-[#D3B36B] bg-[#A8842F]/80'
                                : 'border-white/50 bg-[#171208]/25'
                            }`}
                          >
                            <span className="font-mono text-[9px] tracking-[0.2em] text-white">
                              0{index + 1}
                            </span>
                          </div>
                        </div>

                        <div className="absolute right-5 top-5">
                          <span className="bg-[#FCFAF5]/95 px-3 py-2 text-[8px] font-medium uppercase tracking-[0.18em] text-[#A8842F] shadow-sm">
                            {prod.category}
                          </span>
                        </div>

                        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                          <div>
                            <span className="text-[8px] uppercase tracking-[0.28em] text-white/75">
                              Sacred Collection
                            </span>
                            <h4 className="mt-1 font-serif text-2xl text-white sm:text-3xl">
                              {prod.name}
                            </h4>
                          </div>

                          <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                              active
                                ? 'border-[#D3B36B] bg-[#A8842F] text-white'
                                : 'border-white/40 bg-black/10 text-white'
                            }`}
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative px-1 pt-6">
                      <div
                        className={`absolute left-0 top-6 h-10 bg-[#A8842F] transition-all duration-500 ${
                          active ? 'w-[3px]' : 'w-[1px]'
                        }`}
                      />

                      <div className="pl-5">
                        <p className="font-serif text-sm italic text-[#A8842F]">
                          {prod.tagline}
                        </p>

                        <p className="mt-3 max-w-md text-xs font-light leading-6 text-[#6A6052]">
                          {prod.summary}
                        </p>

                        <div className="mt-5 flex items-center justify-between border-t border-[#2A2317]/10 pt-4">
                          <div className="flex items-baseline gap-2">
                            <span className="font-serif text-xl text-[#2A2317]">
                              ₹{prod.price.toLocaleString('en-IN')}
                            </span>
                            <span className="text-[10px] text-[#9B9081] line-through">
                              ₹{prod.originalPrice.toLocaleString('en-IN')}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() => addProduct(prod)}
                            className={`group/add flex items-center gap-2 rounded-full px-4 py-2.5 text-[9px] font-medium uppercase tracking-[0.18em] transition-all duration-300 ${
                              active
                                ? 'bg-[#A8842F] text-white shadow-[0_8px_20px_rgba(168,132,47,.2)]'
                                : 'bg-[#221A0E] text-white hover:bg-[#A8842F]'
                            }`}
                          >
                            <Plus className="h-3.5 w-3.5 transition-transform group-hover/add:rotate-90" />
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <div className="flex items-center gap-5">
              <span className="h-px flex-1 bg-[#2A2317]/10" />

              <div className="flex items-center gap-3">
                <GoldSunMark size={13} />
                <span className="text-[8px] uppercase tracking-[0.3em] text-[#9B9081]">
                  Build your own ritual
                </span>
                <GoldSunMark size={13} />
              </div>

              <span className="h-px flex-1 bg-[#2A2317]/10" />
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="/spiritual-boxes#all"
                className="group flex items-center gap-3 bg-[#A8842F] px-8 py-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[#FCFAF5] shadow-[0_10px_25px_rgba(168,132,47,.16)] transition-all hover:bg-[#D3B36B] hover:shadow-[0_14px_30px_rgba(168,132,47,.22)]"
              >
                Shop all spiritual products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}