import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { OMGLogo } from '@/components/ui/omg-logo';
import {
  InstagramIcon,
  YouTubeIcon,
  WhatsAppIcon,
  FacebookIcon,
} from '@/components/ui/social-icons';

export function FooterSection() {
  const shopLinks = [
    ['Spiritual Boxes', '/spiritual-boxes'],
    ['Meditation Box', '/#boxes'],
    ['Energy Protection Box', '/#boxes'],
    ['Health & Wealth Box', '/#boxes'],
  ];

  const learnLinks = [
    ['Our Philosophy', '/#philosophy'],
    ['Why crystals', '/gyan'],
    ['Why Shakti', '/om'],
    ['Why rudraksha', '/marga'],
  ];

  const companyLinks = [
    ['About Us', '/om'],
    ['Contact Us', '/contact'],
    ['Programs', '/programs'],
    ['Book a Consultation', '/contact#consult'],
  ];

  const helpLinks = [
    ['Track Your Order', '/contact#track'],
    ['Delivery & Returns', '/contact#faq'],
    ['WhatsApp Us', 'https://wa.me/919999999999'],
    ['Privacy & Terms', '/contact#legal'],
  ];

  const socialLinks = [
    ['Instagram', InstagramIcon, 'https://instagram.com/omgtribe'],
    ['YouTube', YouTubeIcon, 'https://youtube.com/@omgtribe'],
    ['WhatsApp', WhatsAppIcon, 'https://wa.me/919999999999'],
    ['Facebook', FacebookIcon, 'https://facebook.com/omgtribe'],
  ];

  const navigationGroups = [
    ['Shop', shopLinks],
    ['Learn', learnLinks],
    ['Company', companyLinks],
    ['Help', helpLinks],
  ];

  return (
    <footer className="w-full bg-[#120E08] text-[#FCFAF5]">
      <section className="border-t border-[#D3B36B]/20">
        <div className="mx-auto max-w-[1840px] px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="relative min-h-[380px] overflow-hidden border-x border-[#E9DBBC]/[0.07] px-6 py-12 sm:min-h-[440px] sm:px-10 sm:py-16 lg:px-16 lg:py-24 xl:px-20">
            <div
              aria-hidden
              className="pointer-events-none absolute right-[-150px] top-[-170px] h-[520px] w-[520px] rounded-full border border-[#D3B36B]/[0.07]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute right-[-90px] top-[-110px] h-[390px] w-[390px] rounded-full border border-[#D3B36B]/[0.05]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-[-65px] right-[-10px] select-none font-serif text-[180px] font-medium leading-none tracking-[-0.10em] text-[#D3B36B]/[0.045] sm:text-[260px] lg:text-[350px] xl:text-[430px]"
            >
              OMG
            </div>

            <div className="relative z-10 flex h-full min-h-[400px] flex-col justify-between">
              <div className="flex items-start justify-between gap-8">
                <OMGLogo variant="dark" width={165} height={54} href="/" />
                <span className="hidden text-[9px] uppercase tracking-[0.3em] text-[#9B9081] sm:block">
                  Spiritual · Cultural · Traditional
                </span>
              </div>

              <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-7 xl:col-span-8">
                  <p className="max-w-2xl text-base font-light leading-8 text-[#FCFAF5]/65 sm:text-lg sm:leading-9">
                    Rudraksha, yantras, crystals and spiritual boxes. We name
                    where each one comes from, bless it before packing, and tell
                    you why it is used.
                  </p>

                  <div className="mt-9 flex flex-wrap items-center gap-3">
                    {socialLinks.map(([name, Icon, href]) => (
                      <a
                        key={name as string}
                        href={href as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={name as string}
                        className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#E9DBBC]/15 bg-[#171208] text-[#E9DBBC]/70 transition-all duration-300 hover:-translate-y-1 hover:border-[#D3B36B] hover:bg-[#D3B36B] hover:text-[#171208]"
                      >
                        <Icon
                          size={16}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 lg:flex lg:justify-end xl:col-span-4">
                  <Link
                    href="/contact"
                    className="group inline-flex min-w-[210px] items-center justify-between border border-[#D3B36B]/40 bg-[#D3B36B]/[0.04] px-5 py-4 text-[10px] uppercase tracking-[0.2em] text-[#E9DBBC] transition-all duration-300 hover:border-[#D3B36B] hover:bg-[#D3B36B] hover:text-[#171208]"
                  >
                    <span>Contact Us</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#E9DBBC]/10 bg-[#171208]">
        <div className="mx-auto max-w-[1840px] px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="grid grid-cols-2 gap-x-10 gap-y-14 py-12 sm:py-16 lg:grid-cols-4 lg:gap-12 lg:py-18">
            {navigationGroups.map(([title, links], index) => (
              <div key={title as string}>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[9px] text-[#A8842F]">
                    0{index + 1}
                  </span>
                  <span className="h-px w-7 bg-[#A8842F]/60" />
                  <h3 className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#D3B36B]">
                    {title as string}
                  </h3>
                </div>

                <ul className="mt-7 space-y-4">
                  {(links as string[][]).map(([label, href]) => {
                    const external = href.startsWith('http');

                    const className =
                      'group flex items-center justify-between border-b border-[#E9DBBC]/[0.06] pb-3 text-[13px] font-light text-[#FCFAF5]/60 transition-all duration-300 hover:border-[#D3B36B]/30 hover:text-[#E9DBBC]';

                    return (
                      <li key={label}>
                        {external ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={className}
                          >
                            <span>{label}</span>
                            <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-70" />
                          </a>
                        ) : (
                          <Link href={href} className={className}>
                            <span>{label}</span>
                            <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-70" />
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#21180C]">
        <div className="mx-auto max-w-[1840px] px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="flex flex-col gap-10 py-8 sm:py-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="mr-2 text-[9px] uppercase tracking-[0.22em] text-[#9B9081]">
                Accepted
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#E9DBBC]/65">
                UPI
              </span>
              <span className="text-[#A8842F]/50">·</span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#E9DBBC]/65">
                Cards
              </span>
              <span className="text-[#A8842F]/50">·</span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#E9DBBC]/65">
                Net Banking
              </span>
              <span className="text-[#A8842F]/50">·</span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#E9DBBC]/65">
                COD
              </span>
            </div>

            <p className="font-serif text-2xl italic tracking-wide text-[#D3B36B] sm:text-3xl">
              Thank you for choosing your energy.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#120E08]">
        <div className="mx-auto max-w-[1840px] px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="flex flex-col gap-5 border-t border-[#E9DBBC]/10 py-7 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-[9px] uppercase tracking-[0.15em] text-[#9B9081]">
              © 2026 OMG Tribe. All rights reserved.
            </p>

            <p className="max-w-3xl text-[10px] font-light leading-5 text-[#9B9081]/65 lg:text-right">
              Everything we sell and write about is traditional and cultural
              guidance. It is not medical, mental health, legal or money advice.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}