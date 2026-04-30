import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

const heroImageData = [
  { src: "/assets/section-stills/flowops-lead-capture-v1-still.jpg", objectPosition: "50% 56%" },
  { src: "/assets/section-stills/flowops-ai-conversation-v1-still.jpg", objectPosition: "50% 50%" },
  { src: "/assets/section-stills/flowops-booking-conversion-v1-still.jpg", objectPosition: "50% 50%" },
  { src: "/assets/section-stills/flowops-automation-system-v1-still.jpg", objectPosition: "50% 56%" },
  { src: "/assets/section-stills/flowops-frontend-experience-v1-still.jpg", objectPosition: "50% 50%" }
];

const featureSections = [
  {
    descriptor: "AI-Powered Lead Capture",
    headline: "Capture every enquiry automatically — even when you're offline",
    subheading: "We build systems that bring together your DMs, forms, and inbound calls into one seamless capture flow — so every opportunity is tracked and handled.",
    microline: "Never miss another opportunity again",
    video: "/assets/animations/flowops-lead-capture-v1.mp4"
  },
  {
    descriptor: "AI Chat & Voice Systems",
    headline: "Respond instantly and engage every lead without lifting a finger",
    subheading: "Your system acts as your front desk — answering questions, qualifying leads, and guiding conversations in real time across chat and voice.",
    microline: "Conversations handled for you, 24/7",
    video: "/assets/animations/flowops-ai-conversation-v1.mp4"
  },
  {
    descriptor: "Automated Conversion & Booking",
    headline: "Automatically qualify leads and turn them into confirmed bookings",
    subheading: "Qualified leads are guided through to the next step — whether that's a call, appointment, or reservation — and booked directly into your calendar.",
    microline: "Turn interest into confirmed bookings",
    video: "/assets/animations/flowops-booking-conversion-v1.mp4"
  },
  {
    descriptor: "Workflow Automation System",
    headline: "Eliminate manual work and let your systems run the day-to-day",
    subheading: "From follow-ups to internal processes, everything is handled automatically — keeping your business moving without constant input.",
    microline: "Run your business without constant effort",
    video: "/assets/animations/flowops-automation-system-v1.mp4"
  },
  {
    descriptor: "High-Converting Website",
    headline: "Turn more visitors into leads with a high-performing website",
    subheading: "We design and build fast, modern websites that capture attention, build trust, and connect seamlessly with your system.",
    microline: "A website built to convert, not just look good",
    video: "/assets/animations/flowops-frontend-experience-v1.mp4"
  }
];

const howItWorksSteps = [
  {
    label: "DISCOVER",
    title: "We understand how your business works",
    body: "We look at how enquiries come in, identify where opportunities are lost, and what your business needs to run more efficiently."
  },
  {
    label: "BUILD",
    title: "We build your custom system",
    body: "We design, test and connect everything — lead capture, conversations, bookings, and automation — into one seamless system."
  },
  {
    label: "ACTIVATE",
    title: "Everything runs automatically — with better results",
    body: "Your system handles the day-to-day automatically, so you can focus on delivery, growth, and higher-value work."
  },
  {
    label: "OPTIMISE",
    title: "Your system improves and evolves over time",
    body: "We continuously refine, adjust, and optimise your system based on real performance — so it keeps delivering better results as your business grows."
  }
];

const faqItems = [
  {
    question: "Do you replace our current CRM or tools?",
    answer: "Not unless it makes sense. We usually build around the tools you already use, then connect the missing pieces so the whole system works as one."
  },
  {
    question: "Can this work with our current website and booking setup?",
    answer: "Yes. We can improve the front-end experience, connect your existing booking flow, or rebuild the key parts if that creates a cleaner outcome."
  },
  {
    question: "Is this a template or something custom?",
    answer: "Everything is tailored around your business. The exact capture flow, qualification logic, messaging, booking rules, and automation are designed around how you operate."
  },
  {
    question: "How long does a system like this take to implement?",
    answer: "It depends on complexity, but the goal is always speed with clarity. We define the flow, build the system, test it properly, and then refine it around real usage."
  },
  {
    question: "What happens after launch?",
    answer: "The system keeps improving. We review performance, refine the flow, and optimise the moving parts so it continues to produce better outcomes over time."
  },
  {
    question: "Who is this best suited for?",
    answer: "It works best for service businesses that rely on enquiries, calls, appointments, or reservations — especially where speed and follow-up directly affect revenue."
  }
];

