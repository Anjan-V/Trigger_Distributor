import React from 'react';
import logoSrc from '../assets/Logo.png';

const LogoIcon = ({ className }) => {
  return (
    <img 
      src={logoSrc} 
      className={className} 
      alt="Trigger Distributor Logo" 
      style={{ objectFit: 'contain' }}
    />
  );
};

export default LogoIcon;
