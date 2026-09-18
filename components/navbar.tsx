'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { OMGLogo } from '@/components/ui/omg-logo';
import { useCart } from '@/lib/cart-context';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { GoldSunMark } from '@/components/ui/gold-sun-mark';
import { motion } from 'framer-motion';

export function Navbar() {
  const pathname = usePathname();
  const { totalCount, setIsOpen, setIsSearchOpen, setIsAccountOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Spiritual Boxes', href: '/spiritual-boxes' },
    { label: 'Programs', href: '/programs' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="w-full bg-[#221A0E] border-b border-[rgba(168,132,47,0.25)] text-[#E9DBBC] text-center py-2.5 px-4 transition-colors relative z-50">
        <div className="w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto flex items-center justify-center gap-2 text-[11px] sm:text-xs tracking-[0.18em] font-light uppercase">
          <GoldSunMark size={12} className="opacity-70 hidden sm:inline-block" />
          <span>Free delivery across India</span>
          <span className="text-[#A8842F] mx-1.5">·</span>
          <span>Blessed and packed by hand</span>
          <GoldSunMark size={12} className="opacity-70 hidden sm:inline-block" />
        </div>
      </div>

      {/* Main Header — Luxury Dark Night Palette blending with Hero */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#171208]/98 backdrop-blur-md shadow-lg border-b border-[rgba(168,132,47,0.22)]'
            : 'bg-[#171208] border-b border-[rgba(233,219,188,0.14)]'
        }`}
      >
        <div className="w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="relative h-22 flex items-center justify-between">
            {/* Left: Navigation Links (Desktop) */}
            <nav className="hidden md:flex items-center space-x-7 lg:space-x-9 z-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-sans text-[11px] uppercase tracking-[0.24em] transition-all py-1.5 relative group ${
                      isActive
                        ? 'text-[#D3B36B] font-medium'
                        : 'text-[#E9DBBC]/80 hover:text-[#FCFAF5]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {/* Active / Hover Indicator */}
                    <span
                      className={`absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#A8842F] transition-all duration-300 ${
                        isActive
                          ? 'opacity-100 scale-x-100'
                          : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#E9DBBC] hover:text-[#D3B36B] z-10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Center: OMG Mark Logo — Mathematically centered via absolute positioning */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
              <OMGLogo
                variant="dark"
                width={150}
                height={50}
                href="/"
                className="hover:scale-105 transition-transform duration-300 drop-shadow-[0_2px_12px_rgba(168,132,47,0.15)]"
              />
            </div>

            {/* Right: Tools (Search · Account · Bag) */}
            <div className="flex items-center space-x-5 sm:space-x-7 z-10">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#E9DBBC]/80 hover:text-[#D3B36B] transition-colors py-1 group"
                aria-label="Search"
              >
                <Search className="w-4 h-4 text-[#D3B36B] group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline font-sans">Search</span>
              </button>

              <button
                onClick={() => setIsAccountOpen(true)}
                className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#E9DBBC]/80 hover:text-[#D3B36B] transition-colors py-1 group"
                aria-label="Account"
              >
                <User className="w-4 h-4 text-[#D3B36B] group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline font-sans">Account</span>
              </button>

              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#E9DBBC] hover:text-[#D3B36B] transition-colors py-1 group relative"
                aria-label="Shopping Bag"
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4 text-[#D3B36B] group-hover:scale-110 transition-transform" />
                  {totalCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                      className="absolute -top-1.5 -right-2 bg-[#A8842F] text-[#FCFAF5] text-[9px] font-mono font-medium rounded-full w-4 h-4 flex items-center justify-center shadow-xs"
                    >
                      {totalCount}
                    </motion.span>
                  )}
                </div>
                <span className="hidden sm:inline font-sans">Bag</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#171208] border-t border-[rgba(233,219,188,0.15)] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-sans text-xs uppercase tracking-[0.22em] py-2.5 text-[#E9DBBC] hover:text-[#D3B36B] border-b border-[rgba(233,219,188,0.08)]"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E9DBBC]/80 py-1"
              >
                <Search className="w-4 h-4 text-[#D3B36B]" />
                <span>Search</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAccountOpen(true);
                }}
                className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E9DBBC]/80 py-1"
              >
                <User className="w-4 h-4 text-[#D3B36B]" />
                <span>Account & Orders</span>
              </button>
            </div>
          </div>
        )}
      </motion.header>
    </>
  );
}
