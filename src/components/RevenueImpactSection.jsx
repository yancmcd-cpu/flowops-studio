import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const metrics = [
  { label: 'Lead response time', before: 'Hours - days', after: '< 60 seconds' },
  { label: 'Follow-up sequences', before: 'None / manual', after: '7-touch automated' },
  { label: 'After-hours coverage', before: 'Zero', after: '24 / 7' },
  { label: 'Admin hours/week', before: '+15 hrs manual', after: 'Fully automated' }
];

const deltas = [
  { value: '+19 jobs', label: 'per month', desc: 'More closed deals from the exact same lead volume.' },
  { value: '+$2.8K - $9.5K', label: 'extra revenue / month', desc: 'Pure upside without extra ad spend required.', highlight: true },
  { value: '~15 hrs', label: 'saved per week', desc: 'Admin and follow-up handled entirely by AI.' }
];

export const RevenueImpactSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="fo-preview-section bg-[#05070D] border-b border-white/5 px-4 py-16 text-white sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12 text-center sm:mb-20"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400" style={{ background: 'rgba(8,17,31,0.6)' }}>
            Revenue Impact
          </div>
          <h2 className="px-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            What Does This Actually
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Mean in Revenue?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl px-2 text-base leading-relaxed text-slate-400 sm:text-lg md:text-xl">
            A local service business running <strong className="text-white">100-150 leads/month</strong> sees this kind of shift when FlowOps AI systems are deployed.
          </p>
        </motion.div>

        <div className="mb-8 grid grid-cols-1 gap-6 sm:mb-12 sm:gap-8 lg:grid-cols-2">
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-white/5 p-6 sm:rounded-3xl sm:p-10"
            style={{ background: 'rgba(8,17,31,0.42)', backdropFilter: 'blur(10px)' }}
            initial={{ opacity: 0, x: -18 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            <div className="absolute left-0 top-0 h-full w-1" style={{ background: 'rgba(127,29,29,0.6)' }} />
            <div className="mb-6 flex items-center gap-3 pl-3 sm:mb-8 sm:pl-4">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">Before FlowOps</span>
            </div>
            <div className="space-y-5 pl-3 sm:space-y-6 sm:pl-4">
              <div className="flex items-baseline gap-2 sm:gap-3">
                <span className="text-4xl font-black text-white sm:text-5xl">~13</span>
                <span className="text-base text-slate-400 sm:text-lg">jobs closed / month</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-500">
                From 100-150 inbound leads, only <span className="font-semibold text-slate-300">~9% convert</span> - slow response, missed follow-ups, no system.
              </p>
              <div className="space-y-3 border-t border-white/5 pt-5">
                {metrics.map((metric) => (
                  <div key={metric.label} className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-slate-400">{metric.label}</span>
                    <span className="text-right font-semibold text-red-400">{metric.before}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-red-500/15 p-4 sm:rounded-2xl sm:p-5" style={{ background: 'rgba(127,29,29,0.08)' }}>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-red-400">Monthly Revenue</p>
                <p className="text-2xl font-black text-white sm:text-3xl">$2,000 - $6,500</p>
                <p className="mt-1 text-xs text-slate-500">Based on avg deal value $150-500.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-2xl border border-blue-500/25 p-6 sm:rounded-3xl sm:p-10"
            style={{ background: 'rgba(8,17,31,0.68)', backdropFilter: 'blur(10px)', boxShadow: '0 0 60px -15px rgba(59,130,246,0.25)' }}
            initial={{ opacity: 0, x: 18 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.32 }}
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-cyan-500" />
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-600/10 blur-3xl pointer-events-none sm:h-64 sm:w-64" />
            <div className="relative z-10 mb-6 flex items-center gap-3 pl-3 sm:mb-8 sm:pl-4">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">After FlowOps</span>
            </div>
            <div className="relative z-10 space-y-5 pl-3 sm:space-y-6 sm:pl-4">
              <div className="flex items-baseline gap-2 sm:gap-3">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-4xl font-black text-transparent sm:text-5xl">~32</span>
                <span className="text-base text-slate-300 sm:text-lg">jobs closed / month</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Same 100-150 leads - now <span className="font-semibold text-white">~22% convert</span> with instant AI response, automated follow-up, and 24/7 coverage.
              </p>
              <div className="space-y-3 border-t border-white/5 pt-5">
                {metrics.map((metric) => (
                  <div key={metric.label} className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-slate-400">{metric.label}</span>
                    <span className="text-right font-semibold text-cyan-400">{metric.after}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-blue-500/25 p-4 sm:rounded-2xl sm:p-5" style={{ background: 'rgba(59,130,246,0.08)' }}>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-400">Monthly Revenue</p>
                <p className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-2xl font-black text-transparent sm:text-3xl">$4,800 - $16,000</p>
                <p className="mt-1 text-xs text-slate-500">Based on avg deal value $150-500.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {deltas.map((delta, index) => (
            <motion.div
              key={delta.label}
              className={`rounded-xl border p-5 text-center sm:rounded-2xl sm:p-7 ${delta.highlight ? 'border-cyan-500/25' : 'border-white/5'}`}
              style={{ background: 'rgba(8,17,31,0.6)', backdropFilter: 'blur(8px)', ...(delta.highlight ? { boxShadow: '0 0 30px -10px rgba(6,182,212,0.2)' } : {}) }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.44 + index * 0.1 }}
            >
              <div className="mb-1 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-2xl font-black text-transparent sm:text-3xl">{delta.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500">{delta.label}</div>
              <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:mt-3">{delta.desc}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 px-4 text-center text-xs text-slate-600 sm:mt-8">
          * Projections based on industry conversion benchmarks for local service businesses with 100-150 monthly leads.
        </p>
      </div>
    </section>
  );
};
