import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Monitor, MessageSquare, Zap } from 'lucide-react';
import './UseCases.css';

const useCasesData = [
    {
        id: 1,
        title: "Website Creation",
        description: "High-performance websites built for speed and engineered specifically to convert traffic into booked calls. Validation is our foundation.",
        icon: <Monitor size={48} />,
        color: "#3AAFA9", // Primary accent
        features: ["Custom UI/UX", "Conversion Optimized", "SEO Foundations"]
    },
    {
        id: 2,
        title: "FB Messenger Auto-Responders",
        description: "Intelligent messaging systems that instantly engage leads, answer common questions, and seamlessly guide prospects to your booking calendar.",
        icon: <MessageSquare size={48} />,
        color: "#5B7CFF", // Secondary accent
        features: ["Instant Engagement", "Pre-qualification Routing", "Calendar Integration"]
    },
    {
        id: 3,
        title: "End-to-End Automations",
        description: "Connect your CRM, email marketing, and payment processors into one unified ecosystem that runs your operations in the background.",
        icon: <Zap size={48} />,
        color: "#94A3B8", // Neutral / Secondary
        features: ["Zapier / Make Workflows", "Data Syncing", "Frictionless Operations"]
    }
];

const Card = ({ data, index, progress, targetScale }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'start start']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, [index * 0.25, 1], [1, targetScale]);

    return (
        <div ref={containerRef} className="use-case-card-container">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${index * 40}px)` }}
                className="use-case-card"
            >
                <div className="card-inner">
                    <div className="card-content">
                        <div className="card-icon" style={{ color: data.color }}>
                            {data.icon}
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.description}</p>
                        <ul className="card-features">
                            {data.features.map((feature, i) => (
                                <li key={i}>
                                    <Zap size={16} className="feature-bullet" style={{ color: data.color }} />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="card-visual" style={{ background: `linear-gradient(135deg, ${data.color}20 0%, transparent 100%)` }}>
                        <motion.div style={{ scale: imageScale }} className="visual-inner">
                            <div className="abstract-shape" style={{ borderColor: data.color }}></div>
                            <div className="abstract-shape secondary" style={{ borderColor: data.color }}></div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

const UseCases = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    return (
        <section className="use-cases" ref={containerRef} id="about">
            <div className="container">
                <div className="section-header">
                    <h2>Our Systems in Action</h2>
                    <p>Solutions built to capture interest and turn it into outcomes.</p>
                </div>
                <div className="cards-wrapper">
                    {useCasesData.map((useCase, i) => {
                        const targetScale = 1 - ((useCasesData.length - i) * 0.05);
                        return (
                            <Card
                                key={useCase.id}
                                data={useCase}
                                index={i}
                                progress={scrollYProgress}
                                targetScale={targetScale}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
