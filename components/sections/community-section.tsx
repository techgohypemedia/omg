'use client';

import React, { useState } from 'react';
import { GoldSunMark } from '@/components/ui/gold-sun-mark';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, YouTubeIcon, WhatsAppIcon, FacebookIcon } from '@/components/ui/social-icons';
import { motion } from 'framer-motion';

export function CommunitySection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const socialLinks = [
    { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com/omgtribe' },
    { name: 'YouTube', icon: YouTubeIcon, href: 'https://youtube.com/@omgtribe' },
    { name: 'WhatsApp', icon: WhatsAppIcon, href: 'https://wa.me/919999999999' },
    { name: 'Facebook', icon: FacebookIcon, href: 'https://facebook.com/omgtribe' },
  ];

  return (
    <section className="bg-[#EDE5D5] py-24 sm:py-32 border-b border-[rgba(42,35,23,0.13)] w-full">
      <div className="w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Bordered Band with Gold Hairline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8 }}
          className="bg-[#FCFAF5] border border-[rgba(168,132,47,0.32)] p-9 sm:p-16 shadow-lg text-center relative overflow-hidden max-w-5xl mx-auto rounded-xs"
        >
          {/* Header */}
          <div className="inline-flex items-center justify-center gap-2 mb-3.5">
            <GoldSunMark size={16} />
            <span className="eyebrow-label text-[#A8842F] tracking-[0.26em]">Join our community</span>
            <GoldSunMark size={16} />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2A2317] tracking-tight mb-4">
            Join people who also want to know why.
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#6A6052] font-light leading-relaxed mb-9">
            One helpful message a week. How to use what you already have, one reason nobody told you, and first news of anything new. Nothing else.
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 mb-9">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-[rgba(168,132,47,0.4)] flex items-center justify-center text-[#6A6052] hover:text-[#A8842F] hover:border-[#A8842F] hover:bg-[#F5F0E5] transition-colors"
                  aria-label={social.name}
                >
                  <Icon size={19} />
                </motion.a>
              );
            })}
          </div>

          {/* Newsletter Form */}
          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#F5F0E5] border border-[rgba(168,132,47,0.3)] p-4 max-w-md mx-auto flex items-center justify-center gap-2 text-sm text-[#2A2317] rounded-xs"
            >
              <CheckCircle2 className="w-5 h-5 text-[#A8842F]" />
              <span>Welcome to the tribe. Your first reason arrives Sunday.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-5 py-4 bg-[#FCFAF5] border border-[rgba(42,35,23,0.2)] focus:border-[#A8842F] outline-none text-sm text-[#2A2317] placeholder:text-[#9B9081] rounded-xs"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#A8842F] hover:bg-[#D3B36B] text-[#FCFAF5] text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-md rounded-xs shrink-0"
              >
                <span>Join the tribe</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          )}

          {/* Small line */}
          <p className="mt-5 text-xs text-[#9B9081]">
            No spam. Leave whenever you like.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
