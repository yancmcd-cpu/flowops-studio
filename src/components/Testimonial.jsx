import React from 'react';
import { motion } from 'framer-motion';
import './Testimonial.css';

const Testimonial = () => {
    return (
        <section className="testimonial-section">
            <div className="testimonial-inner">
                <motion.div
                    className="testimonial-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    viewport={{ once: true, margin: '-80px' }}
                >
                    <h2 className="testimonial-heading">What Clients Say</h2>
                </motion.div>

                <motion.blockquote
                    className="testimonial-quote"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
                    viewport={{ once: true, margin: '-60px' }}
                >
                    <p className="testimonial-text">
                        "FlowOps helped us turn a messy, manual process into a clear system
                        that actually converts. The biggest difference wasn't just automation
                        — it was the thinking behind the flow."
                    </p>
                    <footer className="testimonial-attribution">
                        <span className="testimonial-name">— Client Name</span>
                        <span className="testimonial-role">Role, Company</span>
                    </footer>
                </motion.blockquote>
            </div>
        </section>
    );
};

export default Testimonial;
