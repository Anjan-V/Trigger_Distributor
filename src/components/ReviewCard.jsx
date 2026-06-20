import React from 'react';
import { Star } from 'lucide-react';
import './ReviewCard.css';

const ReviewCard = ({ name, school, rating, comment, delay }) => {
  return (
    <div className={`review-card slide-up delay-${delay}`}>
      <div className="review-stars">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < rating ? "star-filled" : "star-empty"} 
            fill={i < rating ? "currentColor" : "none"}
          />
        ))}
      </div>
      <p className="review-comment">"{comment}"</p>
      <div className="review-author">
        <div className="author-avatar">{name.charAt(0)}</div>
        <div className="author-info">
          <h4 className="author-name">{name}</h4>
          <span className="author-school">{school}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
