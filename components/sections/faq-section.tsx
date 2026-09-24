'use client';

import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

const faqs = [
  {
    number: '01',
    question: 'What are OMG Tribe Spiritual Boxes?',
    answer:
      'OMG Tribe Spiritual Boxes are thoughtfully curated collections created to support your spiritual journey. Each box brings together meaningful products and experiences designed around intention, mindfulness, energy, and personal growth.',
  },
  {
    number: '02',
    question: 'How do I choose the right Spiritual Box?',
    answer:
      'Choose a box based on what you currently want to invite into your life. Whether your intention is peace, abundance, protection, self-love, grounding, or spiritual growth, explore the descriptions of each box to find the one that resonates with you.',
  },
  {
    number: '03',
    question: 'Are the products inside the boxes ready to use?',
    answer:
      'Yes. Each box is carefully prepared so that you can begin your experience as soon as it arrives. Product-specific instructions or guidance are provided wherever required.',
  },
  {
    number: '04',
    question: 'How are OMG Tribe orders packed?',
    answer:
      'Every order is thoughtfully prepared and packed with care. Our boxes are blessed and packed by hand, keeping the experience intentional from the moment your order is prepared to the moment it reaches you.',
  },
  {
    number: '05',
    question: 'Do you offer delivery across India?',
    answer:
      'Yes. OMG Tribe offers delivery across India. Delivery timelines may vary depending on your location and the type of order placed.',
  },
  {
    number: '06',
    question: 'Can I gift an OMG Tribe Spiritual Box?',
    answer:
      'Absolutely. Spiritual Boxes can make thoughtful gifts for birthdays, celebrations, new beginnings, or simply as a meaningful gesture for someone special.',
  },
  {
    number: '07',
    question: 'What are OMG Tribe Programs?',
    answer:
      'OMG Tribe Programs are designed to take your spiritual exploration beyond physical products. They offer guided experiences and learning opportunities intended to help you develop a deeper connection with yourself and your personal journey.',
  },
  {
    number: '08',
    question: 'Can I contact OMG Tribe before placing an order?',
    answer:
      'Yes. If you need help understanding a product, Spiritual Box, or Program before making a decision, you can reach out to the OMG Tribe team through the Contact Us section.',
  },
  {
    number: '09',
    question: 'How can I track my order?',
    answer:
      'Once your order has been processed and shipped, you will receive the relevant shipping information so you can follow your delivery. If you need additional assistance, our team can help you through the Contact Us section.',
  },
  {
    number: '10',
    question: 'What makes OMG Tribe different?',
    answer:
      'OMG Tribe brings together spiritual products, intentional experiences, and thoughtfully designed Programs under one space. The focus is on creating meaningful experiences that feel personal, beautiful, and intentional.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-[#FCFAF5] text-[#171208]">

      {/* Subtle background details */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full border border-[#A8842F]/10" />
        <div className="absolute -right-28 top-32 h-[280px] w-[280px] rounded-full border border-[#A8842F]/10" />
        <div className="absolute left-[-180px] bottom-[-180px] h-[420px] w-[420px] rounded-full border border-[#A8842F]/10" />

        <div className="absolute right-[8%] top-[18%] h-1.5 w-1.5 rounded-full bg-[#A8842F]/50" />
        <div className="absolute right-[18%] top-[34%] h-1 w-1 rounded-full bg-[#A8842F]/40" />
        <div className="absolute left-[8%] bottom-[22%] h-1.5 w-1.5 rounded-full bg-[#A8842F]/40" />
      </div>

      <div className="relative mx-auto w-full max-w-[1500px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28 xl:px-20">

        {/* Header */}
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

          {/* Left */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#A8842F]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#A8842F]">
                Need to know
              </span>
            </div>

            <h2 className="max-w-xl font-serif text-5xl leading-[0.95] tracking-[-0.03em] text-[#171208] sm:text-6xl lg:text-7xl">
              Frequently
              <br />
              <span className="italic text-[#A8842F]">Asked.</span>
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-xl lg:ml-auto">
            <p className="text-sm leading-7 text-[#171208]/60 sm:text-base sm:leading-8">
              Everything you need to know about OMG Tribe, our Spiritual
              Boxes, Programs, orders, and your journey with us.
            </p>

            <div className="mt-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#171208]/40">
              <span>10 questions</span>
              <span className="h-px w-12 bg-[#A8842F]/40" />
              <span>10 answers</span>
            </div>
          </div>
        </div>

        {/* FAQ list */}
        <div className="border-t border-[#171208]/15">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.number}
                className={`group border-b border-[#171208]/15 transition-colors duration-500 ${
                  isOpen ? 'bg-[#F4EFE3]' : 'bg-transparent'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-5 px-2 py-6 text-left sm:gap-8 sm:px-5 sm:py-8 lg:px-8"
                >

                  {/* Number */}
                  <span
                    className={`w-8 shrink-0 font-mono text-[10px] tracking-[0.15em] transition-colors duration-300 ${
                      isOpen
                        ? 'text-[#A8842F]'
                        : 'text-[#171208]/30'
                    }`}
                  >
                    {faq.number}
                  </span>

                  {/* Question */}
                  <span
                    className={`flex-1 pr-4 font-serif text-xl leading-tight transition-colors duration-300 sm:text-2xl lg:text-[27px] ${
                      isOpen
                        ? 'text-[#171208]'
                        : 'text-[#171208]/75 group-hover:text-[#171208]'
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Icon */}
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-11 sm:w-11 ${
                      isOpen
                        ? 'border-[#A8842F] bg-[#A8842F] text-[#FCFAF5]'
                        : 'border-[#171208]/20 text-[#171208]/60 group-hover:border-[#A8842F] group-hover:text-[#A8842F]'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" strokeWidth={1.5} />
                    ) : (
                      <Plus className="h-4 w-4" strokeWidth={1.5} />
                    )}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-[32px_1fr] gap-5 px-2 pb-7 sm:grid-cols-[32px_1fr] sm:gap-8 sm:px-5 sm:pb-9 lg:px-8">

                      <div />

                      <div className="max-w-3xl border-l border-[#A8842F]/40 pl-5 sm:pl-7">
                        <p className="text-sm leading-7 text-[#171208]/60 sm:text-[15px] sm:leading-8">
                          {faq.answer}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col justify-between gap-6 border-t border-[#171208]/10 pt-8 sm:mt-16 sm:flex-row sm:items-center">

          <div>
            <p className="font-serif text-xl text-[#171208]">
              Still have questions?
            </p>

            <p className="mt-1 text-xs tracking-wide text-[#171208]/50">
              We are here to help you find what feels right.
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#A8842F] pb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-[#171208] transition-colors hover:text-[#A8842F]"
          >
            Contact Us

            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              strokeWidth={1.5}
            />
          </a>
        </div>

      </div>
    </section>
  );
}