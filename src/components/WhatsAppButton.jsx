import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = "919442100647"; 
  const message = "Hello, I would like to inquire about school supplies.";

  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={waLink} target="_blank" rel="noopener noreferrer" className="whatsapp-btn" aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 32 32" className="whatsapp-icon">
        <path d="M16.05 1.5c-8.03 0-14.55 6.52-14.55 14.55 0 2.56.67 5.06 1.95 7.27L1.5 30.5l7.35-1.93c2.14 1.18 4.56 1.8 7.2 1.8 8.03 0 14.55-6.52 14.55-14.55S24.08 1.5 16.05 1.5zM24.7 21.65c-.38 1.07-2.18 1.92-3.03 2.05-.8.12-1.85.22-3.47-.45-2.05-.85-4.83-3.2-6.5-5.35-1.95-2.5-2.55-4.63-2.55-6.57 0-1.7 1.05-2.73 1.4-3.13.38-.43.83-.53 1.1-.53.28 0 .55 0 .8.02.28 0 .65-.1.97.7.35.85 1.18 2.87 1.28 3.1.1.22.18.5 0 .75-.15.25-.25.4-.48.65-.25.25-.5.53-.7.75-.23.23-.48.48-.2.95.28.48 1.25 2.07 2.68 3.35 1.85 1.65 3.42 2.15 3.9 2.38.48.23.75.18 1.03-.1.28-.3.9-1.07 1.15-1.45.25-.38.5-.33.95-.15.45.18 2.83 1.33 3.3 1.58.5.22.83.35.95.53.12.18.12 1.07-.25 2.15z" fill="#FFF"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
