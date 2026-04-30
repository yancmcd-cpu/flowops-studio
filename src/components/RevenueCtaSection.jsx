import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const RevenueCtaSection = ({ onPrimaryCta }) => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="fo-preview-section relative overflow-hidden border-y border-blue-500/15 px-4 py-12 text-white sm:px-8 sm:py-16"
      style={{ background: 'linear-gradient(135deg, rgba(8,17,31,0.8) 0%, rgba(14,28,51,0.9) 100%)', backdropFilter: 'blur(16px)' }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-8 sm:gap-10 lg:flex-row">
          <motion.div
            className="max-w-xl text-center lg:text-left"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">See It in Your Business</p>
            <h3 className="mb-3 text-2xl font-black leading-tight text-white sm:text-3xl">
              What Would an Extra
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> +$5K/Month </span>
              Do For You?
            </h3>
            <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
              Book a free 30-minute Revenue Audit. We will show you exactly where you are losing conversions and what we can recover.
            </p>
          </motion.div>

          <motion.div
            className="flex w-full shrink-0 flex-col items-center gap-4 lg:w-auto lg:items-end"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18 }}
          >
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <button
                onClick={onPrimaryCta}
                className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-center text-sm font-bold text-white shadow-[0_4px_24px_-4px_rgba(37,99,235,0.45)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_6px_32px_-4px_rgba(37,99,235,0.6)]"
              >
                Book Free Audit
              </button>
              <button
                onClick={onPrimaryCta}
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-center text-sm font-semibold text-slate-300 transition-all duration-200 hover:bg-white/10"
              >
                View Pricing
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 lg:justify-end">
              {['No credit card', '30-min session', 'Zero obligation'].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
