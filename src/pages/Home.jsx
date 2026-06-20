import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Shirt, Shield } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import './Home.css';
import heroBanner from '../assets/hero_banner.png';
import sportsUniformsImage from '../assets/sports_uniforms.png';
import schoolSuppliesImage from '../assets/school_supplies.png';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img src={heroBanner} alt="Quality School Supplies" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <h1 className="hero-title fade-in">Trusted School Supplies Partner Across Kerala & TamilNadu</h1>
          <p className="hero-subtitle fade-in delay-100">
            Providing high-quality books, uniforms, badges, and more to educational institutions with unmatched reliability.
          </p>
          <div className="hero-actions fade-in delay-200">
            <Link to="/quote" className="btn btn-primary">Get a Quote</Link>
            <Link to="/products" className="btn btn-outline">Explore Products</Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text slide-up">
              <h2 className="section-title" style={{ textAlign: 'left' }}>About Trigger Distributor</h2>
              <p>
                Based in Thiruvilwamala, Thrissur District, Trigger Distributor is the go-to wholesale supplier for schools across Kerala & TamilNadu. Led by Prasad P, we understand the unique needs of school management and procurement teams.
              </p>
              <p>
                From student textbooks and tailored uniforms to custom metal badges and exam papers, we ensure timely delivery of premium goods so schools can focus on what matters most — education.
              </p>
              <Link to="/about" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                Read Our Story <ArrowRight size={18} />
              </Link>
            </div>
            <div className="intro-stats slide-up delay-200">
              <div className="stat-box">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years of Trust</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">50+</span>
                <span className="stat-label">Partner Schools</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">100%</span>
                <span className="stat-label">Quality Assured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Snapshot */}
      <section className="section products-snapshot">
        <div className="container">
          <h2 className="section-title">Our Premium Supplies</h2>
          <div className="products-grid">
            <ProductCard 
              title="Books & Guides" 
              description="Comprehensive range of textbooks, notebooks, and study guides for all boards."
              image={heroBanner}
              delay="100"
            />
            <ProductCard 
              title="Sports & Uniforms" 
              description="Durable, comfortable sports kits, tracksuits, belts, ties, and daily uniforms."
              image={sportsUniformsImage}
              delay="200"
            />
            <ProductCard 
              title="Badges & Accessories" 
              description="Custom metal and cloth badges, socks, packing covers, and exam papers."
              image={schoolSuppliesImage}
              delay="300"
            />
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/products" className="btn btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2 className="cta-title">Ready to place your annual bulk order?</h2>
          <p className="cta-subtitle">Contact us today to verify our credentials and request a competitive quote for your institution.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
