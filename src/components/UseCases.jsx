import React from 'react';
import { motion } from 'framer-motion';
import './UseCases.css';

const systems = [
    {
        id: 1,
        title: "Property Rental Booking System",
        sub: "Instantly respond, check availability, and confirm bookings without manual follow-up.",
        src: "/system1-rental-booking-3d.html"
    },
    {
        id: 2,
        title: "Website Lead Capture & Conversion System",
        sub: "Capture enquiries, respond instantly, and move qualified leads through a structured follow-up flow.",
        src: "/system2-lead-capture-3d.html"
    },
    {
        id: 3,
        title: "Service Business Follow-Up System",
        sub: "Automatically respond, schedule appointments, send reminders, and confirm attendance.",
        src: "/system3-service-followup-3d.html"
    }
];

const UseCases = () => {
    return (
        <section className="use-cases" id="about">
            <div className="use-cases-container">

                {/* ── Section Header – animates like other headings ── */}
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <h2>Our Systems in Action</h2>
                    <p>
                        Below are real automation flows we design and deploy to capture intent,
                        respond instantly, and convert consistently.
                    </p>
                </motion.div>

                <div className="systems-list">
                    {systems.map((sys, index) => (
                        <div className="system-block" key={sys.id}>

                            {/* ── System heading – staggered like principle cards ── */}
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

                            {/* ── iframe box – animates like the solution-box ── */}
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
                </div>
            </div>
        </section>
    );
};

export default UseCases;