const variantSettings = {
  f: {
    key: 'f',
    heroBadge: 'Custom AI systems for service businesses',
    heroTone: 'editorial',
    heroStackFloat: { y: [0, -10, -4, 0], x: [0, 3, -2, 0], rotate: [0, -0.5, 0.25, 0] },
    heroStackDuration: 11.5,
    heroCycleMs: 3600,
    pointerStrength: 10,
    sectionRevealDistance: 28,
    sectionRevealDuration: 0.72,
    cardLoopMs: 2400,
    faqToneClass: 'restrained',
    secondaryCta: 'How It Works'
  },
  g: {
    key: 'g',
    heroBadge: 'A connected growth system, not another tool stack',
    heroTone: 'product',
    heroStackFloat: { y: [0, -16, -6, 0], x: [0, 6, -4, 0], rotate: [0, -1.2, 0.5, 0] },
    heroStackDuration: 8.8,
    heroCycleMs: 2600,
    pointerStrength: 16,
    sectionRevealDistance: 38,
    sectionRevealDuration: 0.9,
    cardLoopMs: 1800,
    faqToneClass: 'energetic',
    secondaryCta: 'See The Flow'
  }
};

function FlowOpsMark() {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" className="flowops-mark">
      <path d="M21 22H74V32H37L49 52H82V62H49L61 84V118H51V87L21 34V22Z" fill="url(#flowops-mark-left)" />
      <path d="M83 22H114L73 87V118H63V84L90 34H79L65 58L56 53L83 22Z" fill="url(#flowops-mark-right)" />
      <defs>
        <linearGradient id="flowops-mark-left" x1="21" y1="22" x2="61" y2="118" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3AAFA9" />
          <stop offset="100%" stopColor="#48C7C2" />
        </linearGradient>
        <linearGradient id="flowops-mark-right" x1="56" y1="22" x2="114" y2="118" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6F83FF" />
          <stop offset="100%" stopColor="#5B7CFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function HeroImageStack({ settings }) {
  const prefersReducedMotion = useReducedMotion();
  const stackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pointerOffset, setPointerOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReducedMotion) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImageData.length);
    }, settings.heroCycleMs);
    return () => window.clearInterval(timer);
  }, [prefersReducedMotion, settings.heroCycleMs]);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;
    const node = stackRef.current;
    if (!node) return undefined;

    const handleMove = (event) => {
      const rect = node.getBoundingClientRect();
      const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
      const offsetY = (event.clientY - rect.top) / rect.height - 0.5;
      setPointerOffset({
        x: offsetX * settings.pointerStrength,
        y: offsetY * (settings.pointerStrength * 0.8)
      });
    };

    const handleLeave = () => setPointerOffset({ x: 0, y: 0 });
    node.addEventListener('mousemove', handleMove);
    node.addEventListener('mouseleave', handleLeave);
    return () => {
      node.removeEventListener('mousemove', handleMove);
      node.removeEventListener('mouseleave', handleLeave);
    };
  }, [prefersReducedMotion, settings.pointerStrength]);

  return (
    <motion.div
      ref={stackRef}
      className={`proto-fg-stack-shell proto-fg-stack-shell-${settings.key}`}
      animate={prefersReducedMotion ? undefined : settings.heroStackFloat}
      transition={prefersReducedMotion ? undefined : { duration: settings.heroStackDuration, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="proto-fg-stack-glow" />
      {[0, 1, 2].map((distance) => {
        const imageIndex = (activeIndex + distance) % heroImageData.length;
        const image = heroImageData[imageIndex];
        const xBase = distance === 0 ? 0 : distance === 1 ? 42 : 68;
        const yBase = distance === 0 ? -6 : distance === 1 ? 18 : 34;
        const scale = distance === 0 ? 1 : distance === 1 ? 0.92 : 0.84;
        const opacity = distance === 0 ? 1 : distance === 1 ? 0.58 : 0.22;
        const rotate = distance === 0 ? -1.2 : distance === 1 ? 4.8 : 7.1;
        const depthMultiplier = distance === 0 ? 1 : distance === 1 ? 0.65 : 0.32;

        return (
          <motion.div
            key={`${image.src}-${distance}`}
            className={`proto-fg-stack-card proto-fg-stack-card-${distance}`}
            initial={false}
            animate={{
              x: xBase + pointerOffset.x * depthMultiplier,
              y: yBase + pointerOffset.y * depthMultiplier,
              scale,
              opacity,
              rotate,
              zIndex: 5 - distance
            }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="proto-fg-stack-card-frame">
              <div className="proto-fg-stack-window-bar">
                <span />
                <span />
                <span />
              </div>
              <img src={image.src} alt="" loading="eager" decoding="async" style={{ objectPosition: image.objectPosition }} />
              <div className="proto-fg-stack-card-glare" />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

function HeroSection({ settings }) {
  const prefersReducedMotion = useReducedMotion();
  const ctaShadow = settings.key === 'g'
    ? '0 22px 40px rgba(0,0,0,0.24), 0 0 36px rgba(91,124,255,0.18)'
    : '0 14px 30px rgba(0,0,0,0.18), 0 0 22px rgba(58,175,169,0.12)';

  return (
    <section className={`proto-fg-hero proto-fg-hero-${settings.key}`}>
      <div className="proto-fg-hero-grid">
        <div className="proto-fg-copy">
          <motion.div
            className={`proto-fg-hero-badge proto-fg-hero-badge-${settings.heroTone}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
          >
            {settings.heroBadge}
          </motion.div>

          <motion.div
            className="proto-fg-kicker"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <FlowOpsMark />
            <span>FlowOps Studio</span>
          </motion.div>

          <div className="proto-fg-headline-stack" aria-label="More leads. More bookings. Fully automated.">
            {['MORE LEADS.', 'MORE BOOKINGS.', 'FULLY AUTOMATED.'].map((line, idx) => (
              <span key={line} className="proto-fg-headline-mask">
                <motion.span
                  className={`proto-fg-headline-line ${idx === 2 ? 'is-accent' : ''}`}
                  initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.82, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </div>

          <motion.p
            className="proto-fg-subheadline"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
          >
            Capture every enquiry, respond instantly, and turn more leads into confirmed bookings — automatically.
          </motion.p>

          <div className="proto-fg-cta-row">
            <motion.button
              className={`proto-fg-primary-btn proto-fg-primary-btn-${settings.heroTone}`}
              initial={{ opacity: 0, y: 10, scale: 0.985 }}
              animate={{
                opacity: [0, 1, 1, 1],
                y: [10, 0, -2, 0],
                scale: [0.985, 1, 1.02, 1],
                boxShadow: ['0 0 0 rgba(0,0,0,0)', ctaShadow, ctaShadow, ctaShadow]
              }}
              transition={{ duration: 1.2, delay: 0.68, times: [0, 0.34, 0.64, 1], ease: [0.22, 1, 0.36, 1] }}
            >
              Get Your Custom Plan
            </motion.button>
            <motion.button
              className={`proto-fg-secondary-btn proto-fg-secondary-btn-${settings.heroTone}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.62, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {settings.secondaryCta}
            </motion.button>
          </div>

          <motion.p
            className="proto-fg-supporting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.42, delay: 1.04, ease: [0.22, 1, 0.36, 1] }}
          >
            We&apos;ll walk you through how this could work for your business.
          </motion.p>

          <motion.p
            className="proto-fg-micro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.42, delay: 1.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>No pressure.</span> No commitment.
          </motion.p>
        </div>

        <div className="proto-fg-visual">
          <HeroImageStack settings={settings} />
        </div>
      </div>
    </section>
  );
}

function FeatureSection({ section, idx, settings }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const prefersReducedMotion = useReducedMotion();
  const isReverse = idx % 2 === 0;
  const visualDelay = settings.key === 'g' ? 0.18 : 0.1;

  return (
    <section ref={ref} className={`proto-fg-feature ${isReverse ? 'is-reverse' : ''}`}>
      <div className={`proto-fg-feature-grid ${isReverse ? 'is-reverse' : ''}`}>
        <motion.div
          className="proto-fg-feature-copy"
          initial={{ opacity: 0, y: settings.sectionRevealDistance }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: settings.sectionRevealDistance }}
          transition={{ duration: prefersReducedMotion ? 0.2 : settings.sectionRevealDuration, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="proto-fg-feature-descriptor">{section.descriptor}</div>
          <h2>{section.headline}</h2>
          <p>{section.subheading}</p>
          <div className="proto-fg-feature-micro">{section.microline}</div>
        </motion.div>

        <motion.div
          className={`proto-fg-feature-visual-shell ${settings.key === 'g' ? 'is-energetic' : 'is-editorial'}`}
          initial={{ opacity: 0, x: isReverse ? -72 : 72, scale: 0.98 }}
          animate={inView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: isReverse ? -72 : 72, scale: 0.98 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : settings.sectionRevealDuration + 0.08, delay: visualDelay, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="proto-fg-feature-video-frame">
            <video src={section.video} autoPlay loop muted playsInline />
            <div className="proto-fg-feature-glare" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductFeatureSection({ section, idx, settings }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.28 });
  const prefersReducedMotion = useReducedMotion();
  const isReverse = idx % 2 === 1;

  return (
    <section ref={ref} className="proto-fg-product-band">
      <motion.div
        className={`proto-fg-product-shell ${isReverse ? 'is-reverse' : ''}`}
        initial={{ opacity: 0, y: 38 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 38 }}
        transition={{ duration: prefersReducedMotion ? 0.2 : settings.sectionRevealDuration + 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="proto-fg-product-copy">
          <div className="proto-fg-product-meta">
            <div className="proto-fg-feature-descriptor">{section.descriptor}</div>
            <div className="proto-fg-product-index">{String(idx + 1).padStart(2, '0')}</div>
          </div>
          <h2>{section.headline}</h2>
          <p>{section.subheading}</p>
          <div className="proto-fg-feature-micro">{section.microline}</div>
        </div>
        <div className="proto-fg-product-visual">
          <div className="proto-fg-product-window">
            <div className="proto-fg-product-window-bar">
              <span />
              <span />
              <span />
            </div>
            <video src={section.video} autoPlay loop muted playsInline />
            <div className="proto-fg-product-window-glow" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ExampleSection({ settings }) {
  if (settings.key === 'g') {
    return (
      <section className="proto-fg-example proto-fg-example-product">
        <div className="proto-fg-example-product-intro">
          <div className="proto-fg-feature-descriptor">Example System Implementation</div>
          <h2>A premium proof section for the one composed asset that tells the whole story.</h2>
          <p>This version treats the example section like a product showcase rather than a normal content block, so the new asset can anchor trust on its own.</p>
        </div>
        <div className="proto-fg-example-product-stage">
          <div className="proto-fg-example-product-rail left">Lead source</div>
          <div className="proto-fg-example-product-frame">
            <span>Reserved for the new premium composed system asset</span>
          </div>
          <div className="proto-fg-example-product-rail right">Booking outcome</div>
        </div>
      </section>
    );
  }

  return (
    <section className="proto-fg-example">
      <div className="proto-fg-example-copy">
        <div className="proto-fg-feature-descriptor">Example System Implementation</div>
        <h2>See how the whole system works together in one premium flow.</h2>
        <p>
          Placeholder for the new high-fidelity visual asset. This section is reserved for the composed example implementation piece you&apos;ve created.
        </p>
      </div>
      <div className="proto-fg-example-placeholder">
        <div className="proto-fg-example-placeholder-inner">
          <span>Reserved for the new premium composed system asset</span>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection({ settings }) {
  const prefersReducedMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.26 });

  useEffect(() => {
    if (prefersReducedMotion || paused) return undefined;
    const timer = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % howItWorksSteps.length);
    }, settings.cardLoopMs);
    return () => window.clearInterval(timer);
  }, [paused, prefersReducedMotion, settings.cardLoopMs]);

  if (settings.key === 'g') {
    return (
      <section ref={ref} className="proto-fg-how proto-fg-how-product">
        <motion.div
          className="proto-fg-how-intro"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="proto-fg-feature-descriptor">How It Works</div>
          <h2>From first enquiry to fully automated — without the complexity</h2>
          <p>We design and build a tailored system around your business — so everything runs smoothly, automatically, and without manual effort.</p>
        </motion.div>

        <div className="proto-fg-how-product-grid">
          {howItWorksSteps.map((step, idx) => (
            <motion.article
              key={step.label}
              className={`proto-fg-how-product-card ${activeStep === idx ? 'is-active' : ''}`}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.62, delay: idx * 0.12 + 0.12, ease: [0.22, 1, 0.36, 1] }}
              onHoverStart={() => setPaused(true)}
              onHoverEnd={() => setPaused(false)}
            >
              <div className="proto-fg-how-product-top">
                <div className="proto-fg-how-card-label">{step.label}</div>
                <div className="proto-fg-product-index">{String(idx + 1).padStart(2, '0')}</div>
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </motion.article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="proto-fg-how">
      <motion.div
        className="proto-fg-how-intro"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: prefersReducedMotion ? 0.2 : 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="proto-fg-feature-descriptor">How It Works</div>
        <h2>From first enquiry to fully automated — without the complexity</h2>
        <p>We design and build a tailored system around your business — so everything runs smoothly, automatically, and without manual effort.</p>
      </motion.div>

      <div className="proto-fg-how-grid">
        {howItWorksSteps.map((step, idx) => (
          <motion.article
            key={step.label}
            className={`proto-fg-how-card ${activeStep === idx ? 'is-active' : ''} ${idx === howItWorksSteps.length - 1 ? 'is-last' : ''}`}
            initial={{ opacity: 0, y: 24, scale: 0.985 }}
            animate={inView ? {
              opacity: 1,
              y: activeStep === idx ? -4 : 0,
              scale: activeStep === idx ? 1.015 : 1
            } : { opacity: 0, y: 24, scale: 0.985 }}
            transition={{
              duration: prefersReducedMotion ? 0.2 : 0.6,
              delay: prefersReducedMotion ? 0 : idx * 0.14 + 0.16,
              ease: [0.22, 1, 0.36, 1]
            }}
            onHoverStart={() => setPaused(true)}
            onHoverEnd={() => setPaused(false)}
          >
            <div className="proto-fg-how-card-label">{step.label}</div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function FAQSection({ settings }) {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.24 });

  if (settings.key === 'g') {
    return (
      <section ref={ref} className={`proto-fg-faq proto-fg-faq-${settings.faqToneClass} proto-fg-faq-product`}>
        <motion.div
          className="proto-fg-faq-intro"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="proto-fg-feature-descriptor">FAQ</div>
          <h2>Everything people usually want to know before they commit.</h2>
          <p>Clear answers, low friction, and no inflated claims — just enough detail to understand how the system fits your business.</p>
        </motion.div>

        <div className="proto-fg-faq-product-grid">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.button
                key={item.question}
                type="button"
                className={`proto-fg-faq-item ${isOpen ? 'is-open' : ''}`}
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.56, delay: idx * 0.06 + 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="proto-fg-faq-question-row">
                  <span>{item.question}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.22 }}>+</motion.span>
                </div>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      className="proto-fg-faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className={`proto-fg-faq proto-fg-faq-${settings.faqToneClass}`}>
      <motion.div
        className="proto-fg-faq-intro"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="proto-fg-feature-descriptor">FAQ</div>
        <h2>Everything people usually want to know before they commit.</h2>
        <p>Clear answers, low friction, and no inflated claims — just enough detail to understand how the system fits your business.</p>
      </motion.div>

      <div className="proto-fg-faq-list">
        {faqItems.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.button
              key={item.question}
              type="button"
              className={`proto-fg-faq-item ${isOpen ? 'is-open' : ''}`}
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.54, delay: idx * 0.07 + 0.14, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="proto-fg-faq-question-row">
                <span>{item.question}</span>
                <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.22 }}>
                  +
                </motion.span>
              </div>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    className="proto-fg-faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="proto-fg-footer">
      <div className="proto-fg-footer-inner">
        <div className="proto-fg-kicker">
          <FlowOpsMark />
          <span>FlowOps Studio</span>
        </div>
        <p>Footer placeholder for final links, contact details, legal pages, and launch-ready trust details.</p>
      </div>
    </footer>
  );
}

export default function PrototypeVariant({ variant }) {
  const settings = useMemo(() => variantSettings[variant] ?? variantSettings.f, [variant]);
  const heroRef = useRef(null);
  const [showScrolledNav, setShowScrolledNav] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = heroRef.current?.offsetHeight ?? window.innerHeight;
      setShowScrolledNav(window.scrollY > heroHeight - 120);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className={`flowops-app proto-fg proto-fg-${settings.key}`}>
      <motion.nav
        className={`proto-nav scrolled-nav ${showScrolledNav ? 'is-visible' : ''}`}
        initial={false}
        animate={showScrolledNav ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="nav-brand nav-brand-primary">
          <div className="nav-brand-lockup">
            <FlowOpsMark />
            <span>FlowOps Studio</span>
          </div>
        </div>
        <div className="scrolled-nav-actions">
          <button type="button" className="secondary-nav-btn">How It Works</button>
          <button type="button" className="nav-cta-btn">Get Your Custom Plan</button>
        </div>
      </motion.nav>

      <div ref={heroRef}>
        <HeroSection settings={settings} />
      </div>

      <main className="proto-fg-main">
        {featureSections.map((section, idx) => (
          settings.key === 'g'
            ? <ProductFeatureSection key={section.descriptor} section={section} idx={idx} settings={settings} />
            : <FeatureSection key={section.descriptor} section={section} idx={idx} settings={settings} />
        ))}
        <ExampleSection settings={settings} />
        <HowItWorksSection settings={settings} />
        <FAQSection settings={settings} />
      </main>

      <FooterSection />
    </div>
  );
}
