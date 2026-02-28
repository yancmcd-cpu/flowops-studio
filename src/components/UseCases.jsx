import React from 'react';
import { motion } from 'framer-motion';
import './UseCases.css';

const CALENDLY_LINK = 'CALENDLY_LINK_HERE';

const steps = [
    {
        num: '01',
        title: 'Clarify',
        body: 'Map the journey from first interaction to qualified action.',
    },
    {
        num: '02',
        title: 'Validate',
        body: 'Test manually to confirm what actually converts.',
    },
    {
        num: '03',
        title: 'Automate',
        body: 'Scale with structured workflows once proven.',
    },
];

const systems = [
    {
        id: 1,
        title: 'Property Rental Booking System',
        sub: 'Instantly respond, check availability, and confirm bookings without manual follow-up.',
        src: '/system1-rental-booking-3d.html',
    },
    {
        id: 2,
        title: 'Website Lead Capture & Conversion System',
        sub: 'Capture enquiries, respond instantly, and move qualified leads through a structured follow-up flow.',
        src: '/system2-lead-capture-3d.html',
    },
    {
        id: 3,
        title: 'Service Business Follow-Up System',
        sub: 'Automatically respond, schedule appointments, send reminders, and confirm attendance.',
        src: '/system3-service-followup-3d.html',
    },
];

const UseCases = () => {
    return (
        <section className="use-cases" id="how-it-works">
            <div className="use-cases-container">

                {/* Section header */}
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <h2>The System In Motion</h2>
                    <p>
                        Below are real automation flows we design and deploy to capture intent,
                        respond instantly, and convert consistently.
                    </p>
                </motion.div>

                {/* Two-column layout: animations LEFT, steps RIGHT */}
                <div className="how-it-works-grid">

                    {/* LEFT — animated systems */}
                    <div className="systems-list">
                        {systems.map((sys) => (
                            <div className="system-block" key={sys.id}>
                                <motion.div
                                    className="system-meta"
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                                    viewport={{ once: true, margin: '-60px' }}
                                >
                                    <h3>{sys.title}</h3>
                                    <p>{sys.sub}</p>
                                </motion.div>

                                <motion.div
                                    className="system-frame-wrap"
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                >
                                    <iframe
                                        src={sys.src}
                                        title={sys.title}
                                        className="system-frame"
                                        loading="lazy"
                                        scrolling="no"
                                        frameBorder="0"
                                        allowFullScreen
                                    />
                                </motion.div>
                            </div>
                        ))}

                        {/* Proof block — directly below 3rd animation box */}
                        <motion.div
                            className="outcomes-proof-block"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
                            viewport={{ once: true, margin: '-40px' }}
                        >
                            <span className="outcomes-proof-label">Typical outcomes include:</span>
                            <ul className="outcomes-proof-list">
                                <li>Faster lead response times</li>
                                <li>Automated follow-up replacing manual effort</li>
                                <li>Higher-quality conversions without increasing ad spend</li>
                            </ul>
                        </motion.div>

                    </div>

                    {/* RIGHT — 3 step explainer (sticky on desktop) */}
                    <div className="steps-panel">
                        <motion.h3
                            className="steps-heading"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, margin: '-60px' }}
                        >
                            How We Work
                        </motion.h3>

                        <div className="steps-list">
                            {steps.map((step, i) => (
                                <motion.div
                                    key={step.num}
                                    className="step-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.15 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                >
                                    <span className="step-num">{step.num}</span>
                                    <div>
                                        <h4 className="step-title">{step.title}</h4>
                                        <p className="step-body">{step.body}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.a
                            href={CALENDLY_LINK}
                            className="steps-cta"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true, margin: '-40px' }}
                        >
                            Start a Conversation →
                        </motion.a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default UseCases;
