import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

const sectionData = [
  {
    headline: "Catch every opportunity, day or night.",
    subheading: "We build systems that consolidate your DMs, forms, and inbound calls into one flawless capture net.",
    microline: "Never let another lead slip through the cracks.",
    video: "/assets/animations/flowops-lead-capture-v1.mp4",
    bgImage: "/assets/section-stills/flowops-lead-capture-v1-still.jpg"
  },
  {
    headline: "Instant answers that sound like you.",
    subheading: "Our custom systems act as your best front-desk employee—answering questions, qualifying leads, and handling objections 24/7.",
    microline: "Speed meets personalization for every customer interaction.",
    video: "/assets/animations/flowops-ai-conversation-v1.mp4",
    bgImage: "/assets/section-stills/flowops-ai-conversation-v1-still.jpg"
  },
  {
    headline: "Turn conversations into calendar bookings.",
    subheading: "Your system is designed to seamlessly guide qualified leads straight into your schedule, so you can focus on the actual work.",
    microline: "Wake up to new appointments booked automatically.",
    video: "/assets/animations/flowops-booking-conversion-v1.mp4",
    bgImage: "/assets/section-stills/flowops-booking-conversion-v1-still.jpg"
  },
  {
    headline: "Less manual work. More time to scale.",
    subheading: "Behind the scenes, the system connects your tools. Contracts are sent, CRM records are updated, and reminders go out without you lifting a finger.",
    microline: "A complete operating engine built perfectly for your workflows.",
    video: "/assets/animations/flowops-automation-system-v1.mp4",
    bgImage: "/assets/section-stills/flowops-automation-system-v1-still.jpg"
  },
  {
    headline: "A premium experience from the first click.",
    subheading: "We design and build high-converting, visually stunning websites that house your new engine—creating an unforgettable first impression.",
    microline: "A powerful system needs a world-class storefront.",
    video: "/assets/animations/flowops-frontend-experience-v1.mp4",
    bgImage: "/assets/section-stills/flowops-frontend-experience-v1-still.jpg"
  }
];

