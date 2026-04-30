import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const channels = [
  { name: 'WhatsApp', color: 'text-slate-200' },
  { name: 'Messenger', color: 'text-slate-200' },
  { name: 'Web Chat', color: 'text-blue-300' },
  { name: 'Phone / Call', color: 'text-cyan-300' },
  { name: 'SMS / Text', color: 'text-blue-300' },
  { name: 'Email', color: 'text-slate-300' },
  { name: 'Web Form', color: 'text-slate-300' }
];

const steps = [
  {
    number: '1',
    title: 'Instant Response',
    desc: 'AI responds within 60 seconds on the same channel the lead used - personalized and professional.',
    meta: '< 60 seconds',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    accent: 'blue'
  },
  {
    number: '2',
    title: 'Qualify the Lead',
    desc: 'Asks tailored questions to score intent, budget, and urgency. Hot leads surface immediately.',
    meta: 'Auto-scored',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
    accent: 'blue'
  },
  {
    number: '3',
    title: 'Nurture and Follow-up',
    desc: 'A 7-touch automated sequence keeps warm leads engaged until they are ready to commit.',
    meta: '7-touch sequence',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    accent: 'cyan'
  },
  {
    number: '4',
    title: 'Booked. Closed. Revenue.',
    desc: 'Leads book directly into your calendar so the next best action happens automatically.',
    meta: 'Revenue captured',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    accent: 'cyan',
    featured: true
  }
];

export const WorkflowSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="fo-preview-section bg-[#05070D] border-b border-white/5 px-4 py-16 text-white sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12 text-center sm:mb-16"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400" style={{ background: 'rgba(8,17,31,0.6)' }}>
            Lead Pipeline
          </div>
          <h2 className="px-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Every Channel. Every Lead.
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Zero Missed.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl px-2 text-base leading-relaxed text-slate-400 sm:text-lg">
            FlowOps captures leads from every platform and runs them through an automated pipeline - from first contact to booked revenue.
          </p>
        </motion.div>

        <motion.div
          className="mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.14 }}
        >
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.25em] text-slate-500">Lead Sources</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {channels.map((channel) => (
              <div
                key={channel.name}
                className="rounded-xl border border-white/10 px-4 py-3 transition-all duration-200 hover:scale-[1.03] hover:border-blue-500/45"
                style={{ background: 'rgba(8,17,31,0.7)', backdropFilter: 'blur(8px)' }}
              >
                <span className={`text-sm font-semibold ${channel.color}`}>{channel.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="mb-6 hidden justify-center sm:flex" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.55, delay: 0.22 }}>
          <div className="flex flex-col items-center gap-1">
            <div className="h-8 w-px bg-gradient-to-b from-blue-500/20 to-blue-500/70" />
            <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {steps.map((step, index) => {
            const isCyan = step.accent === 'cyan';
            return (
              <motion.div
                key={step.title}
                className={`relative overflow-hidden rounded-2xl border p-5 sm:p-6 ${step.featured ? 'border-blue-500/20' : 'border-white/5'}`}
                style={{ background: step.featured ? 'rgba(8,17,31,0.75)' : 'rgba(8,17,31,0.7)', backdropFilter: 'blur(10px)', ...(step.featured ? { boxShadow: '0 0 30px -10px rgba(59,130,246,0.12)' } : {}) }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.24 + index * 0.1 }}
              >
                <div className={`absolute right-0 top-0 h-24 w-24 rounded-full blur-2xl ${isCyan ? 'bg-cyan-600/10' : 'bg-blue-600/10'}`} />
                <div className="relative z-10 mb-4 flex items-center gap-3">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl border ${isCyan ? 'border-cyan-500/25 bg-cyan-500/15' : 'border-blue-500/25 bg-blue-500/15'}`}>
                    <svg className={`h-4 w-4 ${isCyan ? 'text-cyan-400' : 'text-blue-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={step.icon} />
                    </svg>
                  </div>
                  <div className={`flex h-6 w-6 items-center justify-center rounded-full border text-[10px] font-black ${isCyan ? 'border-cyan-500/30 bg-cyan-600/30 text-cyan-300' : 'border-blue-500/30 bg-blue-600/30 text-blue-300'}`}>
                    {step.number}
                  </div>
                </div>
                <h3 className="mb-2 text-sm font-bold text-white sm:text-base">{step.title}</h3>
                <p className="text-xs leading-relaxed text-slate-400">{step.desc}</p>
                <div className={`mt-3 text-xs font-bold ${isCyan ? 'text-cyan-400' : 'text-blue-400'}`}>{step.meta}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
