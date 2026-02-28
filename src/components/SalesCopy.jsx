import React from 'react';
import { motion } from 'framer-motion';
import './SalesCopy.css';

const items = [
    'Interest capture.',
    'Response logic.',
    'Qualification pathways.',
    'Momentum preservation.',
    'Scalable execution.',
];

const SalesCopy = () => {
    return (
        <section className="sales-copy" id="problem">
            <div className="container sales-copy-container">

                <motion.div
                    className="copy-block"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <h2 className="copy-lead">
                        <span className="text-highlight">FlowOps</span>{' '}
                        builds the system between interest and revenue.
                    </h2>
                    <p className="copy-body text-large">
                        We design the part most teams underbuild.
                    </p>
                </motion.div>

                <ul className="bridge-list">
                    {items.map((item, i) => {
                        const fromLeft = i % 2 === 0;
                        return (
                            <motion.li
                                key={item}
                                className="bridge-item"
                                initial={{ opacity: 0, x: fromLeft ? -60 : 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.65, delay: i * 0.12, ease: 'easeOut' }}
                            >
                                {item}
                            </motion.li>
                        );
                    })}
                </ul>

            </div>
        </section>
    );
};

export default SalesCopy;
