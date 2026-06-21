import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import './Contact.css'; // Reuse form styles from Contact.css

const Quote = () => {
  const [formData, setFormData] = useState({ name: '', school: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

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
          <div className="quote-description slide-up" style={{ textAlign: 'center', marginBottom: '3rem', background: 'var(--color-surface)', padding: '3rem', borderRadius: '10px', boxShadow: 'var(--shadow-sm)', border: '1px solid rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', fontSize: '2rem' }}>Why Request a Quote?</h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--color-text)', lineHeight: '1.6', marginBottom: '2rem' }}>
              Getting a customized quote ensures you receive the best possible pricing tailored specifically to your institution's bulk requirements. Let us know exactly what you need, and our experts will provide a highly competitive package.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', marginBottom: '2.5rem', fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#25D366' }}>✅</span> <strong>Volume Discounts</strong> - Special rates for large scale orders.
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#25D366' }}>✅</span> <strong>Customization</strong> - Pricing specific to your school's unique branding.
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#25D366' }}>✅</span> <strong>Expert Guidance</strong> - We help you choose materials within your budget.
              </div>
            </div>
            
            <button 
              className="btn btn-primary" 
              onClick={() => setIsFormVisible(true)}
              style={{ padding: '1rem 2.5rem', fontSize: '1.2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              Get Your Custom Quote Now
            </button>
          </div>
          
          {isFormVisible && (
            <div className="modal-overlay fade-in" onClick={() => { setIsFormVisible(false); if(submitted) setSubmitted(false); }}>
              <div className="contact-form-container slide-up modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '2rem 2.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h3 style={{ margin: 0, fontSize: '1.75rem', color: 'var(--color-primary)' }}>Request a Quote</h3>
                  <button 
                    onClick={() => { setIsFormVisible(false); if(submitted) setSubmitted(false); }} 
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-light)', padding: '0.5rem', display: 'flex' }}
                    aria-label="Close form"
                  >
                    <Plus size={28} style={{ transform: 'rotate(45deg)' }} />
                  </button>
                </div>

                {submitted ? (
                  <div className="success-message" style={{ textAlign: 'center', padding: '2rem 0' }}>
                    <h3 style={{ color: '#25D366', marginBottom: '1rem' }}>Request Sent Successfully!</h3>
                    <p style={{ marginBottom: '2rem' }}>We will get back to you with a quote shortly.</p>
                    <button className="btn btn-primary" onClick={() => { setIsFormVisible(false); setSubmitted(false); }}>Close</button>
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
          )}
        </div>
      </section>
    </div>
  );
};

export default Quote;
