import React from 'react';
import LogoIcon from './LogoIcon';
import './Navbar.css';

const CALENDLY_LINK = 'CALENDLY_LINK_HERE';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container nav-container">
                <a href="#" className="logo">
                    <LogoIcon size={32} className="logo-icon" />
                    <span className="logo-text">FlowOps <span style={{ fontWeight: 400, opacity: 0.9 }}>Studio</span></span>
                </a>
                <div className="nav-links">
                    <a href="#how-it-works" className="nav-link">How It Works</a>
                    <a href="#services" className="nav-link">Services</a>
                    <a
                        href={CALENDLY_LINK}
                        className="cta-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Start a Conversation
                    </a>
                </div>
                <button className="mobile-menu-btn" aria-label="Open menu">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
