import React from 'react';
import { Menu } from 'lucide-react';
import LogoIcon from './LogoIcon';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container nav-container">
                <div className="logo">
                    <LogoIcon size={32} className="logo-icon" />
                    <span className="logo-text">FlowOps <span style={{ fontWeight: 400, opacity: 0.9 }}>Studio</span></span>
                </div>
                <div className="nav-links">
                    <a href="#services" className="nav-link">Services</a>
                    <a href="#about" className="nav-link">About</a>
                    <button className="cta-button">Book a Call</button>
                </div>
                <button className="mobile-menu-btn">
                    <Menu size={24} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
