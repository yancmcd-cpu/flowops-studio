import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './ClosingSection.css';

const services = [
    'Website Design',
    'Landing Page Architecture',
    'Ad Campaign Systems',
    'Content Engines',
    'CRM & Automation Workflows',
    'Lead Routing & Follow-up',
    'Analytics & Optimization',
    'Bespoke Growth Systems',
];

const ClosingSection = () => {
    const [hovering, setHovering] = useState(false);
    const [visibleCount, setVisibleCount] = useState(0);
    const sectionRef = useRef(null);
    const intervalRef = useRef(null);
    const hasStarted = useRef(false);

    // Start the service list animation once the section enters the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted.current) {
                    hasStarted.current = true;
                    intervalRef.current = setInterval(() => {
                        setVisibleCount(prev => {
                            if (prev >= services.length) {
                                clearInterval(intervalRef.current);
                                return prev;
                            }
                            return prev + 1;
                        });
                    }, 160);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            observer.disconnect();
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <section className="closing-section" ref={sectionRef}>
            <div className="closing-inner">

                {/* ── Heading ── */}
                <motion.div
                    className="closing-header"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true, margin: '-80px' }}
                >
                    <h2 className="closing-title">
                        Built for Outcomes.<br />
                        <span className="closing-title-dim">Flexible by Design.</span>
                    </h2>
                </motion.div>

                {/* ── Supporting paragraph ── */}
                <motion.p
                    className="closing-body"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
                    viewport={{ once: true, margin: '-60px' }}
                >
                    We don't just build conversion systems.<br />
                    We design the supporting infrastructure around them — from high-performance pages
                    to campaign architecture and automation workflows.<br />
                    If it drives measurable growth, we build it.
                </motion.p>

                {/* ── Animated service list ── */}
                <motion.ul
                    className="closing-services"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true, margin: '-40px' }}
                >
                    {services.map((service, i) => (
                        <li
                            key={service}
                            className="closing-service-item"
                            style={{
                                opacity: i < visibleCount ? 1 : 0,
                                transform: i < visibleCount ? 'translateY(0)' : 'translateY(12px)',
                                transition: 'opacity 0.5s ease, transform 0.5s ease',
                            }}
                        >
                            <span className="closing-service-dot" />
                            {service}
                        </li>
                    ))}
                </motion.ul>

                {/* ── CTA ── */}
                <motion.div
                    className="closing-cta-area"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true, margin: '-40px' }}
                >
                    <button
                        className={`closing-btn${hovering ? ' closing-btn--hover' : ''}`}
                        onMouseEnter={() => setHovering(true)}
                        onMouseLeave={() => setHovering(false)}
                    >
                        <span className="closing-btn-text">
                            {hovering ? "Explore What's Possible" : "Start a Conversation"}
                        </span>
                    </button>

                    <p className="closing-microcopy">
                        {hovering
                            ? 'No obligation. We\'ll map the next step.'
                            : 'No pressure. Just clarity.'}
                    </p>

                </motion.div>

            </div>
        </section>
    );
};

export default ClosingSection;
