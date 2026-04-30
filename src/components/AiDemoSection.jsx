import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export const AiDemoSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [chatStep, setChatStep] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    setChatStep(1);
    const t1 = window.setTimeout(() => setChatStep(2), 1400);
    const t2 = window.setTimeout(() => setChatStep(3), 3000);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [inView]);

  return (
    <section ref={sectionRef} className="fo-preview-section bg-[#05070D] border-t border-white/5 px-4 py-16 text-white sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12 text-center sm:mb-16"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
            Live Systems
          </div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Try the
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> AI System Yourself</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg md:text-xl">
            Interact with our AI to see how it captures, qualifies, and books leads automatically.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            className="relative flex min-h-[520px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-white/5 p-8 shadow-2xl sm:min-h-[550px] sm:rounded-[2.5rem]"
            style={{ background: 'rgba(8,17,31,0.6)', backdropFilter: 'blur(12px)' }}
            initial={{ opacity: 0, x: -18 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none sm:rounded-[2.5rem]" />
            <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 w-full max-w-sm space-y-10 text-center">
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400">AI Voice Assistant</div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
                  <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping [animation-delay:300ms]" />
                  <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 shadow-[0_0_60px_-5px_rgba(37,99,235,0.5)]">
                    <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white">Call Our AI Agent</h3>
                <p className="text-sm leading-relaxed text-slate-400">Experience high-speed voice qualification and instant scheduling over the phone.</p>
              </div>
              <button className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-8 py-5 text-xs font-black uppercase tracking-widest text-slate-950 transition-all hover:bg-blue-50 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
                Start Voice Call
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </motion.div>

          <motion.div
            className="relative flex min-h-[520px] flex-col rounded-[2rem] border border-white/5 p-4 shadow-2xl sm:min-h-[550px] sm:rounded-[2.5rem] sm:p-6"
            style={{ background: 'rgba(8,17,31,0.6)', backdropFilter: 'blur(12px)' }}
            initial={{ opacity: 0, x: 18 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.24 }}
          >
            <div className="flex flex-grow flex-col overflow-hidden rounded-[1.5rem] border border-white/10 shadow-inner sm:rounded-[2rem]" style={{ background: 'rgba(5,7,13,0.8)' }}>
              <div className="flex items-center justify-between border-b border-white/5 bg-[#08111F]/60 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/20">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-widest text-white">Chat Assistant</span>
                    <span className="flex items-center gap-1 text-[10px] text-cyan-400">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                      Online
                    </span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                </div>
              </div>

              <div className="flex flex-grow flex-col justify-end space-y-4 overflow-hidden p-5">
                <ChatMsg visible={chatStep >= 1} align="left">
                  Hi! I am the AI assistant for FlowOps. I handle 100% of enquiries instantly. How can I help you today?
                </ChatMsg>
                <ChatMsg visible={chatStep >= 2} align="right">
                  How does the automation handle out-of-hours leads?
                </ChatMsg>
                <ChatMsg visible={chatStep >= 3} align="left">
                  Instantly. Even at 3 AM, I respond in under 60 seconds, qualify the lead, and book them into your calendar for the next available slot.
                </ChatMsg>
              </div>

              <div className="border-t border-white/5 bg-[#08111F]/40 p-4">
                <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#05070D]/80 p-2.5">
                  <span className="flex-grow pl-2 text-[10px] font-bold uppercase tracking-widest text-slate-600">Type a message...</span>
                  <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-500">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 border-t border-white/5 pt-10 sm:mt-20 sm:grid-cols-3 sm:gap-8 sm:pt-12">
          {[
            { icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Ask questions about your business' },
            { icon: 'M13 10V3L4 14h7v7l9-11h-7z', label: 'See real-time responses and qualification' },
            { icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', label: 'Experience automated booking flow' }
          ].map((item) => (
            <div key={item.label} className="group flex items-center gap-4 text-slate-400">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/5 bg-[#08111F] transition-colors group-hover:border-cyan-500/50">
                <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                </svg>
              </div>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ChatMsg = ({ visible, align, children }) => {
  if (!visible) return null;
  const isLeft = align === 'left';

  return (
    <motion.div className={`flex items-end gap-2 ${isLeft ? '' : 'flex-row-reverse'}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
      <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${isLeft ? 'border border-cyan-500/30 bg-cyan-500/20' : 'border border-blue-500/30 bg-blue-600/30'}`}>
        <svg className={`h-3.5 w-3.5 ${isLeft ? 'text-cyan-400' : 'text-blue-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isLeft ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          )}
        </svg>
      </div>
      <div className={`max-w-[85%] rounded-2xl border p-4 text-xs leading-relaxed shadow-sm ${isLeft ? 'rounded-bl-sm border-white/5 text-slate-300' : 'rounded-br-sm border-blue-500/20 bg-blue-600/20 text-slate-200'}`} style={isLeft ? { background: 'rgba(14,28,51,0.8)' } : {}}>
        {children}
      </div>
    </motion.div>
  );
};
