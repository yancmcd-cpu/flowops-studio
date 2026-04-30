import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, ArrowLeft } from 'lucide-react';

const textContent = [
  {
    headline: "Catch every opportunity, day or night.",
    subheading: "We build systems that consolidate your DMs, forms, and inbound calls into one flawless capture net.",
    microline: "Never let another lead slip through the cracks.",
    video: "/assets/animations/flowops-lead-capture-v1.mp4"
  },
  {
    headline: "Instant answers that sound like you.",
    subheading: "Our custom systems act as your best front-desk employee—answering questions, qualifying leads, and handling objections 24/7.",
    microline: "Speed meets personalization for every customer interaction.",
    video: "/assets/animations/flowops-ai-conversation-v1.mp4"
  },
  {
    headline: "Turn conversations into calendar bookings.",
    subheading: "Your system is designed to seamlessly guide qualified leads straight into your schedule, so you can focus on the actual work.",
    microline: "Wake up to new appointments booked automatically.",
    video: "/assets/animations/flowops-booking-conversion-v1.mp4"
  }
];

export default function PrototypeB({ onBack }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeSegment, setActiveSegment] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      // 3 segments
      if (v < 0.33) setActiveSegment(0);
      else if (v < 0.66) setActiveSegment(1);
      else setActiveSegment(2);
    });
  }, [scrollYProgress]);

  return (
    <div className="flowops-app proto-b">
      <nav className="proto-nav">
        <button onClick={onBack} className="back-btn"><ArrowLeft size={16} /> Back to Prototypes</button>
        <div className="badge">Prototype B: Evolving Central Stage</div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Stop losing leads.<br />Start booking automatically.</h1>
        </div>
      </section>

      {/* Sticky Region */}
      <section ref={containerRef} className="evolving-stage-container">
        <div className="sticky-stage">
          
          <div className="stage-content">
            <div className="stage-text-col">
              {textContent.map((section, idx) => {
                const isActive = activeSegment === idx;
                return (
                  <div key={idx} className={`stage-text-block ${isActive ? 'active' : ''}`}>
                    <div className="step-indicator">Step 0{idx + 1}</div>
                    <h2>{section.headline}</h2>
                    <p>{section.subheading}</p>
                    <div className="microline alt">{section.microline}</div>
                  </div>
                );
              })}
            </div>
            
            <div className="stage-visual-col">
              <div className="premium-player-frame">
                {textContent.map((section, idx) => (
                   <motion.video 
                    key={idx}
                    src={section.video} 
                    autoPlay loop muted playsInline
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeSegment === idx ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="stage-video"
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
