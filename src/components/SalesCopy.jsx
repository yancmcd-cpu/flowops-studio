import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './SalesCopy.css';

const SalesCopy = () => {
    return (
        <section className="sales-copy" id="problem">
            <div className="container sales-copy-container">

                {/* Beat 1: The Problem */}
                <motion.div
                    className="copy-block"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="copy-lead">
                        <span className="text-dim">Some businesses struggle with traffic.</span><br />
                        Many struggle <span className="text-highlight">after it arrives.</span>
                    </h2>
                </motion.div>

                {/* Beat 2: The Missing Link */}
                <motion.div
                    className="copy-block"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <p className="copy-body text-large">
                        Interest is generated —<br />
                        but without a clear system, it fails to turn into <span className="text-accent">revenue.</span>
                    </p>
                </motion.div>

                {/* Beat 3: The FlowOps Solution */}
                <motion.div
                    className="copy-block solution-block"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="solution-box">
                        <h3 className="solution-headline">FlowOps builds the system between interest and revenue.</h3>
                        <p className="solution-sub">We design the part most teams underbuild.</p>

                        <ul className="solution-list">
                            <li>How interest is captured.</li>
                            <li>How it’s responded to.</li>
                            <li>How it’s qualified.</li>
                            <li>How momentum is maintained.</li>
                            <li>How the process scales without breaking.</li>
                        </ul>
                    </div>
                </motion.div>

                {/* Beat 4: The Philosophy */}
                <motion.div
                    className="copy-block"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <p className="copy-footer">
                        <span className="text-dim">We don’t start with automation.</span><br />
                        We start with clarity — <span className="text-highlight">then systemize what works.</span>
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default SalesCopy;
