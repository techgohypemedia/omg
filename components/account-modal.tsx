'use client';

import React, { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import { X, ShieldCheck } from 'lucide-react';
import { GoldSunMark } from './ui/gold-sun-mark';

export function AccountModal() {
  const { isAccountOpen, setIsAccountOpen } = useCart();
  const [tab, setTab] = useState<'login' | 'track'>('login');
  const [phone, setPhone] = useState('');
  const [orderId, setOrderId] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

  if (!isAccountOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-[#171208]/70 backdrop-blur-xs transition-opacity"
        onClick={() => setIsAccountOpen(false)}
      />

      <div className="relative z-10 w-full max-w-md bg-[#FCFAF5] border border-[rgba(168,132,47,0.32)] shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={() => setIsAccountOpen(false)}
          className="absolute top-5 right-5 text-[#6A6052] hover:text-[#2A2317] p-1.5"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="flex justify-center mb-2">
            <GoldSunMark size={28} />
          </div>
          <h3 className="font-serif text-2xl text-[#2A2317]">Tribe Account</h3>
          <p className="text-xs text-[#6A6052] mt-1">
            Access your orders, practice rituals, and dispatch tracking.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[rgba(42,35,23,0.13)] mb-6">
          <button
            onClick={() => setTab('login')}
            className={`flex-1 py-2.5 text-xs uppercase tracking-widest text-center transition-colors font-medium ${
              tab === 'login'
                ? 'border-b-2 border-[#A8842F] text-[#2A2317]'
                : 'text-[#9B9081] hover:text-[#2A2317]'
            }`}
          >
            Sign In / Sign Up
          </button>
          <button
            onClick={() => setTab('track')}
            className={`flex-1 py-2.5 text-xs uppercase tracking-widest text-center transition-colors font-medium ${
              tab === 'track'
                ? 'border-b-2 border-[#A8842F] text-[#2A2317]'
                : 'text-[#9B9081] hover:text-[#2A2317]'
            }`}
          >
            Track Order
          </button>
        </div>

        {tab === 'login' ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStatusMsg('OTP sent to ' + phone + '. (Mock verification)');
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#6A6052] mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2.5 bg-transparent border border-[rgba(42,35,23,0.18)] focus:border-[#A8842F] outline-none text-sm text-[#2A2317]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#A8842F] hover:bg-[#D3B36B] text-[#FCFAF5] text-xs uppercase tracking-widest transition-colors font-medium"
            >
              Send OTP
            </button>
            {statusMsg && (
              <p className="text-xs text-[#A8842F] text-center mt-2">{statusMsg}</p>
            )}
            <div className="flex items-center gap-2 justify-center text-[11px] text-[#9B9081] pt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A8842F]" />
              <span>We never share your number or spam you.</span>
            </div>
          </form>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStatusMsg('Order #' + orderId + ' is currently blessed and preparing for dispatch from Rishikesh.');
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#6A6052] mb-1">
                Order ID / AWB Number
              </label>
              <input
                type="text"
                required
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="e.g. OMG-78921"
                className="w-full px-3.5 py-2.5 bg-transparent border border-[rgba(42,35,23,0.18)] focus:border-[#A8842F] outline-none text-sm text-[#2A2317]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#A8842F] hover:bg-[#D3B36B] text-[#FCFAF5] text-xs uppercase tracking-widest transition-colors font-medium"
            >
              Track Status
            </button>
            {statusMsg && (
              <div className="bg-[#F5F0E5] p-3 text-xs text-[#2A2317] border border-[rgba(42,35,23,0.08)] mt-2">
                {statusMsg}
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
