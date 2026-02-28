import React from 'react';
import './Footer.css';

const CALENDLY_LINK = 'CALENDLY_LINK_HERE';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">

                <div className="footer-top">
                    {/* Brand block */}
                    <div className="footer-brand">
                        <h2 className="footer-brand-title">FlowOps Studio</h2>
                        <p className="footer-tagline">Systems that turn interest into outcomes.</p>
                    </div>

                    {/* Links */}
                    <nav className="footer-nav" aria-label="Footer navigation">
                        <a href="#how-it-works" className="footer-link">How It Works</a>
                        <a href="#services" className="footer-link">Services</a>
                        <a
                            href={CALENDLY_LINK}
                            className="footer-link footer-cta-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Start a Conversation →
                        </a>
                    </nav>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 FlowOps Studio. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
