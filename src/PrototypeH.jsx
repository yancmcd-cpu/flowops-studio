import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarDays, Check, Globe, MessageCircleMore, MessageSquare, PhoneCall } from 'lucide-react';

const INPUT_ITEMS = [
  { id: 'whatsapp', icon: MessageCircleMore, placement: 'top', tint: 'blue' },
  { id: 'phone', icon: PhoneCall, placement: 'upper', tint: 'purple' },
  { id: 'chat', icon: MessageSquare, placement: 'lower', tint: 'blue' },
  { id: 'web', icon: Globe, placement: 'bottom', tint: 'blue' }
];

const PROCESS_STEPS = [
  { id: 'capture', label: 'Capture', fillCount: 2 },
  { id: 'qualify', label: 'Qualify', fillCount: 5 },
  { id: 'confirm', label: 'Confirm', fillCount: 9 }
];

function FlowNode({ item, stepId }) {
  const Icon = item.icon;
  const motionMap = {
    top: { x: [0, 1.2, -0.5, 0], y: [0, -3.1, -1, 0], rotate: [0, 2, -1.1, 0] },
    upper: { x: [0, 0.8, -1.1, 0], y: [0, -2.5, 0.9, 0], rotate: [0, -1.7, 1.2, 0] },
    lower: { x: [0, -0.85, 0.95, 0], y: [0, 2.3, -0.7, 0], rotate: [0, 1.35, -0.9, 0] },
    bottom: { x: [0, 1, -0.65, 0], y: [0, 2.9, 1, 0], rotate: [0, -1.2, 1, 0] }
  };
  const drift = motionMap[item.placement];
  const durationMap = {
    top: 6.4,
    upper: 6.9,
    lower: 7.2,
    bottom: 6.6
  };

  return (
    <motion.div
      className={`flow-h-node flow-h-node-${item.placement}`}
      animate={{
        x: drift.x,
        y: drift.y,
        rotate: drift.rotate
      }}
      transition={{
        duration: durationMap[item.placement],
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop'
      }}
      whileHover={{
        scale: 1.04,
        rotate: drift.rotate[1],
        transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] }
      }}
    >
      <div className={`flow-h-node-ring flow-h-node-ring-${item.tint} flow-h-node-ring-${stepId}`} />
      <Icon strokeWidth={1.8} />
    </motion.div>
  );
}

