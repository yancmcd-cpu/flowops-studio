import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Target, FlaskConical } from 'lucide-react';
import './Positioning.css';

const principles = [
    {
        icon: <Compass size={34} strokeWidth={1.5} className="principle-icon" />,
        principle: "Clarity before tools",
        body: "We design the process first — then support it with the right tools, not the other way around.",
        micro: "The system defines the software."
    },
    {
        icon: <Target size={34} strokeWidth={1.5} className="principle-icon" />,
        principle: "Outcomes over activity",
        body: "We focus on changes that improve results — not activity that looks impressive.",
        micro: "Progress over noise."
    },
    {
        icon: <FlaskConical size={34} strokeWidth={1.5} className="principle-icon" />,
        principle: "Proven manually, then scaled",
        body: "We validate what works in the real world before automating it.",
        micro: "Scale amplifies what's already proven."
    }
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
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="approach-title">Our Approach</h2>
                </motion.div>

                <div className="principles-grid">
                    {principles.map((item, index) => (
                        <motion.div
                            key={index}
                            className="principle-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.15 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <div className="principle-icon-wrapper">
                                {item.icon}
                            </div>
                            <h3 className="principle-line">{item.principle}</h3>
                            <p className="principle-body">{item.body}</p>
                            <span className="principle-micro">{item.micro}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Positioning;
