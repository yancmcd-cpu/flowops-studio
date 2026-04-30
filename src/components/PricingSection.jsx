import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const PricingSection = ({ onPrimaryCta }) => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="fo-preview-section relative overflow-hidden border-t border-white/5 bg-[#05070D] px-4 py-16 text-white sm:px-8 sm:py-24 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(59,130,246,0.15),transparent_34%),linear-gradient(180deg,rgba(30,64,175,0.08),transparent_45%,rgba(30,64,175,0.05))]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div className="mb-12 text-center sm:mb-16" initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.05 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-300" style={{ background: 'rgba(37,99,235,0.08)' }}>
            <svg className="h-3.5 w-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Pricing
          </div>
          <h2 className="px-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Simple,
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent"> Scalable Pricing</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl px-2 text-base leading-relaxed text-slate-400 sm:text-lg md:text-xl">
            Choose the system that fits your business and start converting more leads into revenue.
          </p>
          <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-blue-500/20 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-blue-300 sm:px-5 sm:text-xs" style={{ background: 'rgba(37,99,235,0.1)' }}>
            <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Most businesses start with the Growth System
          </div>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 lg:gap-8">
          <motion.div className="flex flex-col justify-between rounded-3xl border border-white/5 p-6 sm:p-8" style={{ background: 'rgba(8,17,31,0.68)', backdropFilter: 'blur(10px)' }} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45, delay: 0.16 }}>
            <div>
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 text-slate-400">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-white">Starter System</h3>
              <p className="mb-8 text-sm text-slate-400">Best for getting control of your inbound leads.</p>
              <div className="mb-1 flex items-end gap-2">
                <span className="text-5xl font-black tracking-tight text-white">$297</span>
                <span className="pb-1 text-sm font-medium text-slate-500">/month</span>
              </div>
              <p className="mb-8 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">No setup fee</p>
              <div className="mb-8 rounded-2xl border border-white/5 p-4 sm:p-5" style={{ background: 'rgba(2,6,23,0.35)' }}>
                <p className="flex items-start gap-2.5 text-sm font-semibold leading-relaxed text-slate-100">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Capture and respond to every lead automatically.
                </p>
              </div>
              <ul className="mb-10 space-y-4">
                {['Multi-channel capture', 'Instant automated response', 'Centralized CRM inbox', 'Basic follow-up reminders'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <button onClick={onPrimaryCta} className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all hover:bg-white/10">
              Start Simple
            </button>
          </motion.div>

          <motion.div className="relative mt-5 flex flex-col justify-between rounded-3xl p-px md:mt-0" style={{ background: 'linear-gradient(180deg, rgba(59,130,246,0.85), rgba(59,130,246,0.18), rgba(99,102,241,0.75))', boxShadow: '0 24px 60px -20px rgba(37,99,235,0.35)' }} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45, delay: 0.24 }}>
            <div className="absolute -top-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-lg" style={{ background: 'linear-gradient(90deg, rgb(37 99 235), rgb(79 70 229))' }}>
              <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Most Popular
            </div>

            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[calc(1.5rem-1px)] border border-white/5 bg-[#0C1626]/90 p-6 backdrop-blur-[14px] sm:p-8">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blue-500/10 to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-blue-600/10 blur-3xl" />
              <div className="relative z-10">
                <div className="mb-7 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-[1.6rem] border border-blue-400/25 bg-blue-500/10 text-blue-400 shadow-[0_0_24px_-8px_rgba(59,130,246,0.35)]">
                  <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">Growth System</h3>
                <p className="mb-8 text-sm leading-relaxed text-slate-300">Best for turning leads into consistent monthly revenue.</p>
                <div className="mb-2 flex flex-wrap items-end gap-x-2 gap-y-1">
                  <span className="text-5xl font-black tracking-tight text-white">$2,000</span>
                  <span className="text-2xl font-medium text-slate-400">setup</span>
                </div>
                <p className="mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-sm font-bold text-transparent sm:text-base">+ $500/month</p>
                <p className="mb-8 text-[11px] uppercase tracking-[0.15em] text-slate-500">7-14 day implementation | 50% up front 50% on delivery</p>
                <div className="mb-8 rounded-2xl border border-white/10 p-4 sm:p-5" style={{ background: 'rgba(59,130,246,0.06)' }}>
                  <p className="flex items-start gap-2.5 text-sm font-semibold leading-relaxed text-white">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Convert more leads into booked customers automatically.
                  </p>
                </div>
                <ul className="mb-8 space-y-4">
                  {['Full end-to-end system build', 'AI lead qualification and scoring', 'Multi-step follow-up for 7-30 days', 'Booking system integration', 'Multi-channel automation'].map((item) => (
                    <li key={item} className="flex items-start gap-3.5 text-sm text-slate-200">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="rounded-2xl border border-blue-500/15 p-4 text-center sm:p-5" style={{ background: 'rgba(59,130,246,0.07)' }}>
                  <p className="text-[11px] italic leading-relaxed text-blue-100/75">
                    "Most businesses see more leads turning into booked jobs within 2-4 weeks, without increasing ad spend."
                  </p>
                </div>
              </div>
              <button onClick={onPrimaryCta} className="relative z-10 mt-8 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all hover:from-blue-500 hover:to-indigo-500" style={{ boxShadow: '0 12px 28px -10px rgba(37,99,235,0.55)' }}>
                Get Your System
              </button>
            </div>
          </motion.div>

          <motion.div className="flex flex-col justify-between rounded-3xl border border-white/5 p-6 sm:p-8" style={{ background: 'rgba(8,17,31,0.68)', backdropFilter: 'blur(10px)' }} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45, delay: 0.32 }}>
            <div>
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 text-slate-400">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2 1.5 3 3.5 3s3.5-1 3.5-3V7c0-2-1.5-3-3.5-3S4 5 4 7zm10 0v10c0 2 1.5 3 3.5 3s3.5-1 3.5-3V7c0-2-1.5-3-3.5-3S14 5 14 7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-white">Custom System</h3>
              <p className="mb-8 text-sm leading-relaxed text-slate-400">For scaling businesses with more complex systems and workflows.</p>
              <div className="mb-1">
                <span className="text-4xl font-black tracking-tight text-white sm:text-5xl">From $2,500<span className="text-blue-400">+</span></span>
              </div>
              <p className="mb-8 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Custom quote required</p>
              <div className="mb-8 rounded-2xl border border-white/5 p-4 sm:p-5" style={{ background: 'rgba(2,6,23,0.35)' }}>
                <p className="flex items-start gap-2.5 text-sm font-semibold leading-relaxed text-slate-100">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Tailored to your business and how you operate.
                </p>
              </div>
              <ul className="mb-10 space-y-4">
                {['Custom workflows and automations', 'Advanced API integrations', 'Complex lead routing logic'].map((item) => (
                  <li key={item} className="flex items-start gap-3.5 text-sm text-slate-400">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <button onClick={onPrimaryCta} className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all hover:bg-white/10">
              Request Custom Plan
            </button>
          </motion.div>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-4 border-t border-white/5 pt-8 sm:mt-20 sm:gap-x-12 sm:pt-10">
          {[
            { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', label: 'No long-term contracts' },
            { icon: 'M13 10V3L4 14h7v7l9-11h-7z', label: 'Built around your business' },
            { icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Designed for positive ROI' }
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
              <svg className="h-4 w-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
              </svg>
              {item.label}
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <div className="group relative max-w-2xl cursor-help text-center">
            <p className="inline-flex items-center gap-1.5 text-[11px] leading-relaxed text-slate-600 transition-colors group-hover:text-slate-400 sm:text-xs">
              Messaging and call usage (SMS, WhatsApp, voice) is billed separately based on usage.
              <span className="text-slate-500">i</span>
            </p>
            <div className="pointer-events-none invisible absolute bottom-full left-1/2 z-20 mb-3 w-64 -translate-x-1/2 rounded-xl border border-white/10 p-3 text-center opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100" style={{ background: 'rgb(15 23 42)', boxShadow: '0 20px 40px -20px rgba(0,0,0,0.8)' }}>
              <p className="text-[10px] leading-relaxed text-white">
                Includes a base usage allowance. Additional usage is billed by volume as your system scales.
              </p>
              <div className="absolute left-1/2 top-full -translate-x-1/2 border-8 border-transparent border-t-slate-900" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
