import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import LogoIcon from './LogoIcon';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <LogoIcon className="logo-svg" />
            <div className="logo-text">
              <span className="brand-name text-white">Trigger</span>
              <span className="brand-sub">Distributor</span>
            </div>
          </div>
          <p className="footer-description">
            Your trusted partner for quality school supplies, uniforms, and accessories across Kerala.
          </p>
        </div>


        <div className="footer-section">
          <h4 className="footer-heading">Contact Details</h4>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>Chittapurath House, Koottala Road, Thiruvilwamala – 680594, Thrissur Dt., Kerala</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <span>
                <a href="tel:+919442100647">94421 00647</a> / <a href="tel:+919751000647">97510 00647</a>
              </span>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <a href="mailto:triggerdistributor@gmail.com">triggerdistributor@gmail.com</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Business Hours</h4>
          <ul className="footer-contact">
            <li>
              <Clock size={18} className="contact-icon" />
              <span>Mon - Sat: 9:00 AM - 6:00 PM<br/>Sunday: Closed</span>
            </li>
          </ul>
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
