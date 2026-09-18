'use client';

import React from 'react';
import Link from 'next/link';
import { OMGLogo } from '@/components/ui/omg-logo';
import { ArrowUpRight } from 'lucide-react';
import { InstagramIcon, YouTubeIcon, WhatsAppIcon, FacebookIcon } from '@/components/ui/social-icons';

export function FooterSection() {
  const shopLinks = [
    { label: 'Spiritual Boxes', href: '/spiritual-boxes' },
    { label: 'Meditation Box', href: '/#boxes' },
    { label: 'Energy Protection Box', href: '/#boxes' },
    { label: 'Health & Wealth Box', href: '/#boxes' },
  ];

  const learnLinks = [
    { label: 'Our Philosophy', href: '/#philosophy' },
    { label: 'Why crystals', href: '/gyan' },
    { label: 'Why Shakti', href: '/om' },
    { label: 'Why rudraksha', href: '/marga' },
  ];

  const companyLinks = [
    { label: 'About Us', href: '/om' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Programs', href: '/programs' },
    { label: 'Book a Consultation', href: '/contact#consult' },
  ];

  const helpLinks = [
    { label: 'Track Your Order', href: '/contact#track' },
    { label: 'Delivery & Returns', href: '/contact#faq' },
    { label: 'WhatsApp Us', href: 'https://wa.me/919999999999' },
    { label: 'Privacy & Terms', href: '/contact#legal' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com/omgtribe' },
    { name: 'YouTube', icon: YouTubeIcon, href: 'https://youtube.com/@omgtribe' },
    { name: 'WhatsApp', icon: WhatsAppIcon, href: 'https://wa.me/919999999999' },
    { name: 'Facebook', icon: FacebookIcon, href: 'https://facebook.com/omgtribe' },
  ];

  return (
    <footer className="bg-[#171208] text-[#FCFAF5] pt-24 pb-14 border-t border-[rgba(233,219,188,0.17)] w-full">
      <div className="w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[rgba(233,219,188,0.12)]">
          {/* Left block: the OMG mark, then description */}
          <div className="lg:col-span-4 space-y-6">
            <OMGLogo variant="dark" width={145} height={48} href="/" />
            <p className="text-sm font-light leading-relaxed text-[#FCFAF5]/80 max-w-sm">
              Rudraksha, yantras, crystals and spiritual boxes. We name where each one comes from, bless it before packing, and tell you why it is used.
            </p>

            {/* Social icons — gold hairline circles */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-9 h-9 rounded-full border border-[rgba(168,132,47,0.32)] flex items-center justify-center text-[#E9DBBC] hover:text-[#D3B36B] hover:border-[#D3B36B] hover:bg-[#221A0E] transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}

              <Link
                href="/contact"
                className="text-xs uppercase tracking-widest text-[#D3B36B] hover:text-[#FCFAF5] ml-2 flex items-center gap-1 transition-colors"
              >
                <span>Contact Us</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Four link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Column 1: Shop */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#D3B36B] font-medium mb-4">
                Shop
              </h4>
              <ul className="space-y-2.5 text-xs text-[#FCFAF5]/75">
                {shopLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-[#D3B36B] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Learn */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#D3B36B] font-medium mb-4">
                Learn
              </h4>
              <ul className="space-y-2.5 text-xs text-[#FCFAF5]/75">
                {learnLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-[#D3B36B] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#D3B36B] font-medium mb-4">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs text-[#FCFAF5]/75">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-[#D3B36B] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Help */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#D3B36B] font-medium mb-4">
                Help
              </h4>
              <ul className="space-y-2.5 text-xs text-[#FCFAF5]/75">
                {helpLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-[#D3B36B] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Payment Row */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[rgba(233,219,188,0.08)]">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#E9DBBC]/80">
            <span className="text-[10px] text-[#9B9081]">Accepted:</span>
            <span>UPI</span>
            <span>·</span>
            <span>Cards</span>
            <span>·</span>
            <span>Net Banking</span>
            <span>·</span>
            <span>COD</span>
          </div>

          {/* Closing line: Thank you for choosing your energy. — Cormorant italic, gold */}
          <p className="font-serif italic text-lg sm:text-xl text-[#D3B36B] tracking-wide">
            Thank you for choosing your energy.
          </p>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9B9081]">
          <p>© 2026 OMG Tribe. All rights reserved.</p>
          <p className="max-w-xl text-[11px] text-center md:text-right text-[#9B9081]/80 leading-relaxed">
            Everything we sell and write about is traditional and cultural guidance. It is not medical, mental health, legal or money advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