function OutputCluster({ step }) {
  const filledCells = useMemo(() => {
    return Array.from({ length: 9 }, (_, index) => index < step.fillCount);
  }, [step]);

  return (
    <motion.div
      className={`flow-h-calendar-card flow-h-calendar-card-${step.id}`}
      animate={
        step.id === 'confirm'
          ? {
              y: [0, -2, 0, 1, 0],
              scale: [1, 1.015, 1, 1.008, 1],
              boxShadow: [
                '0 24px 44px rgba(0,0,0,0.34), 0 0 0 1px rgba(255,255,255,0.025) inset',
                '0 28px 56px rgba(0,0,0,0.38), 0 0 0 1px rgba(255,255,255,0.04) inset',
                '0 24px 44px rgba(0,0,0,0.34), 0 0 0 1px rgba(255,255,255,0.025) inset',
                '0 26px 50px rgba(0,0,0,0.36), 0 0 0 1px rgba(255,255,255,0.03) inset',
                '0 24px 44px rgba(0,0,0,0.34), 0 0 0 1px rgba(255,255,255,0.025) inset'
              ]
            }
          : {
              y: [0, -2, 0, 1, 0],
              scale: [1, 1.01, 1, 1.006, 1]
            }
      }
      transition={{ duration: 6.4, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' }}
      whileHover={{
        y: -3,
        scale: 1.018,
        transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] }
      }}
    >
      <div className="flow-h-calendar-window-bar" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="flow-h-calendar-head">
        <div className="flow-h-calendar-badge">
          <CalendarDays size={16} strokeWidth={1.8} />
        </div>
        <div className="flow-h-calendar-title-group">
          <span>Bookings Secured</span>
        </div>
      </div>
      <div className="flow-h-calendar-grid">
        {filledCells.map((filled, index) => (
          <motion.div
            key={index}
            className={`flow-h-calendar-cell ${filled ? 'is-filled' : ''}`}
            initial={false}
            animate={{
              opacity: filled ? 1 : 0.16,
              scale: filled ? 1 : 0.98
            }}
            transition={{
              duration: 0.34,
              delay: filled ? index * 0.08 : 0,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            {filled ? <Check size={11} strokeWidth={2.4} /> : null}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function FlowConnector({ className, isActive, delay = 0 }) {
  return (
    <div className={`flow-h-connector ${className} ${isActive ? 'is-active' : ''}`}>
      <div className="flow-h-connector-line" />
      <motion.div
        className="flow-h-connector-pulse"
        animate={
          isActive
            ? {
                opacity: [0, 1, 1, 0],
                x: ['0%', '100%'],
                scaleX: [0.82, 1, 1, 0.94]
              }
            : {
                opacity: 0
              }
        }
        transition={{
          duration: 2.2,
          delay,
          ease: [0.22, 1, 0.36, 1],
          repeat: isActive ? Infinity : 0,
          repeatDelay: 0
        }}
      />
    </div>
  );
}

export function FlowHeroAnimation() {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStepIndex((current) => (current + 1) % PROCESS_STEPS.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, []);

  const currentStep = PROCESS_STEPS[stepIndex];
  const isPulseTraveling = true;

  return (
    <div className="flow-h-animation" aria-hidden="true">
      <div className="flow-h-flow-scene">
        <div className="flow-h-sources-cluster">
          {INPUT_ITEMS.map((item) => (
            <FlowNode key={item.id} item={item} stepId={currentStep.id} />
          ))}
        </div>
        <FlowConnector className="flow-h-connector-left" isActive={currentStep.id !== 'confirm'} />
        <div className="flow-h-system-cluster">
          <motion.div
            className={`flow-h-system-node flow-h-system-node-${currentStep.id}`}
            animate={
              currentStep.id === 'confirm'
                ? {
                    y: [0, -2, 0, 1, 0],
                    rotate: [0, 1.4, 0, -1, 0],
                    scale: [1, 1.08, 1, 1.04, 1],
                    boxShadow: [
                      '0 0 0 1px rgba(255,255,255,0.08) inset, 0 0 24px rgba(120,164,255,0.14), 0 24px 44px rgba(0,0,0,0.34)',
                      '0 0 0 1px rgba(255,255,255,0.12) inset, 0 0 42px rgba(120,164,255,0.26), 0 24px 44px rgba(0,0,0,0.34)',
                      '0 0 0 1px rgba(255,255,255,0.08) inset, 0 0 24px rgba(120,164,255,0.14), 0 24px 44px rgba(0,0,0,0.34)',
                      '0 0 0 1px rgba(255,255,255,0.1) inset, 0 0 34px rgba(120,164,255,0.2), 0 24px 44px rgba(0,0,0,0.34)',
                      '0 0 0 1px rgba(255,255,255,0.08) inset, 0 0 24px rgba(120,164,255,0.14), 0 24px 44px rgba(0,0,0,0.34)'
                    ]
                  }
                : currentStep.id === 'qualify'
                  ? {
                      y: [0, -2, 0, 1, 0],
                      rotate: [0, 1.2, 0, -0.8, 0],
                      scale: [1, 1.05, 1, 1.03, 1],
                      boxShadow: [
                        '0 0 0 1px rgba(255,255,255,0.08) inset, 0 0 20px rgba(120,164,255,0.12), 0 24px 44px rgba(0,0,0,0.34)',
                        '0 0 0 1px rgba(255,255,255,0.1) inset, 0 0 34px rgba(120,164,255,0.22), 0 24px 44px rgba(0,0,0,0.34)',
                        '0 0 0 1px rgba(255,255,255,0.08) inset, 0 0 20px rgba(120,164,255,0.12), 0 24px 44px rgba(0,0,0,0.34)',
                        '0 0 0 1px rgba(255,255,255,0.09) inset, 0 0 28px rgba(120,164,255,0.18), 0 24px 44px rgba(0,0,0,0.34)',
                        '0 0 0 1px rgba(255,255,255,0.08) inset, 0 0 20px rgba(120,164,255,0.12), 0 24px 44px rgba(0,0,0,0.34)'
                      ]
                    }
                  : {
                      y: [0, -2, 0, 1, 0],
                      rotate: [0, 1, 0, -0.7, 0],
                      scale: [1, 1.03, 1, 1.02, 1],
                      boxShadow: [
                        '0 0 0 1px rgba(255,255,255,0.08) inset, 0 0 18px rgba(120,164,255,0.1), 0 24px 44px rgba(0,0,0,0.34)',
                        '0 0 0 1px rgba(255,255,255,0.1) inset, 0 0 28px rgba(120,164,255,0.18), 0 24px 44px rgba(0,0,0,0.34)',
                        '0 0 0 1px rgba(255,255,255,0.08) inset, 0 0 18px rgba(120,164,255,0.1), 0 24px 44px rgba(0,0,0,0.34)',
                        '0 0 0 1px rgba(255,255,255,0.09) inset, 0 0 24px rgba(120,164,255,0.14), 0 24px 44px rgba(0,0,0,0.34)',
                        '0 0 0 1px rgba(255,255,255,0.08) inset, 0 0 18px rgba(120,164,255,0.1), 0 24px 44px rgba(0,0,0,0.34)'
                      ]
                    }
            }
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1], repeat: Infinity, repeatDelay: 0 }}
            whileHover={{
              y: -3,
              rotate: 2.2,
              scale: 1.045,
              transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] }
            }}
          >
            <div className="flow-h-system-core" />
          </motion.div>
          <div className="flow-h-process-pill-wrap">
            <motion.div
              className={`flow-h-process-pill flow-h-process-pill-${currentStep.id}`}
              animate={
                currentStep.id === 'confirm'
                  ? { y: [0, -1, 0, 1, 0], rotate: [0, 0.6, 0, -0.4, 0], scale: [1, 1.02, 1, 1.01, 1] }
                  : currentStep.id === 'qualify'
                    ? { y: [0, -1, 0, 1, 0], rotate: [0, 0.5, 0, -0.35, 0], scale: [1, 1.01, 1, 1.008, 1] }
                    : { y: [0, -1, 0, 1, 0], rotate: [0, 0.45, 0, -0.3, 0], scale: [1, 1.01, 1, 1.008, 1] }
              }
              transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1], repeat: Infinity, repeatDelay: 0 }}
              whileHover={{
                y: -2,
                rotate: 0.9,
                scale: 1.02,
                transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] }
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentStep.label}
                  initial={{ opacity: 0, y: 7, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -7, filter: 'blur(6px)' }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  {currentStep.label}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
        <FlowConnector className="flow-h-connector-right" isActive={isPulseTraveling} delay={0.08} />
        <div className="flow-h-output-cluster">
          <OutputCluster step={currentStep} />
        </div>
      </div>
    </div>
  );
}

export default function PrototypeH({ onBack }) {
  return (
    <div className="flow-h-page">
      <div className="flow-h-bg-glow flow-h-bg-glow-a" />
      <div className="flow-h-bg-glow flow-h-bg-glow-b" />

      <div className="flow-h-shell">
        <div className="flow-h-copy">
          {onBack ? (
            <button type="button" className="flow-h-back" onClick={onBack}>
              Back
            </button>
          ) : null}
          <div className="flow-h-kicker">FlowOps Motion Study</div>
          <h1>Enquiries in. Decisions made. Actions completed.</h1>
          <p>
            Static composition check first: one combined object with surrounding inputs, a process pill, and the secured-bookings result.
          </p>
        </div>

        <div className="flow-h-stage">
          <FlowHeroAnimation />
        </div>
      </div>
    </div>
  );
}
