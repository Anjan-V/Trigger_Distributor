import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import LogoIcon from './LogoIcon';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content-horizontal">
        <div className="footer-logo">
          <LogoIcon className="logo-svg" />
          <div className="logo-text">
            <span className="brand-name text-white">Trigger</span>
            <span className="brand-sub">Distributor</span>
          </div>
        </div>

        <div className="footer-item">
          <MapPin size={18} className="contact-icon" />
          <span>Thiruvilwamala – 680594, Thrissur Dt., Kerala</span>
        </div>

        <div className="footer-item">
          <Phone size={18} className="contact-icon" />
          <span><a href="tel:+919442100647">94421 00647</a> / <a href="tel:+919751000647">97510 00647</a></span>
        </div>

        <div className="footer-item">
          <Mail size={18} className="contact-icon" />
          <a href="mailto:triggerdistributor@gmail.com">triggerdistributor@gmail.com</a>
        </div>

        <div className="footer-item">
          <Clock size={18} className="contact-icon" />
          <span>Mon - Sat: 9am - 6pm</span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Trigger Distributor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
