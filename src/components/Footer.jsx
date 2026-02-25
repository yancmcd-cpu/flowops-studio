import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2>FlowOps Studio</h2>
                        <p className="footer-tagline">Turning interest into outcomes.</p>
                    </div>
                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Navigation</h4>
                            <a href="#services">Services</a>
                            <a href="#about">About</a>
                        </div>
                        <div className="link-group">
                            <h4>Socials</h4>
                            <a href="#">Twitter</a>
                            <a href="#">LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} FlowOps Studio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
