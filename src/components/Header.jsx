import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import LogoIcon from './LogoIcon';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="contact-info">
            <a href="tel:+919442100647"><Phone size={16} /> +91 94421 00647</a>
            <a href="mailto:triggerdistributor@gmail.com"><Mail size={16} /> triggerdistributor@gmail.com</a>
          </div>
        </div>
      </div>
      <nav className="navbar container">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <div className="logo">
            <LogoIcon className="logo-svg" />
            <div className="logo-text">
              <span className="brand-name">Trigger</span>
              <span className="brand-sub">Distributor</span>
            </div>
          </div>
        </Link>

        <div className="desktop-menu">
          <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`}>About Us</Link>
          <Link to="/products" className={`nav-link ${isActive('/products')}`}>Products</Link>
          <Link to="/gallery" className={`nav-link ${isActive('/gallery')}`}>Gallery</Link>
          <Link to="/reviews" className={`nav-link ${isActive('/reviews')}`}>Reviews</Link>
          <Link to="/contact" className="btn btn-primary nav-btn">Get a Quote</Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <Link to="/" className={`mobile-link ${isActive('/')}`} onClick={closeMenu}>Home</Link>
          <Link to="/about" className={`mobile-link ${isActive('/about')}`} onClick={closeMenu}>About Us</Link>
          <Link to="/products" className={`mobile-link ${isActive('/products')}`} onClick={closeMenu}>Products</Link>
          <Link to="/gallery" className={`mobile-link ${isActive('/gallery')}`} onClick={closeMenu}>Gallery</Link>
          <Link to="/reviews" className={`mobile-link ${isActive('/reviews')}`} onClick={closeMenu}>Reviews</Link>
          <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>Get a Quote</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
