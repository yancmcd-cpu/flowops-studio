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

export default function PrototypeA({ onBack }) {
  return (
    <div className="flowops-app proto-a">
      <nav className="proto-nav">
        <button onClick={onBack} className="back-btn"><ArrowLeft size={16} /> Back to Prototypes</button>
        <div className="badge">Prototype A: Bento Feature Cards</div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Stop losing leads.<br />Start booking automatically.</h1>
          <p>We design and build custom automation systems that capture every opportunity, respond instantly, and turn conversations into calendar bookings.</p>
        </div>
      </section>

      <div className="bento-container">
        {textContent.map((section, idx) => (
          <section key={idx} className={`bento-section ${idx % 2 !== 0 ? 'reverse' : ''}`}>
            <div className="bento-text">
              <div className="step-indicator">Step 0{idx + 1}</div>
              <h2>{section.headline}</h2>
              <p>{section.subheading}</p>
              <div className="microline alt">{section.microline}</div>
            </div>
            <div className="bento-visual">
              <div className="browser-frame">
                <div className="browser-dots"><span></span><span></span><span></span></div>
                <video src={section.video} autoPlay loop muted playsInline />
              </div>
            </div>
          </section>
        ))}
      </div>

    </div>
  );
}
