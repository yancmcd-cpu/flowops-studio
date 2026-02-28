import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LogoIcon from './LogoIcon';
import './Hero.css';
import './HeroAdditions.css';

const CALENDLY_LINK = 'CALENDLY_LINK_HERE';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: 'easeOut' },
});


const Hero = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <section className="hero">
            <div className="hero-spline-bg">
                <iframe
                    src="https://my.spline.design/soundwave-xkgy94njhuteBmVYTF2zObU8/"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    title="background"
                />
            </div>

            <div className="hero-overlay" />

            <div className="container hero-container">
                <div className="hero-content">

                    {/* Logo */}
                    <motion.div
                        className="hero-logo-wrapper"
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                    >
                        <LogoIcon size={120} className="hero-logo-large" />
                    </motion.div>

                    {/* Brand */}
                    <motion.h1 className="hero-title" {...fadeUp(0.2)}>
                        FlowOps <span style={{ fontWeight: 300 }}>Studio</span>
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p className="hero-tagline" {...fadeUp(0.32)}>
                        Turning Interest Into Outcomes
                    </motion.p>

                    {/* Problem clarifier */}
                    <motion.p className="hero-clarifier" {...fadeUp(0.44)}>
                        Most businesses capture attention — then lose it to unclear flows
                        and manual follow-up.
                    </motion.p>

                    {/* Supporting line */}
                    <motion.p className="hero-subtext" {...fadeUp(0.54)}>
                        We design conversion systems that respond clearly, validate manually,
                        and scale through automation — so growth doesn't rely on guesswork.
                    </motion.p>


                    {/* Primary CTA */}
                    <motion.div className="hero-actions" {...fadeUp(0.66)}>
                        <a
                            href={CALENDLY_LINK}
                            className="hero-btn primary-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        >
                            {hovered ? 'No Pressure. Just Clarity.' : 'Start a Conversation'}
                        </a>
                    </motion.div>

                    {/* Secondary scroll link */}
                    <motion.div {...fadeUp(0.78)}>
                        <a href="#how-it-works" className="hero-how-it-works-link">
                            See how it works ↓
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
