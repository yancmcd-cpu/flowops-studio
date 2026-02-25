import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-spline-bg">
                {/* Custom Spline scene */}
                <iframe src='https://my.spline.design/soundwave-xkgy94njhuteBmVYTF2zObU8/' frameBorder='0' width='100%' height='100%'></iframe>
            </div>

            <div className="hero-overlay"></div>

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <motion.h1 className="hero-title">FlowOps Studio</motion.h1>
                    <motion.p className="hero-tagline">
                        Turning Interest into Outcomes
                    </motion.p>
                    <motion.p className="hero-subtext"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        We build conversion systems that capture interest and convert to bookings — validated manually before scaling via automation.
                    </motion.p>
                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <a href="#services" className="hero-btn primary-btn">Explore Systems</a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
