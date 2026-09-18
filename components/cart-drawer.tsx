'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/lib/cart-context';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalCount } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#171208]/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
        onClick={() => setIsOpen(false)}
      />

      {/* Slide-out Panel */}
      <div className="relative z-10 flex h-full w-full max-w-md flex-col bg-[#FCFAF5] shadow-2xl transition-transform animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[rgba(42,35,23,0.13)] px-6 py-5">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#A8842F]" />
            <h3 className="font-serif text-2xl tracking-tight text-[#2A2317]">
              Your Bag ({totalCount})
            </h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 text-[#6A6052] hover:text-[#2A2317] transition-colors rounded-full hover:bg-[#F5F0E5]"
            aria-label="Close bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Delivery Banner */}
        <div className="bg-[#F5F0E5] px-6 py-2.5 text-xs text-[#6A6052] flex items-center justify-between border-b border-[rgba(42,35,23,0.08)]">
          <span className="font-medium text-[#A8842F]">Free delivery across India</span>
          <span>Blessed & packed by hand</span>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[rgba(42,35,23,0.08)]">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <ShoppingBag className="w-12 h-12 text-[#9B9081]/50 mb-3" />
              <p className="font-serif text-xl text-[#2A2317] mb-1">Your bag is empty</p>
              <p className="text-xs text-[#6A6052] max-w-xs mb-6">
                Explore our boxes and single pieces crafted for daily practice.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs uppercase tracking-widest px-5 py-2.5 bg-[#A8842F] text-[#FCFAF5] hover:bg-[#D3B36B] transition-colors rounded-xs"
              >
                Explore Spiritual Boxes
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="py-4 flex gap-4 items-start">
                <div className="w-20 h-20 bg-[#221A0E] rounded-xs overflow-hidden flex-shrink-0 relative border border-[rgba(168,132,47,0.2)] flex items-center justify-center">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <span className="text-xs text-[#A8842F]">OMG</span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h4 className="font-serif text-lg text-[#2A2317] leading-snug">
                      {item.name}
                    </h4>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-[#9B9081] hover:text-[#2A2317] text-xs p-1"
                      aria-label="Remove item"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {item.subtitle && (
                    <p className="text-xs text-[#6A6052] mt-0.5 line-clamp-1">
                      {item.subtitle}
                    </p>
                  )}
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-[rgba(42,35,23,0.15)] rounded-xs bg-[#FCFAF5]">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 text-[#6A6052] hover:text-[#2A2317] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-medium text-[#2A2317] min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 text-[#6A6052] hover:text-[#2A2317] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="font-serif text-lg text-[#2A2317]">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[rgba(42,35,23,0.13)] bg-[#F5F0E5] px-6 py-5">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs uppercase tracking-widest text-[#6A6052]">Subtotal</span>
              <span className="font-serif text-2xl text-[#2A2317]">
                ₹{subtotal.toLocaleString('en-IN')}
              </span>
            </div>
            <p className="text-[11px] text-[#9B9081] mb-4">
              All taxes included · Includes origin cards & practice guides
            </p>
            <button
              onClick={() => {
                alert(`Proceeding to checkout with ₹${subtotal.toLocaleString('en-IN')} (UPI, Cards, Net Banking, COD accepted)`);
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#A8842F] hover:bg-[#D3B36B] text-[#FCFAF5] font-sans text-xs uppercase tracking-widest transition-all rounded-xs shadow-xs"
            >
              <span>Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="mt-3 flex items-center justify-center gap-3 text-[10px] text-[#6A6052] uppercase tracking-wider">
              <span>UPI</span>
              <span>·</span>
              <span>Cards</span>
              <span>·</span>
              <span>Net Banking</span>
              <span>·</span>
              <span>COD</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
