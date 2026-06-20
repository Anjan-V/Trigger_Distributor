import React from 'react';

const LogoIcon = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Bottom Swoosh (Dark Teal) */}
      <path 
        d="M 30 190 Q 110 140 175 80 Q 110 150 30 190 Z" 
        fill="#1C5E78" 
      />

      {/* Inner Bottom Swoosh (Grey) */}
      <path 
        d="M 15 160 Q 60 135 90 120 Q 60 145 15 160 Z" 
        fill="#9CA3AF" 
      />

      {/* Main Dark Blue Body (Torso to Right Arm) */}
      <path 
        d="M 40 175 Q 110 130 155 60 Q 120 105 75 100 Q 100 130 40 175 Z" 
        fill="#29277A" 
      />

      {/* Teal Left Swoosh (Left Arm/Chest) */}
      <path 
        d="M 0 110 Q 50 85 95 95 Q 115 110 75 130 Q 30 125 0 110 Z" 
        fill="#0071A7" 
      />

      {/* Head */}
      <circle cx="110" cy="55" r="18" fill="#29277A" />

      {/* 8-Pointed Star */}
      <path 
        d="M 165 15 L 168 25 L 178 25 L 170 31 L 173 41 L 165 35 L 157 41 L 160 31 L 152 25 L 162 25 Z" 
        fill="#FBBF24" 
      />
    </svg>
  );
};

export default LogoIcon;
