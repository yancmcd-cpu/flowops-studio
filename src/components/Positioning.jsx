import React from 'react';
import { motion } from 'framer-motion';
import { Settings, BarChart, Zap } from 'lucide-react';
import './Positioning.css';

const features = [
    {
        icon: <Settings size={32} className="feature-icon" />,
        title: "A systems builder",
        description: "We design robust, scalable ecosystems that connect your tools, automate workflows, and eliminate bottlenecks."
    },
    {
        icon: <BarChart size={32} className="feature-icon" />,
        title: "A conversion-focused operations partner",
        description: "Every operational change is geared towards maximizing your bottom line and ensuring a seamless booking process."
    },
    {
        icon: <Zap size={32} className="feature-icon" />,
        title: "Validation-first, automation later",
        description: "We test and prove your processes work perfectly before we build the automated systems to scale them."
    }
];

const Positioning = () => {
    return (
        <section id="services" className="positioning">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        How We Operate
                    </motion.h2>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <div className="icon-wrapper">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                            <div className="card-glow"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Positioning;
