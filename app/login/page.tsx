'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { FooterSection } from '@/components/sections/footer-section';
import { GoldSunMark } from '@/components/ui/gold-sun-mark';
import {
  User,
  Phone,
  Mail,
  Lock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Package,
  Sparkles,
  Eye,
  EyeOff,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function LoginPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialMode = searchParams.get('mode') === 'signup' ? 'signup' : 'login';

  const [mode, setMode] = useState<'login' | 'signup' | 'track'>(initialMode);
  const [authMethod, setAuthMethod] = useState<'phone' | 'email'>('phone');
  const [showPassword, setShowPassword] = useState(false);

  // Form states
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [orderId, setOrderId] = useState('');

  // UI feedback
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    const m = searchParams.get('mode');
    if (m === 'signup') setMode('signup');
    else if (m === 'track') setMode('track');
  }, [searchParams]);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      setMessage({ type: 'error', text: 'Please enter a valid 10-digit mobile number.' });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOtpSent(true);
      setMessage({ type: 'success', text: `OTP sent successfully to +91 ${phone.replace(/^(\+91|0)/, '')}. (Use 1080 to test)` });
    }, 800);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMessage({ type: 'success', text: 'Namaste! You are signed in. Redirecting to Shop...' });
      setTimeout(() => router.push('/shop'), 1200);
    }, 900);
  };

  const handleEmailAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (mode === 'signup') {
        setMessage({ type: 'success', text: `Welcome to the Tribe, ${fullName || 'Seeker'}! Account created successfully.` });
      } else {
        setMessage({ type: 'success', text: 'Namaste! Signed in successfully. Redirecting...' });
      }
      setTimeout(() => router.push('/shop'), 1200);
    }, 900);
  };

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMessage({
        type: 'success',
        text: `Order #${orderId.toUpperCase()} has been blessed by our Pandit in Haridwar and is currently in transit via BlueDart Air. Estimated delivery in 2 days.`,
      });
    }, 700);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF5] text-[#2A2317]">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-12 sm:py-20 px-4 sm:px-6">
        <div className="w-full max-w-5xl bg-white border border-zinc-200 shadow-2xl rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
          
          {/* Left Side: Brand Visual & Philosophy Sanctuary */}
          <div className="lg:col-span-5 bg-[#171208] text-[#FCFAF5] p-8 sm:p-12 relative flex flex-col justify-between overflow-hidden">
            {/* Background Image with Dark Vignette */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/hero-sanctuary-golden.jpg"
                alt="OMG Tribe Sanctuary"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center opacity-40 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171208] via-[#171208]/70 to-[#171208]/50" />
            </div>

            {/* Top Brand Mark */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <GoldSunMark size={16} />
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D3B36B]">
                  OMG Sanctuary
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FCFAF5] leading-tight">
                Your practice begins with presence.
              </h2>
              <p className="mt-3 text-xs sm:text-sm font-light text-[#E9DBBC]/80 leading-relaxed">
                Access your dispatch tracking, personalized ritual guidance, and direct consultation with Vedic pandits.
              </p>
            </div>

            {/* Sacred Vows Box */}
            <div className="relative z-10 mt-10 pt-6 border-t border-[rgba(233,219,188,0.15)] space-y-3">
              <div className="flex items-center gap-3 text-xs text-[#E9DBBC]/90">
                <Sparkles className="h-4 w-4 text-[#D3B36B] shrink-0" />
                <span>Every tool energized before dispatch</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#E9DBBC]/90">
                <ShieldCheck className="h-4 w-4 text-[#D3B36B] shrink-0" />
                <span>Zero spam, zero fear-based astrology</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#E9DBBC]/90">
                <CheckCircle2 className="h-4 w-4 text-[#D3B36B] shrink-0" />
                <span>100% natural earth crystals & pure copper</span>
              </div>
            </div>

            {/* Bottom Quote */}
            <div className="relative z-10 pt-8 mt-6 border-t border-[rgba(233,219,188,0.1)]">
              <p className="font-serif italic text-xs text-[#D3B36B]/90">
                &ldquo;To sit down every morning, and actually stay.&rdquo;
              </p>
              <span className="text-[10px] text-[#9B9081] block mt-1 font-mono uppercase tracking-wider">
                Om · Mārga · Gyān
              </span>
            </div>
          </div>

          {/* Right Side: Authentication Panel */}
          <div className="lg:col-span-7 p-6 sm:p-12 flex flex-col justify-between bg-white">
            <div>
              {/* Top Navigation Tabs: Sign In / Sign Up / Track Order */}
              <div className="flex border-b border-zinc-200 mb-8">
                <button
                  type="button"
                  onClick={() => {
                    setMode('login');
                    setMessage(null);
                    setOtpSent(false);
                  }}
                  className={`pb-3.5 text-xs uppercase tracking-[0.18em] font-medium transition-colors relative mr-6 sm:mr-8 ${
                    mode === 'login' ? 'text-zinc-900 font-semibold' : 'text-zinc-400 hover:text-zinc-700'
                  }`}
                >
                  <span>Sign In</span>
                  {mode === 'login' && (
                    <motion.div
                      layoutId="auth-tab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-900"
                    />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMode('signup');
                    setMessage(null);
                    setOtpSent(false);
                  }}
                  className={`pb-3.5 text-xs uppercase tracking-[0.18em] font-medium transition-colors relative mr-6 sm:mr-8 ${
                    mode === 'signup' ? 'text-zinc-900 font-semibold' : 'text-zinc-400 hover:text-zinc-700'
                  }`}
                >
                  <span>Create Account</span>
                  {mode === 'signup' && (
                    <motion.div
                      layoutId="auth-tab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-900"
                    />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMode('track');
                    setMessage(null);
                  }}
                  className={`pb-3.5 text-xs uppercase tracking-[0.18em] font-medium transition-colors relative ${
                    mode === 'track' ? 'text-zinc-900 font-semibold' : 'text-zinc-400 hover:text-zinc-700'
                  }`}
                >
                  <span>Track Order</span>
                  {mode === 'track' && (
                    <motion.div
                      layoutId="auth-tab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-900"
                    />
                  )}
                </button>
              </div>

              {/* Status Notifications */}
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 text-xs rounded-sm leading-relaxed border ${
                    message.type === 'success'
                      ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                      : 'bg-red-50 text-red-900 border-red-200'
                  }`}
                >
                  {message.text}
                </motion.div>
              )}

              {/* Form Views */}
              <AnimatePresence mode="wait">
                {mode === 'login' && (
                  <motion.div
                    key="login"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mb-6">
                      <h3 className="font-serif text-2xl text-zinc-900 font-medium">Welcome Back</h3>
                      <p className="text-xs text-zinc-500 mt-1">
                        Sign in with your mobile number or email credentials.
                      </p>
                    </div>

                    {/* Method Toggle: OTP vs Password */}
                    <div className="flex bg-zinc-100 p-1 rounded-sm mb-6 text-xs">
                      <button
                        type="button"
                        onClick={() => {
                          setAuthMethod('phone');
                          setOtpSent(false);
                          setMessage(null);
                        }}
                        className={`flex-1 py-1.5 font-medium transition-colors rounded-xs ${
                          authMethod === 'phone'
                            ? 'bg-white text-zinc-900 shadow-xs'
                            : 'text-zinc-500 hover:text-zinc-900'
                        }`}
                      >
                        Mobile (OTP)
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setAuthMethod('email');
                          setMessage(null);
                        }}
                        className={`flex-1 py-1.5 font-medium transition-colors rounded-xs ${
                          authMethod === 'email'
                            ? 'bg-white text-zinc-900 shadow-xs'
                            : 'text-zinc-500 hover:text-zinc-900'
                        }`}
                      >
                        Email & Password
                      </button>
                    </div>

                    {authMethod === 'phone' ? (
                      !otpSent ? (
                        <form onSubmit={handleSendOtp} className="space-y-4">
                          <div>
                            <label className="block text-[11px] uppercase tracking-wider text-zinc-600 font-mono mb-1.5 font-medium">
                              Mobile Number
                            </label>
                            <div className="relative flex items-center">
                              <span className="absolute left-3.5 text-xs text-zinc-500 font-mono border-r border-zinc-200 pr-2">
                                +91
                              </span>
                              <input
                                type="tel"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="98765 43210"
                                maxLength={10}
                                className="w-full pl-16 pr-3.5 py-3 bg-zinc-50 border border-zinc-200 focus:border-zinc-900 focus:bg-white text-zinc-900 text-sm outline-none transition-colors rounded-xs"
                              />
                            </div>
                          </div>

                          <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3.5 bg-zinc-900 hover:bg-black text-white text-xs uppercase tracking-[0.18em] font-medium transition-colors rounded-xs flex items-center justify-center gap-2"
                          >
                            <span>{loading ? 'Sending OTP...' : 'Send Login OTP'}</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </button>
                        </form>
                      ) : (
                        <form onSubmit={handleVerifyOtp} className="space-y-4">
                          <div>
                            <div className="flex items-center justify-between mb-1.5">
                              <label className="block text-[11px] uppercase tracking-wider text-zinc-600 font-mono font-medium">
                                Enter 4-Digit OTP
                              </label>
                              <button
                                type="button"
                                onClick={() => setOtpSent(false)}
                                className="text-[11px] text-zinc-500 hover:text-zinc-900 underline"
                              >
                                Change Number
                              </button>
                            </div>
                            <input
                              type="text"
                              required
                              autoFocus
                              value={otp}
                              onChange={(e) => setOtp(e.target.value)}
                              placeholder="1 0 8 0"
                              maxLength={6}
                              className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:border-zinc-900 focus:bg-white text-zinc-900 text-center tracking-[0.5em] font-mono text-lg outline-none rounded-xs"
                            />
                          </div>

                          <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3.5 bg-zinc-900 hover:bg-black text-white text-xs uppercase tracking-[0.18em] font-medium transition-colors rounded-xs flex items-center justify-center gap-2"
                          >
                            <span>{loading ? 'Verifying...' : 'Verify & Enter'}</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </button>
                        </form>
                      )
                    ) : (
                      <form onSubmit={handleEmailAuth} className="space-y-4">
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider text-zinc-600 font-mono mb-1.5 font-medium">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seeker@omgtribe.com"
                            className="w-full px-3.5 py-3 bg-zinc-50 border border-zinc-200 focus:border-zinc-900 focus:bg-white text-zinc-900 text-sm outline-none transition-colors rounded-xs"
                          />
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <label className="block text-[11px] uppercase tracking-wider text-zinc-600 font-mono font-medium">
                              Password
                            </label>
                            <a href="#reset" className="text-[11px] text-zinc-500 hover:text-zinc-900 underline">
                              Forgot?
                            </a>
                          </div>
                          <div className="relative flex items-center">
                            <input
                              type={showPassword ? 'text' : 'password'}
                              required
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="••••••••"
                              className="w-full px-3.5 py-3 bg-zinc-50 border border-zinc-200 focus:border-zinc-900 focus:bg-white text-zinc-900 text-sm outline-none transition-colors rounded-xs pr-10"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 text-zinc-400 hover:text-zinc-700"
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full py-3.5 bg-zinc-900 hover:bg-black text-white text-xs uppercase tracking-[0.18em] font-medium transition-colors rounded-xs flex items-center justify-center gap-2"
                        >
                          <span>{loading ? 'Authenticating...' : 'Sign In'}</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </form>
                    )}

                    <div className="mt-6 text-center text-xs text-zinc-500">
                      New to OMG Tribe?{' '}
                      <button
                        type="button"
                        onClick={() => {
                          setMode('signup');
                          setMessage(null);
                        }}
                        className="font-medium text-zinc-900 underline hover:text-black"
                      >
                        Create an account
                      </button>
                    </div>
                  </motion.div>
                )}

                {mode === 'signup' && (
                  <motion.div
                    key="signup"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mb-6">
                      <h3 className="font-serif text-2xl text-zinc-900 font-medium">Join the Tribe</h3>
                      <p className="text-xs text-zinc-500 mt-1">
                        Create an account to track sacred pieces, save your altar favorites, and receive guidance.
                      </p>
                    </div>

                    <form onSubmit={handleEmailAuth} className="space-y-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-zinc-600 font-mono mb-1.5 font-medium">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Ananya Sharma"
                          className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 focus:border-zinc-900 focus:bg-white text-zinc-900 text-sm outline-none transition-colors rounded-xs"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider text-zinc-600 font-mono mb-1.5 font-medium">
                            Mobile Number
                          </label>
                          <div className="relative flex items-center">
                            <span className="absolute left-3 text-xs text-zinc-500 font-mono border-r border-zinc-200 pr-1.5">
                              +91
                            </span>
                            <input
                              type="tel"
                              required
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="9876543210"
                              className="w-full pl-14 pr-3 py-2.5 bg-zinc-50 border border-zinc-200 focus:border-zinc-900 focus:bg-white text-zinc-900 text-sm outline-none rounded-xs"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] uppercase tracking-wider text-zinc-600 font-mono mb-1.5 font-medium">
                            Email
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@domain.com"
                            className="w-full px-3 py-2.5 bg-zinc-50 border border-zinc-200 focus:border-zinc-900 focus:bg-white text-zinc-900 text-sm outline-none rounded-xs"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-zinc-600 font-mono mb-1.5 font-medium">
                          Choose Password
                        </label>
                        <div className="relative flex items-center">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="At least 6 characters"
                            className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 focus:border-zinc-900 focus:bg-white text-zinc-900 text-sm outline-none rounded-xs pr-10"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 text-zinc-400 hover:text-zinc-700"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 pt-1 text-[11px] text-zinc-600">
                        <input
                          type="checkbox"
                          id="terms"
                          defaultChecked
                          className="mt-0.5 rounded-xs accent-zinc-900"
                        />
                        <label htmlFor="terms" className="leading-tight">
                          Receive one weekly message on Vedic practice & newly blessed arrivals. No spam ever.
                        </label>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 bg-zinc-900 hover:bg-black text-white text-xs uppercase tracking-[0.18em] font-medium transition-colors rounded-xs flex items-center justify-center gap-2 mt-4"
                      >
                        <span>{loading ? 'Creating...' : 'Complete Registration'}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </form>

                    <div className="mt-6 text-center text-xs text-zinc-500">
                      Already have an account?{' '}
                      <button
                        type="button"
                        onClick={() => {
                          setMode('login');
                          setMessage(null);
                        }}
                        className="font-medium text-zinc-900 underline hover:text-black"
                      >
                        Sign in instead
                      </button>
                    </div>
                  </motion.div>
                )}

                {mode === 'track' && (
                  <motion.div
                    key="track"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-1">
                        <Package className="h-5 w-5 text-[#A8842F]" />
                        <h3 className="font-serif text-2xl text-zinc-900 font-medium">Track Order</h3>
                      </div>
                      <p className="text-xs text-zinc-500">
                        Enter your Order ID (from SMS/WhatsApp receipt) or courier AWB number.
                      </p>
                    </div>

                    <form onSubmit={handleTrackOrder} className="space-y-4">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-zinc-600 font-mono mb-1.5 font-medium">
                          Order Number / AWB
                        </label>
                        <input
                          type="text"
                          required
                          value={orderId}
                          onChange={(e) => setOrderId(e.target.value)}
                          placeholder="e.g. OMG-10824"
                          className="w-full px-3.5 py-3 bg-zinc-50 border border-zinc-200 focus:border-zinc-900 focus:bg-white text-zinc-900 text-sm outline-none transition-colors rounded-xs font-mono uppercase"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 bg-zinc-900 hover:bg-black text-white text-xs uppercase tracking-[0.18em] font-medium transition-colors rounded-xs flex items-center justify-center gap-2"
                      >
                        <span>{loading ? 'Checking Logistics...' : 'Check Status'}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </form>

                    {/* Order Journey Visual */}
                    <div className="mt-8 border-t border-zinc-200 pt-6">
                      <span className="block text-[10px] uppercase font-mono tracking-wider text-zinc-400 mb-3">
                        How We Dispatch Sacred Tools:
                      </span>
                      <div className="space-y-3 text-xs text-zinc-600">
                        <div className="flex items-center gap-2.5">
                          <span className="h-2 w-2 rounded-full bg-emerald-600" />
                          <span>1. Handcrafted & Consecrated at Haridwar Altar</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <span className="h-2 w-2 rounded-full bg-emerald-600" />
                          <span>2. Multi-layer tamper-proof protective packaging</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <span className="h-2 w-2 rounded-full bg-emerald-600" />
                          <span>3. Express Air dispatch across all pin codes in India</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Security Assurance */}
            <div className="pt-8 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-zinc-500" />
                <span>256-Bit SSL Encrypted Verification</span>
              </span>

              <Link href="/contact" className="hover:text-zinc-700 underline transition-colors">
                Need Help?
              </Link>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#FCFAF5]">
          <div className="text-center">
            <GoldSunMark size={36} className="mx-auto mb-3 animate-spin text-[#A8842F]" />
            <p className="font-serif text-sm text-[#2A2317]">Opening Sanctuary...</p>
          </div>
        </div>
      }
    >
      <LoginPageContent />
    </Suspense>
  );
}