const heroImageData = [
  { src: "/assets/section-stills/flowops-lead-capture-v1-still.jpg", objectPosition: "50% 56%" },
  { src: "/assets/section-stills/flowops-ai-conversation-v1-still.jpg", objectPosition: "50% 50%" },
  { src: "/assets/section-stills/flowops-booking-conversion-v1-still.jpg", objectPosition: "50% 50%" },
  { src: "/assets/section-stills/flowops-automation-system-v1-still.jpg", objectPosition: "50% 56%" },
  { src: "/assets/section-stills/flowops-frontend-experience-v1-still.jpg", objectPosition: "50% 50%" }
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

const finalizedSectionData = [
  {
    descriptor: "AI-Powered Lead Capture",
    headline: "Capture every enquiry automatically — even when you’re offline",
    subheading: "We build systems that bring together your DMs, forms, and inbound calls into one seamless capture flow — so every opportunity is tracked and handled.",
    microline: "Never miss another opportunity again",
    video: "/assets/animations/flowops-lead-capture-v1.mp4",
    bgImage: "/assets/section-stills/flowops-lead-capture-v1-still.jpg"
  },
  {
    descriptor: "AI Chat & Voice Systems",
    headline: "Respond instantly and engage every lead without lifting a finger",
    subheading: "Your system acts as your front desk — answering questions, qualifying leads, and guiding conversations in real time across chat and voice.",
    microline: "Conversations handled for you, 24/7",
    video: "/assets/animations/flowops-ai-conversation-v1.mp4",
    bgImage: "/assets/section-stills/flowops-ai-conversation-v1-still.jpg"
  },
  {
    descriptor: "Automated Conversion & Booking",
    headline: "Automatically qualify leads and turn them into confirmed bookings",
    subheading: "Qualified leads are guided through to the next step — whether that’s a call, appointment, or reservation — and booked directly into your calendar.",
    microline: "Turn interest into confirmed bookings",
    video: "/assets/animations/flowops-booking-conversion-v1.mp4",
    bgImage: "/assets/section-stills/flowops-booking-conversion-v1-still.jpg"
  },
  {
    descriptor: "Workflow Automation System",
    headline: "Eliminate manual work and let your systems run the day-to-day",
    subheading: "From follow-ups to internal processes, everything is handled automatically — keeping your business moving without constant input.",
    microline: "Run your business without constant effort",
    video: "/assets/animations/flowops-automation-system-v1.mp4",
    bgImage: "/assets/section-stills/flowops-automation-system-v1-still.jpg"
  },
  {
    descriptor: "High-Converting Website",
    headline: "Turn more visitors into leads with a high-performing website",
    subheading: "We design and build fast, modern websites that capture attention, build trust, and connect seamlessly with your system.",
    microline: "A website built to convert, not just look good",
    video: "/assets/animations/flowops-frontend-experience-v1.mp4",
    bgImage: "/assets/section-stills/flowops-frontend-experience-v1-still.jpg"
  }
];

function getStackPose(distance) {
  switch (distance) {
    case 0:
      return {
        x: 0,
        y: -4,
        scale: 1,
        opacity: 1,
        rotate: -1.2,
        zIndex: 5,
        filter: 'blur(0px) saturate(1) brightness(1)'
      };
    case 1:
      return {
        x: 46,
        y: 22,
        scale: 0.9,
        opacity: 0.48,
        rotate: 5.4,
        zIndex: 4,
        filter: 'blur(0.55px) saturate(0.86) brightness(0.74)'
      };
    case 2:
      return {
        x: 72,
        y: 34,
        scale: 0.82,
        opacity: 0.18,
        rotate: 7.6,
        zIndex: 3,
        filter: 'blur(1.2px) saturate(0.72) brightness(0.62)'
      };
    case 3:
      return {
        x: 84,
        y: 44,
        scale: 0.91,
        opacity: 0,
        rotate: 8,
        zIndex: 2,
        filter: 'blur(2px) saturate(0.78) brightness(0.64)',
        boxShadow: '0 8px 18px rgba(0,0,0,0.16)'
      };
    default:
      return {
        x: -28,
        y: 86,
        scale: 0.84,
        opacity: 0,
        rotate: -5.4,
        zIndex: 1,
        filter: 'blur(2px) saturate(0.78) brightness(0.64)',
        boxShadow: '0 8px 18px rgba(0,0,0,0.16)'
      };
  }
}

function HeroImageStack() {
  const prefersReducedMotion = false;
  const stackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [outgoingCard, setOutgoingCard] = useState(null);
  const [pointerOffset, setPointerOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => {
        setOutgoingCard({ index: current, nonce: Date.now() });
        return (current + 1) % heroImageData.length;
      });
    }, 3400);
    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!outgoingCard) return undefined;
    const timer = window.setTimeout(() => {
      setOutgoingCard(null);
    }, 760);

    return () => window.clearTimeout(timer);
  }, [outgoingCard]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const node = stackRef.current;
    if (!node) return;

    const handleMove = (event) => {
      const rect = node.getBoundingClientRect();
      const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
      const offsetY = (event.clientY - rect.top) / rect.height - 0.5;
      setPointerOffset({ x: offsetX * 18, y: offsetY * 16 });
    };

    const handleLeave = () => {
      setPointerOffset({ x: 0, y: 0 });
    };

    node.addEventListener('mousemove', handleMove);
    node.addEventListener('mouseleave', handleLeave);
    return () => {
      node.removeEventListener('mousemove', handleMove);
      node.removeEventListener('mouseleave', handleLeave);
    };
  }, [prefersReducedMotion]);

  return (
    <motion.div
      ref={stackRef}
      className="hero-stack-shell"
      animate={prefersReducedMotion ? undefined : { y: [0, -14, -6, 0], x: [0, 4, -3, 0], rotate: [0, -0.8, 0.4, 0] }}
      transition={prefersReducedMotion ? undefined : { duration: 10.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="hero-stack-glow" />
      {outgoingCard && (
        <motion.div
          key={`outgoing-${outgoingCard.index}-${outgoingCard.nonce}`}
          className="hero-stack-card"
          initial={{
            x: pointerOffset.x,
            y: -4 + pointerOffset.y,
            scale: 1,
            opacity: 1,
            rotate: -1.2,
            zIndex: 4,
            filter: 'blur(0px) saturate(1) brightness(1)'
          }}
          animate={{
            x: 24 + pointerOffset.x * 0.35,
            y: 16 + pointerOffset.y * 0.35,
            scale: 0.92,
            opacity: 0.34,
            rotate: 3.8,
            zIndex: 3,
            filter: 'blur(0.85px) saturate(0.84) brightness(0.7)'
          }}
          transition={{
            duration: 0.62,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <div className="hero-stack-card-frame">
            <div className="hero-stack-window-bar">
              <span />
              <span />
              <span />
            </div>
            <img
              src={heroImageData[outgoingCard.index].src}
              alt=""
              loading="eager"
              decoding="async"
              style={{ objectPosition: heroImageData[outgoingCard.index].objectPosition }}
            />
            <div className="hero-stack-card-glare" />
          </div>
        </motion.div>
      )}
      {[0, 1, 2].map((distance) => {
        const imageIndex = (activeIndex + distance) % heroImageData.length;
        const image = heroImageData[imageIndex];
        const pose = getStackPose(distance);
        const multiplier = distance === 0 ? 1 : distance === 1 ? 0.66 : 0.4;

        return (
          <motion.div
            key={`${image.src}-${distance}`}
            className="hero-stack-card"
            initial={false}
            animate={{
              x: pose.x + pointerOffset.x * multiplier,
              y: pose.y + pointerOffset.y * multiplier,
              scale: pose.scale,
              opacity: pose.opacity,
              rotate: pose.rotate,
              zIndex: pose.zIndex,
              filter: pose.filter
            }}
            transition={{
              duration: prefersReducedMotion ? 0.3 : 0.68,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <div className="hero-stack-card-frame">
              <div className="hero-stack-window-bar">
                <span />
                <span />
                <span />
              </div>
            <img
              src={image.src}
              alt=""
              loading="eager"
              decoding="async"
              style={{ objectPosition: image.objectPosition }}
            />
              <div className="hero-stack-card-glare" />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

const CinematicForeground = ({ section, idx }) => {
  const ref = useRef(null);
  const visualRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const videoFromLeft = idx % 2 === 0;
  const visualInView = useInView(visualRef, { once: true, amount: 0.5 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Let the background remain present across the whole section while it
  // drifts more slowly than the foreground for a reference-style parallax feel.
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10vh', '10vh']);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.02, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], ['10vh', '0vh', '-10vh']);
  const contentOpacity = useTransform(scrollYProgress, [0.12, 0.24, 0.76, 0.88], [0, 1, 1, 0]);
  const videoScale = useTransform(scrollYProgress, [0.12, 0.5, 0.88], [0.97, 1, 0.985]);

  return (
    <section
      ref={ref}
      className={`cinematic-native-scene ${idx === 0 ? 'first-scene' : ''} ${idx % 2 === 0 ? 'reverse' : ''} ${idx % 2 !== 0 ? 'scene-blackout' : ''}`}
    >
      <motion.div className="scene-bg-shell">
        <motion.div
          className="scene-bg-image"
          style={{ backgroundImage: `url(${section.bgImage})`, y: bgY, scale: bgScale }}
        />
      </motion.div>

      <motion.div 
        className="cinematic-content"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="cinematic-text">
          <div className="microline">{section.descriptor}</div>
          <h2>{section.headline}</h2>
          <p>{section.subheading}</p>
          <div className="microline alt">{section.microline}</div>
        </div>

        <motion.div
          ref={visualRef}
          className="cinematic-visual"
          style={{ scale: videoScale }}
        >
          <motion.div
            className="premium-bento-frame"
            initial={false}
            animate={
              prefersReducedMotion || visualInView
                ? { opacity: 1, x: 0, y: 0 }
                : { opacity: 0, x: videoFromLeft ? -140 : 140, y: 0 }
            }
            transition={{
              duration: prefersReducedMotion ? 0.2 : 0.95,
              delay: prefersReducedMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <video src={section.video} autoPlay loop muted playsInline />
            <div className="frame-glare" />
            <div className="frame-border" />
          </motion.div>
          </motion.div>
      </motion.div>
    </section>
  );
};

const FeatureSequence = () => {
  return (
    <div className="feature-sequence-wrapper">
      <div className="feature-sequence-overlay" />
      <div className="sequence-foreground">
        {finalizedSectionData.map((section, idx) => (
          <CinematicForeground key={`fg-${idx}`} section={section} idx={idx} />
        ))}
      </div>
    </div>
  );
};

const HowItWorksSection = ({ sectionRef, onPrimaryCta }) => {
  const prefersReducedMotion = useReducedMotion();
  const localSectionRef = useRef(null);
  const cardsRef = useRef(null);
  const sectionInView = useInView(localSectionRef, { once: true, amount: 0.35 });
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.72 });
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsActivated, setCardsActivated] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || isPaused) return undefined;
    const timer = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % howItWorksSteps.length);
    }, 2200);

    return () => window.clearInterval(timer);
    }, [isPaused, prefersReducedMotion]);

  useEffect(() => {
    if (!cardsInView) return undefined;

    const timer = window.setTimeout(() => {
      setCardsActivated(true);
    }, 340);

    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion, cardsInView]);

    const setSectionRefs = (node) => {
      localSectionRef.current = node;
      if (!sectionRef) return;
      sectionRef.current = node;
    };

    return (
      <section ref={setSectionRefs} className="how-it-works-section">
        <div className="how-it-works-inner">
          <div className={`how-it-works-intro ${sectionInView ? 'is-revealed' : ''}`}>
          <div className="microline">How It Works</div>
          <h2>From first enquiry to fully automated — without the complexity</h2>
          <p>
            We design and build a tailored system around your business — so everything runs smoothly, automatically, and without manual effort.
          </p>
          </div>

          <div
            ref={cardsRef}
            className={`how-it-works-grid ${sectionInView ? 'is-visible' : ''} ${cardsActivated ? 'is-revealed' : ''}`}
          >
            {howItWorksSteps.map((step, idx) => (
              <div
                key={step.label}
                className={`how-it-works-card-entry ${cardsActivated ? 'is-revealed' : ''}`}
                style={prefersReducedMotion ? undefined : { transitionDelay: `${idx * 220}ms` }}
              >
                <motion.article
                  className={`how-it-works-card ${activeStep === idx ? 'is-active' : ''} ${idx === howItWorksSteps.length - 1 ? 'is-optimise' : ''}`}
                  initial={false}
                  animate={
                    prefersReducedMotion
                      ? { y: activeStep === idx ? -4 : 0, scale: activeStep === idx ? 1.02 : 1 }
                      : idx === howItWorksSteps.length - 1
                        ? {
                            y: activeStep === idx ? -4 : 0,
                            scale: activeStep === idx ? 1.02 : 1,
                            boxShadow: activeStep === idx
                              ? '0 30px 66px rgba(0,0,0,0.32), 0 0 0 1px rgba(145, 186, 255, 0.24) inset, 0 0 34px rgba(120,160,255,0.18)'
                              : ['0 20px 50px rgba(0,0,0,0.22)', '0 20px 50px rgba(0,0,0,0.22)', '0 20px 50px rgba(0,0,0,0.22), 0 0 24px rgba(120,160,255,0.1)', '0 20px 50px rgba(0,0,0,0.22)'],
                            borderColor: activeStep === idx ? 'rgba(145, 186, 255, 0.32)' : 'rgba(255,255,255,0.08)'
                          }
                        : {
                            y: activeStep === idx ? -4 : 0,
                            scale: activeStep === idx ? 1.02 : 1,
                            boxShadow: activeStep === idx
                              ? '0 30px 66px rgba(0,0,0,0.32), 0 0 0 1px rgba(145, 186, 255, 0.24) inset, 0 0 34px rgba(120,160,255,0.18)'
                              : '0 20px 50px rgba(0,0,0,0.22)',
                            borderColor: activeStep === idx ? 'rgba(145, 186, 255, 0.32)' : 'rgba(255,255,255,0.08)'
                          }
                  }
                  transition={{
                    duration: prefersReducedMotion ? 0.2 : 0.72,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                whileHover={{
                  y: -4,
                  scale: activeStep === idx ? 1.025 : 1.01,
                  boxShadow: '0 28px 62px rgba(0,0,0,0.3), 0 0 0 1px rgba(145, 186, 255, 0.26) inset, 0 0 28px rgba(120,160,255,0.16)'
                }}
              onHoverStart={() => setIsPaused(true)}
              onHoverEnd={() => setIsPaused(false)}
              >
                <div
                  className={`how-it-works-card-sweep ${cardsActivated ? 'is-revealed' : ''}`}
                  style={prefersReducedMotion ? undefined : { animationDelay: `${180 + idx * 220}ms` }}
                />
                <div className="how-it-works-step">{step.label}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                </motion.article>
                {idx === 0 ? (
                  <button type="button" className="how-it-works-card-cta" onClick={onPrimaryCta}>
                    Get Your Custom Plan
                  </button>
                ) : null}
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

const FooterPlaceholder = () => {
  return (
    <footer className="site-footer-placeholder">
      <div className="site-footer-inner">
        <div className="nav-brand-lockup">
          <FlowOpsMark />
          <span>FlowOps Studio</span>
        </div>
        <p>Footer placeholder for final links, contact details, and legal information.</p>
      </div>
    </footer>
  );
};

function FlowOpsMark() {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" className="flowops-mark">
      <path
        d="M21 22H74V32H37L49 52H82V62H49L61 84V118H51V87L21 34V22Z"
        fill="url(#flowops-mark-left)"
      />
      <path
        d="M83 22H114L73 87V118H63V84L90 34H79L65 58L56 53L83 22Z"
        fill="url(#flowops-mark-right)"
      />
      <defs>
        <linearGradient id="flowops-mark-left" x1="21" y1="22" x2="61" y2="118" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#48C7C2" />
          <stop offset="100%" stopColor="#43B3B6" />
        </linearGradient>
        <linearGradient id="flowops-mark-right" x1="56" y1="22" x2="114" y2="118" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6F83FF" />
          <stop offset="100%" stopColor="#5B74F0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function PrototypeD({ onBack }) {
  const reduceMotionForHero = useReducedMotion();
  const heroRef = useRef(null);
  const howItWorksRef = useRef(null);
  const [showScrolledNav, setShowScrolledNav] = useState(false);

  const ctaRestingShadow = '0 12px 26px rgba(0,0,0,0.22), 0 0 0 1px rgba(255,255,255,0.05) inset, 0 0 18px rgba(72, 199, 194, 0.08)';
  const ctaActivatedShadow = '0 22px 42px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.08) inset, 0 0 44px rgba(72, 199, 194, 0.24)';
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
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

  const scrollToHowItWorks = () => {
    howItWorksRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToHeroCTA = () => {
    heroRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="flowops-app proto-d">
      <motion.nav
        className={`proto-nav scrolled-nav ${showScrolledNav ? 'is-visible' : ''}`}
        initial={false}
        animate={showScrolledNav ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="nav-brand nav-brand-primary">
          <div className="nav-brand-lockup">
            <FlowOpsMark />
            <span>FlowOps Studio</span>
          </div>
        </div>
        <div className="scrolled-nav-actions">
          <button type="button" className="secondary-nav-btn" onClick={scrollToHowItWorks}>How It Works</button>
          <button type="button" className="nav-cta-btn" onClick={scrollToHeroCTA}>Get Your Custom Plan</button>
        </div>
      </motion.nav>

      <section ref={heroRef} className="cinematic-hero">
        <div className="hero-gradient-layer" />
        <div className="hero-glow hero-glow-blue" />
        <div className="hero-glow hero-glow-violet" />

        <div className="hero-content hero-two-column">
          <div className="hero-copy-block hero-copy-left" key="hero-reveal-v4">
            <motion.div
              className="hero-brand-kicker"
              initial={reduceMotionForHero ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.62,
                delay: 0.04,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <FlowOpsMark />
              <span>FlowOps Studio</span>
            </motion.div>
            <div className="hero-headline-stack" aria-label="More leads. More bookings. Fully automated.">
              {['MORE LEADS.', 'MORE BOOKINGS.', 'FULLY AUTOMATED.'].map((line, idx) => (
                <motion.span
                  key={line}
                  className="hero-headline-line-mask"
                  initial={reduceMotionForHero ? { opacity: 0 } : { opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.84,
                    delay: idx * 0.12,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <span className={`hero-headline-line ${idx === 2 ? 'hero-headline-accent' : ''}`}>
                    {line}
                  </span>
                </motion.span>
              ))}
            </div>

            <motion.p
              className="hero-subheadline"
              initial={reduceMotionForHero ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.94,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              Capture every enquiry, respond instantly, and turn more leads into confirmed bookings &mdash; automatically.
            </motion.p>

            <div className="cta-group hero-cta-group">
              <motion.button
                className="primary-btn hero-primary-btn"
                initial={reduceMotionForHero ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.985 }}
                animate={reduceMotionForHero ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: 'brightness(1.05)'
                } : {
                  opacity: [0, 1, 1, 1],
                  y: [12, 0, -3, 0],
                  scale: [0.985, 1, 1.065, 1],
                  boxShadow: [ctaRestingShadow, ctaRestingShadow, ctaActivatedShadow, ctaRestingShadow],
                  filter: ['brightness(1)', 'brightness(1)', 'brightness(1.18)', 'brightness(1)']
                }}
                transition={{
                  duration: reduceMotionForHero ? 0.45 : 1.26,
                  delay: reduceMotionForHero ? 0.34 : 1.08,
                  times: reduceMotionForHero ? undefined : [0, 0.34, 0.64, 1],
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                Get Your Custom Plan
              </motion.button>

              <motion.p
                className="hero-supporting-line"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.45,
                  delay: 1.34,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                We&apos;ll walk you through how this could work for your business.
              </motion.p>

              <motion.div
                className="hero-microline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 1.42,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <span className="hero-microline-accent">No pressure.</span> No commitment.
              </motion.div>
            </div>
          </div>
          <div className="hero-visual-column">
            <HeroImageStack />
          </div>
        </div>
      </section>

      {/* Feature Narrative Sequence */}
      <FeatureSequence />
        <HowItWorksSection sectionRef={howItWorksRef} onPrimaryCta={scrollToHeroCTA} />
      <FooterPlaceholder />
    </div>
  );
}
