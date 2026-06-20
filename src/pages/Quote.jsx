import React, { useState } from 'react';
import './Contact.css'; // Reuse form styles from Contact.css

const Quote = () => {
  const [formData, setFormData] = useState({ name: '', school: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const waNumber = "919442100647";
    const text = `*New Quote Request*

*Name:* ${formData.name}
*School:* ${formData.school}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'N/A'}

*Requirements / Message:*
${formData.message}`;

    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(waLink, '_blank');
    
    setSubmitted(true);
  };

  return (
    <div className="quote-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title fade-in">Get a Quote</h1>
          <p className="page-subtitle fade-in delay-100">Tell us what you need, and we'll get back to you with our best prices.</p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="contact-form-section slide-up">
            <div className="contact-form-container">
              <h3>Request a Quote</h3>
              {submitted ? (
                <div className="success-message">
                  <h3>Request Sent Successfully!</h3>
                  <p>We will get back to you with a quote shortly.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="school">School / Institution Name *</label>
                    <input type="text" id="school" name="school" required value={formData.school} onChange={handleChange} />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Items Required & Quantities *</label>
                    <textarea id="message" name="message" rows="6" required value={formData.message} onChange={handleChange}></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary submit-btn" style={{ width: '100%' }}>Submit Request</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
