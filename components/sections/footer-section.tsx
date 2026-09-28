'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { OMGLogo } from '@/components/ui/omg-logo';
import {
  InstagramIcon,
  YouTubeIcon,
  WhatsAppIcon,
  FacebookIcon,
} from '@/components/ui/social-icons';

export function FooterSection() {
  const shopLinks = [
    { label: 'All Sacred Products', href: '/shop' },
    { label: 'Spiritual Boxes', href: '/shop?category=boxes' },
    { label: 'Raw Crystals & Wands', href: '/shop?category=crystals' },
    { label: 'Sacred Tools & Vastu', href: '/shop?category=tools' },
  ];

  const aboutLinks = [
    { label: 'Our Story & Philosophy', href: '/about' },
    { label: 'The Meaning of OMG', href: '/about#trinity' },
    { label: 'The Five Elements', href: '/about#panchtatva' },
    { label: 'Provenance & Reverence', href: '/about#provenance' },
  ];

  const helpLinks = [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Book a Consultation', href: '/contact#consult' },
    { label: 'Track Your Order', href: '/contact#track' },
    { label: 'Delivery & FAQs', href: '/contact#faq' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com/omgtribe' },
    { name: 'YouTube', icon: YouTubeIcon, href: 'https://youtube.com/@omgtribe' },
    { name: 'WhatsApp', icon: WhatsAppIcon, href: 'https://wa.me/919999999999' },
    { name: 'Facebook', icon: FacebookIcon, href: 'https://facebook.com/omgtribe' },
  ];

  return (
    <footer className="w-full bg-[#140F09] text-[#FCFAF5] border-t border-[#D3B36B]/20">
      <div className="mx-auto max-w-[1720px] 2xl:max-w-[1840px] px-6 sm:px-10 lg:px-16 xl:px-20 py-14 sm:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-[#E9DBBC]/10">
          
          {/* Brand Info (takes 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <OMGLogo variant="dark" width={140} height={46} href="/" />
            
            <p className="max-w-md text-xs sm:text-sm font-light leading-relaxed text-[#FCFAF5]/70 pt-2">
              Sacred instruments, Himalayan rudraksha, and energized crystals. We share where each piece originates, bless it by hand before dispatch, and explain why it is used.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-3">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E9DBBC]/15 bg-[#1C160C] text-[#E9DBBC]/70 transition-all duration-300 hover:border-[#D3B36B] hover:bg-[#D3B36B] hover:text-[#171208]"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Column: Shop */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D3B36B] mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5 text-xs">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#FCFAF5]/65 hover:text-[#D3B36B] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: About */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D3B36B] mb-4">
              About
            </h4>
            <ul className="space-y-2.5 text-xs">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#FCFAF5]/65 hover:text-[#D3B36B] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Help & Contact */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D3B36B] mb-4">
              Help
            </h4>
            <ul className="space-y-2.5 text-xs">
              {helpLinks.map((link) => {
                const isExternal = link.href.startsWith('http');
                return (
                  <li key={link.label}>
                    {isExternal ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#FCFAF5]/65 hover:text-[#D3B36B] transition-colors"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="h-3 w-3 opacity-60" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[#FCFAF5]/65 hover:text-[#D3B36B] transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Notes */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-light text-[#9B9081]">
          <p>© 2026 OMG Tribe · Blessed and packed by hand across India.</p>

          <div className="flex flex-wrap items-center gap-2 text-[9px] uppercase tracking-wider text-[#E9DBBC]/50">
            <span>UPI</span>
            <span>·</span>
            <span>Cards</span>
            <span>·</span>
            <span>Net Banking</span>
            <span>·</span>
            <span>COD Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
}