import React from 'react';
import { Star } from 'lucide-react';
import './ReviewCard.css';

const ReviewCard = ({ name, school, rating, comment, delay }) => {
  return (
    <div className={`review-card slide-up delay-${delay}`}>
      <div className="review-stars">
        {[...Array(5)].map((_, i) => {
          const fillPercentage = Math.max(0, Math.min(100, (rating - i) * 100));
          if (fillPercentage >= 100) {
            return <Star key={i} size={18} className="star-filled" fill="currentColor" />;
          } else if (fillPercentage <= 0) {
            return <Star key={i} size={18} className="star-empty" fill="none" />;
          } else {
            return (
              <div key={i} style={{ position: 'relative', display: 'inline-flex' }}>
                <Star size={18} className="star-empty" fill="none" />
                <Star
                  size={18}
                  className="star-filled"
                  fill="currentColor"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    clipPath: `inset(0 ${100 - fillPercentage}% 0 0)`
                  }}
                />
              </div>
            );
          }
        })}
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
