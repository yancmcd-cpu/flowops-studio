import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const industries = [
  { code: 'HS', name: 'Home Services Trades', desc: 'HVAC | Plumbing | Electricians', rev: '+$6,400/mo', extraLabel: 'Extra jobs/month', extra: '+20 jobs', statLabel: 'Admin time saved', stat: '15 hrs/wk', basis: 'Based on 80 leads/mo | avg job $320' },
  { code: 'RE', name: 'Real Estate and Rentals', desc: 'Agents | Rental agencies', rev: '+$19,200/mo', extraLabel: 'Extra closings/mo', extra: '+6 deals', statLabel: 'After-hours coverage', stat: '24 / 7', basis: 'Based on 50 enquiries/mo | avg deal $3,200' },
  { code: 'CR', name: 'Cleaning, Painting and Renos', desc: 'Cleaning | Painting | Renovations', rev: '+$5,760/mo', extraLabel: 'Extra bookings/mo', extra: '+12 jobs', statLabel: 'No-show reduction', stat: '-65%', basis: 'Based on 60 leads/mo | avg job $480' },
  { code: 'PH', name: 'Premium Home Installs', desc: 'Pools | Home cinema | Bespoke builds', rev: '+$34,000/mo', extraLabel: 'Extra projects/mo', extra: '+4 projects', statLabel: 'Missed leads', stat: 'Zero', basis: 'Based on 25 enquiries/mo | avg project $8,500' },
  { code: 'LB', name: 'Coaches, Agencies and Local Biz', desc: 'Coaches | Legal | Gyms | Auto', rev: '+$11,400/mo', extraLabel: 'New clients/mo', extra: '+12 clients', statLabel: 'Leads lost to competitors', stat: '-50%', basis: 'Based on 70 leads/mo | avg client LTV $950' },
  { code: 'MC', name: 'Cosmetic and Medical Clinics', desc: 'Med spa | Cosmetic | Dental', rev: '+$9,660/mo', extraLabel: 'Extra appointments/mo', extra: '+23 bookings', statLabel: 'Appointment no-shows', stat: '-75%', basis: 'Based on 90 enquiries/mo | avg booking $420', special: true }
];

export const ResultsSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="fo-preview-section bg-[#05070D] border-b border-white/5 px-4 py-16 text-white sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-8 text-center sm:mb-10"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-400" style={{ background: 'rgba(8,17,31,0.6)' }}>
            Results Across Industries
          </div>
          <h2 className="px-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Works in Any Industry That
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Relies on Leads</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl px-2 text-base leading-relaxed text-slate-400 sm:text-lg">
            FlowOps AI systems deliver measurable results wherever inbound leads need fast, consistent handling.
          </p>
        </motion.div>

        <motion.div
          className="relative mb-10 overflow-hidden rounded-2xl border border-blue-500/20 p-5 sm:mb-14 sm:p-7"
          style={{ background: 'linear-gradient(135deg, rgba(8,17,35,0.9), rgba(14,28,55,0.8))', backdropFilter: 'blur(12px)' }}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.16 }}
        >
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <div className="shrink-0 text-center sm:border-r sm:border-white/10 sm:pr-7 sm:text-left">
              <div className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-4xl font-black text-transparent sm:text-5xl">391%</div>
              <div className="mt-1 text-xs font-semibold text-slate-400">more conversions</div>
            </div>
            <div className="sm:pl-2">
              <p className="mb-1.5 text-sm font-semibold text-white sm:text-base">
                Businesses that respond to a lead within <span className="text-cyan-400">60 seconds</span> convert at 3-4x the industry average.
              </p>
              <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
                Most small businesses take <span className="font-semibold text-slate-300">47+ hours</span> to reply to an inbound lead. By the time they do, the lead has moved on. FlowOps closes that gap on every channel, every time.
              </p>
              <p className="mt-3 text-xs text-slate-600">Source: Velocify and HubSpot Lead Response benchmark.</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              className={`rounded-2xl border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/35 sm:p-6 ${industry.special ? 'border-blue-500/20' : 'border-white/5'}`}
              style={{ background: industry.special ? 'rgba(8,17,31,0.75)' : 'rgba(8,17,31,0.65)', backdropFilter: 'blur(10px)', ...(industry.special ? { boxShadow: '0 0 30px -10px rgba(59,130,246,0.12)' } : {}) }}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.22 + index * 0.07 }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#0B1324] text-sm font-black tracking-[0.16em] text-cyan-400">
                {industry.code}
              </div>
              <h3 className="mb-0.5 text-sm font-bold text-white sm:text-base">{industry.name}</h3>
              <p className="mb-3 text-[10px] uppercase tracking-[0.12em] text-slate-500 sm:text-xs">{industry.desc}</p>

              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-slate-400">Additional revenue</span>
                  <span className="text-xs font-bold text-cyan-400 sm:text-sm">{industry.rev}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-slate-400">{industry.extraLabel}</span>
                  <span className="text-xs font-bold text-cyan-400 sm:text-sm">{industry.extra}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-slate-400">{industry.statLabel}</span>
                  <span className="text-xs font-bold text-cyan-400 sm:text-sm">{industry.stat}</span>
                </div>
              </div>

              <div className="mt-4 border-t border-white/5 pt-3 text-[10px] tracking-[0.02em] text-slate-500">{industry.basis}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
