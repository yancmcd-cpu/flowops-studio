import React from 'react';
import { motion } from 'framer-motion';
import LogoIcon from './LogoIcon';
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <motion.div
                        className="hero-logo-wrapper"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        <LogoIcon size={140} className="hero-logo-large" />
                    </motion.div>
                    <h1 className="hero-title">FlowOps <span style={{ fontWeight: 300 }}>Studio</span></h1>
                    <p className="hero-tagline">
                        Turning Interest into Outcomes
                    </p>
                    <p className="hero-subtext">
                        We build conversion systems that turn demand into consistent outcomes.
                    </p>
                    <div className="hero-actions">
                        <a href="#services" className="hero-btn primary-btn">Explore Systems</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
