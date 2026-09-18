'use client';

import React from 'react';
import { useCart } from '@/lib/cart-context';
import { Calendar, MessageCircle, CheckCircle2 } from 'lucide-react';
import { GoldSunMark } from '@/components/ui/gold-sun-mark';
import { motion } from 'framer-motion';

export function ConsultationSection() {
  const { setIsConsultationOpen } = useCart();

  const questions = [
    'Which box or piece is right for you now',
    'Where to keep each thing at home, and which way it should face',
    'Which rudraksha, stone or metal suits you — and which ones do not',
    'A daily practice short enough that you will keep it'
  ];

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/919999999999?text=' +
        encodeURIComponent('Pranam! I would like to consult an OMG Tribe expert about my daily practice.'),
      '_blank'
    );
  };

  return (
    <section className="bg-[#F5F0E5] py-24 sm:py-32 border-b border-[rgba(42,35,23,0.13)] w-full">
      <div className="w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Bordered panel with gold hairline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-[#FCFAF5] border border-[rgba(168,132,47,0.32)] p-9 sm:p-14 lg:p-16 shadow-xl relative overflow-hidden rounded-xs"
        >
          {/* Subtle gold watermark in corner */}
          <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 opacity-10 pointer-events-none">
            <GoldSunMark size={200} />
          </div>

          <div className="relative z-10 max-w-4xl">
            {/* Label */}
            <div className="flex items-center gap-2 mb-3.5">
              <GoldSunMark size={16} />
              <span className="eyebrow-label text-[#A8842F] tracking-[0.26em]">Consultation</span>
            </div>

            {/* H2 */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2A2317] tracking-tight mb-4">
              Talk to our expert before you spend anything.
            </h2>

            {/* Copy */}
            <p className="text-base sm:text-lg text-[#6A6052] font-light leading-relaxed mb-9 max-w-2xl">
              No sales talk. We have no interest in selling you what you do not need. Just ask what you have been wondering about.
            </p>

            {/* What you can ask */}
            <div className="mb-10">
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#A8842F] font-medium block mb-4">
                What you can ask:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-[#2A2317]">
                {questions.map((q, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#A8842F] flex-shrink-0 mt-1" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-5 pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => setIsConsultationOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-[#A8842F] hover:bg-[#D3B36B] text-[#FCFAF5] text-xs uppercase tracking-[0.2em] transition-all font-medium rounded-xs shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a consultation</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 px-9 py-4 border border-[rgba(168,132,47,0.4)] text-[#2A2317] hover:bg-[#F5F0E5] text-xs uppercase tracking-[0.2em] transition-all font-medium rounded-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#A8842F]" />
                <span>Ask on WhatsApp</span>
              </motion.button>
            </div>

            {/* Small line */}
            <p className="text-xs sm:text-sm text-[#9B9081]">
              In Hindi or English · No charge to ask
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
