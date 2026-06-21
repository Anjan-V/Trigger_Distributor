import React from 'react';
import './About.css';
import schoolSuppliesImage from '../assets/school_supplies.png';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title fade-in">About Us</h1>
          <p className="page-subtitle fade-in delay-100">Your reliable partner for educational supplies.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-container slide-up">
              <img loading="lazy" src={schoolSuppliesImage} alt="School Supplies" className="about-image" />
              <div className="experience-badge">
                <span className="exp-years">10+</span>
                <span className="exp-text">Years of Excellence</span>
              </div>
            </div>
            
            <div className="about-content slide-up delay-200">
              <h2 className="section-title" style={{ textAlign: 'left' }}>Who We Are</h2>
              <p className="about-text">
                <strong>Trigger Distributor</strong>, led by Prasad P, is a premier school supplies distribution business located in Thiruvilwamala, Thrissur District, Kerala.
              </p>
              <p className="about-text">
                For over a decade, we have been the silent engine behind many prestigious educational institutions across Kerala & TamilNadu. We understand that running a school requires dependable partners who deliver quality materials on time, every time.
              </p>
              <p className="about-text">
                Our mission is to simplify the procurement process for school principals, trustees, and administration teams. By offering a comprehensive catalog ranging from custom uniforms and badges to textbooks and exam papers, we serve as a single, trustworthy point of contact for all your academic year preparations.
              </p>
              
              <div className="mission-box">
                <h3>Our Mission</h3>
                <p>To provide reliable, high-quality, and cost-effective school supplies that empower institutions to focus wholeheartedly on student education and development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section core-values-section">
        <div className="container">
          <h2 className="section-title">Why Choose Trigger Distributor?</h2>
          <div className="values-grid">
            <div className="value-card slide-up delay-100">
              <div className="value-icon">✓</div>
              <h3>Uncompromising Quality</h3>
              <p>Every product, from a metal badge to a track suit, passes stringent quality checks to ensure longevity.</p>
            </div>
            <div className="value-card slide-up delay-200">
              <div className="value-icon">⏱</div>
              <h3>Timely Delivery</h3>
              <p>We respect academic calendars. Our supply chain is optimized for bulk deliveries before the term starts.</p>
            </div>
            <div className="value-card slide-up delay-300">
              <div className="value-icon">🤝</div>
              <h3>Trusted Partnerships</h3>
              <p>We believe in building long-term relationships with school boards, becoming a reliable extension of your team.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
