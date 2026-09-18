import React from 'react';
import { Navbar } from '@/components/navbar';
import { FooterSection } from '@/components/sections/footer-section';
import { ConsultationSection } from '@/components/sections/consultation-section';
import { GoldSunMark } from '@/components/ui/gold-sun-mark';
import { MessageCircle, Mail, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact Us — OMG Tribe',
  description: 'Talk to our expert before you spend anything. In Hindi or English · No charge to ask.',
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Guidance',
      detail: '+91 99999 99999',
      subtext: 'Direct replies within 2 hours. In Hindi or English.',
      actionText: 'Message Now',
      href: 'https://wa.me/919999999999?text=' + encodeURIComponent('Pranam! I have a question regarding OMG Tribe.')
    },
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'guide@omgtribe.com',
      subtext: 'For bespoke rituals, bulk blessings, or order inquiries.',
      actionText: 'Send Email',
      href: 'mailto:guide@omgtribe.com'
    },
    {
      icon: MapPin,
      title: 'Sanctuary & Studio',
      detail: 'Tapovan, Rishikesh',
      subtext: 'Where all stones rest in rock salt and are blessed by our pandit.',
      actionText: 'Rishikesh, Uttarakhand',
      href: '#'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF5] text-[#2A2317]">
      <Navbar />

      <main className="flex-1">
        {/* Dark Hero Band */}
        <section className="bg-[#171208] text-[#FCFAF5] py-20 sm:py-24 text-center border-b border-[rgba(233,219,188,0.15)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="inline-flex items-center justify-center gap-2 mb-3">
              <GoldSunMark size={16} />
              <span className="eyebrow-label text-[#D3B36B]">Reach the Tribe</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#FCFAF5] tracking-tight mb-4">
              We are here to answer why.
            </h1>
            <p className="font-serif italic text-xl text-[#E9DBBC] max-w-xl mx-auto font-light">
              No sales talk. Ask what you have been wondering about your home, rituals, or practice.
            </p>
          </div>
        </section>

        {/* Contact Methods Cards */}
        <section className="bg-[#FCFAF5] py-20 sm:py-24 border-b border-[rgba(42,35,23,0.1)] w-full">
          <div className="w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, idx) => {
                const Icon = method.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 bg-[#FCFAF5] border border-[rgba(42,35,23,0.13)] flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-full bg-[#F5F0E5] border border-[rgba(168,132,47,0.3)] flex items-center justify-center mb-6">
                        <Icon className="w-5 h-5 text-[#A8842F]" />
                      </div>
                      <h3 className="font-serif text-2xl text-[#2A2317] mb-2">
                        {method.title}
                      </h3>
                      <p className="font-mono text-sm text-[#A8842F] mb-2">{method.detail}</p>
                      <p className="text-xs text-[#6A6052] leading-relaxed">
                        {method.subtext}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[rgba(42,35,23,0.08)]">
                      <a
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#2A2317] hover:text-[#A8842F] font-medium transition-colors"
                      >
                        <span>{method.actionText}</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Consultation Section */}
        <div id="consult">
          <ConsultationSection />
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
