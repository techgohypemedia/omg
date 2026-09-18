'use client';

import React, { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import { X, CheckCircle, MessageCircle, Calendar } from 'lucide-react';
import { GoldSunMark } from './ui/gold-sun-mark';

export function ConsultationModal() {
  const { isConsultationOpen, setIsConsultationOpen } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    language: 'Hindi or English',
    topic: 'Which box or piece is right for me',
    note: ''
  });

  if (!isConsultationOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // auto close after delay
    }, 4000);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Pranam, I would like to consult an OMG Tribe expert regarding: ${formData.topic}. My name is ${formData.name || 'seeker'}.`
    );
    window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#171208]/75 backdrop-blur-xs transition-opacity"
        onClick={() => {
          setIsConsultationOpen(false);
          setSubmitted(false);
        }}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-lg bg-[#FCFAF5] border border-[rgba(168,132,47,0.32)] shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={() => {
            setIsConsultationOpen(false);
            setSubmitted(false);
          }}
          className="absolute top-5 right-5 text-[#6A6052] hover:text-[#2A2317] p-1.5 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#EDE5D5] flex items-center justify-center text-[#A8842F]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-[#2A2317] mb-2">
              We have received your request.
            </h3>
            <p className="text-sm text-[#6A6052] max-w-md mx-auto mb-6">
              Our expert will call or message you on WhatsApp within 2 hours. In Hindi or English, at no charge.
            </p>
            <button
              onClick={() => {
                setIsConsultationOpen(false);
                setSubmitted(false);
              }}
              className="text-xs uppercase tracking-widest px-6 py-3 bg-[#A8842F] text-[#FCFAF5] hover:bg-[#D3B36B] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <GoldSunMark size={18} />
                <span className="eyebrow-label text-[#A8842F]">Consultation</span>
              </div>
              <h2 className="font-serif text-3xl text-[#2A2317] leading-tight mb-2">
                Talk to our expert before you spend anything.
              </h2>
              <p className="text-sm text-[#6A6052] leading-relaxed">
                No sales talk. We have no interest in selling you what you do not need. Just ask what you have been wondering about.
              </p>
            </div>

            {/* What you can ask list */}
            <div className="bg-[#F5F0E5] p-4 mb-6 border border-[rgba(42,35,23,0.08)]">
              <span className="block text-[11px] uppercase tracking-widest text-[#A8842F] mb-2 font-medium">
                What you can ask:
              </span>
              <ul className="text-xs text-[#6A6052] space-y-1.5 list-disc list-inside">
                <li>Which box or piece is right for you now</li>
                <li>Where to keep each thing at home, and which way it should face</li>
                <li>Which rudraksha, stone or metal suits you — and which ones do not</li>
                <li>A daily practice short enough that you will keep it</li>
              </ul>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#6A6052] mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 bg-transparent border border-[rgba(42,35,23,0.18)] focus:border-[#A8842F] outline-none text-sm text-[#2A2317]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#6A6052] mb-1">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 bg-transparent border border-[rgba(42,35,23,0.18)] focus:border-[#A8842F] outline-none text-sm text-[#2A2317]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#6A6052] mb-1">
                    Language
                  </label>
                  <select
                    value={formData.language}
                    onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-transparent border border-[rgba(42,35,23,0.18)] focus:border-[#A8842F] outline-none text-sm text-[#2A2317]"
                  >
                    <option value="Hindi or English">Hindi or English</option>
                    <option value="Hindi">Hindi (हिंदी)</option>
                    <option value="English">English</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#6A6052] mb-1">
                  What is on your mind?
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-transparent border border-[rgba(42,35,23,0.18)] focus:border-[#A8842F] outline-none text-sm text-[#2A2317]"
                >
                  <option value="Which box or piece is right for me">Which box or piece is right for me</option>
                  <option value="Home placement, direction & Vastu">Home placement, direction & Vastu</option>
                  <option value="Rudraksha, metal or stone guidance">Rudraksha, metal or stone guidance</option>
                  <option value="Designing a 5-minute daily practice">Designing a 5-minute daily practice</option>
                </select>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-[#A8842F] hover:bg-[#D3B36B] text-[#FCFAF5] text-xs uppercase tracking-widest transition-colors font-medium"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-2 py-3 px-4 border border-[rgba(168,132,47,0.4)] text-[#2A2317] hover:bg-[#F5F0E5] text-xs uppercase tracking-widest transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#A8842F]" />
                  <span>Ask on WhatsApp</span>
                </button>
              </div>
            </form>

            <p className="mt-4 text-center text-[11px] text-[#9B9081]">
              In Hindi or English · No charge to ask
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
