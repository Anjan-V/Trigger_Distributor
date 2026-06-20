import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', school: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const waNumber = "919442100647";
    const text = `*New Inquiry from Website*

*Name:* ${formData.name}
*School:* ${formData.school}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'N/A'}

*Message:*
${formData.message}`;

    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(waLink, '_blank');
    
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title fade-in">Contact Us</h1>
          <p className="page-subtitle fade-in delay-100">Get in touch for quotes, inquiries, and bulk orders.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-info-section slide-up">
            <h2 className="section-title" style={{ textAlign: 'center' }}>Get In Touch</h2>
            <p className="contact-intro" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
              Whether you need a quick restock of metal badges or are planning to procure uniforms for the entire school, we're here to help.
            </p>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon-box"><Phone size={24} /></div>
                <div className="contact-card-info">
                  <h3>Call Us</h3>
                  <p><a href="tel:+919442100647">+91 94421 00647</a></p>
                  <p><a href="tel:+919751000647">+91 97510 00647</a></p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon-box"><Mail size={24} /></div>
                <div className="contact-card-info">
                  <h3>Email Us</h3>
                  <p><a href="mailto:triggerdistributor@gmail.com">triggerdistributor@gmail.com</a></p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon-box"><MapPin size={24} /></div>
                <div className="contact-card-info">
                  <h3>Our Address</h3>
                  <p>Chittapurath House, Koottala Road,<br/>Thiruvilwamala – 680594,<br/>Thrissur Dt., Kerala</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon-box"><Clock size={24} /></div>
                <div className="contact-card-info">
                  <h3>Business Hours</h3>
                  <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon-box">
                  <svg viewBox="0 0 32 32" width="24" height="24">
                    <path d="M16.05 1.5c-8.03 0-14.55 6.52-14.55 14.55 0 2.56.67 5.06 1.95 7.27L1.5 30.5l7.35-1.93c2.14 1.18 4.56 1.8 7.2 1.8 8.03 0 14.55-6.52 14.55-14.55S24.08 1.5 16.05 1.5zM24.7 21.65c-.38 1.07-2.18 1.92-3.03 2.05-.8.12-1.85.22-3.47-.45-2.05-.85-4.83-3.2-6.5-5.35-1.95-2.5-2.55-4.63-2.55-6.57 0-1.7 1.05-2.73 1.4-3.13.38-.43.83-.53 1.1-.53.28 0 .55 0 .8.02.28 0 .65-.1.97.7.35.85 1.18 2.87 1.28 3.1.1.22.18.5 0 .75-.15.25-.25.4-.48.65-.25.25-.5.53-.7.75-.23.23-.48.48-.2.95.28.48 1.25 2.07 2.68 3.35 1.85 1.65 3.42 2.15 3.9 2.38.48.23.75.18 1.03-.1.28-.3.9-1.07 1.15-1.45.25-.38.5-.33.95-.15.45.18 2.83 1.33 3.3 1.58.5.22.83.35.95.53.12.18.12 1.07-.25 2.15z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="contact-card-info">
                  <h3>WhatsApp</h3>
                  <p><a href="https://wa.me/919442100647?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20school%20supplies." target="_blank" rel="noopener noreferrer">+91 94421 00647</a></p>
                  <p><a href="https://wa.me/919442100647?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20school%20supplies." target="_blank" rel="noopener noreferrer">Message Us</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <iframe 
          title="Trigger Distributor Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.328229891829!2d76.3888!3d10.7258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQzJzMzLjkiTiA3NsKwMjMnMjAuMCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
