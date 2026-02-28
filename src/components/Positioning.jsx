import React from 'react';
import { motion } from 'framer-motion';
import './Positioning.css';

const CALENDLY_LINK = 'CALENDLY_LINK_HERE';

const services = [
    {
        title: 'Conversion Systems',
        body: 'End-to-end flows that turn attention into action.',
    },
    {
        title: 'Landing Page Architecture',
        body: 'Designed to guide, not decorate.',
    },
    {
        title: 'Campaign Infrastructure',
        body: 'Built to support consistent acquisition.',
    },
    {
        title: 'Automation & CRM Workflows',
        body: 'Routing, follow-up, and qualification without manual overhead.',
    },
];

const Positioning = () => {
    return (
        <section id="services" className="positioning">
            <div className="container">

                <motion.div
                    className="approach-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <h2 className="approach-title">What We Build</h2>
                </motion.div>

                <div className="services-grid">
                    {services.map((svc, i) => (
                        <motion.div
                            key={svc.title}
                            className="service-block"
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65, delay: i * 0.12 }}
                            viewport={{ once: true, margin: '-50px' }}
                        >
                            <h3 className="service-title">{svc.title}</h3>
                            <p className="service-body">{svc.body}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="services-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true, margin: '-50px' }}
                >
                    <span className="services-cta-prompt">Ready to apply this to your business?</span>
                    {' '}
                    <a href={CALENDLY_LINK} className="services-cta-link" target="_blank" rel="noopener noreferrer">
                        Start a Conversation →
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default Positioning;
