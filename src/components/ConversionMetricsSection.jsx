import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: '21x', label: 'More Likely', desc: 'Leads contacted within 5 minutes vs after 1 hour.' },
  { value: '80%', label: 'Of Sales', desc: 'Require 5 or more follow-ups. Most businesses never get there.' },
  { value: 'AI + Speed', label: 'Persistence = Revenue', desc: 'Without systems, valuable leads are lost to the competition.' }
];

export const ConversionMetricsSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="fo-preview-section bg-[#05070D] border-b border-white/5 px-4 py-16 text-white sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12 text-center sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            More Leads Mean Nothing If You
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Do Not Convert Them</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:mt-6 sm:text-lg md:text-xl">
            AI-powered response and follow-up ensures every lead is captured, contacted, and converted.
          </p>
        </motion.div>

        <div className="mb-10 grid grid-cols-1 gap-4 sm:mb-20 sm:gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="rounded-2xl border border-white/5 p-6 transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)] sm:p-8"
              style={{ background: 'rgba(8,17,31,0.72)', backdropFilter: 'blur(10px)' }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + index * 0.12 }}
            >
              <div className="mb-2 text-4xl font-bold text-blue-400">{stat.value}</div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">{stat.label}</p>
              <p className="text-sm leading-relaxed text-slate-400">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-white/5 p-7 sm:p-10"
            style={{ background: 'rgba(8,17,31,0.4)', backdropFilter: 'blur(10px)' }}
            initial={{ opacity: 0, x: -18 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.28 }}
          >
            <div className="absolute left-0 top-0 h-full w-1 rounded-l-3xl" style={{ background: 'rgba(127,29,29,0.55)' }} />
            <h3 className="mb-6 flex items-center pl-4 text-2xl font-bold text-white">
              <span className="mr-3 h-2 w-2 rounded-full bg-red-500" />
              Without AI and Automation
            </h3>
            <ul className="space-y-4 pl-4 text-slate-400">
              {[
                'Slow response times (hours or days)',
                'Missed or delayed follow-up',
                'Manual processes and spreadsheets',
                'Lost opportunities and cold leads'
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-base">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-red-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-3xl border border-blue-500/25 p-7 sm:p-10"
            style={{ background: 'rgba(8,17,31,0.72)', backdropFilter: 'blur(10px)', boxShadow: '0 0 50px -12px rgba(59,130,246,0.22)' }}
            initial={{ opacity: 0, x: 18 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="absolute left-0 top-0 h-full w-1 rounded-l-3xl bg-blue-500" />
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
            <h3 className="relative z-10 mb-6 flex items-center pl-4 text-2xl font-bold text-white">
              <span className="mr-3 h-2 w-2 rounded-full bg-blue-400" />
              With AI and Automation
            </h3>
            <ul className="relative z-10 space-y-4 pl-4 text-slate-300">
              {[
                'Instant responses within seconds',
                'Automated multi-step follow-up',
                'Lead qualification and tracking',
                'More booked calls, more sales'
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-base">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
