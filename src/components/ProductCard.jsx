import React from 'react';
import './ProductCard.css';

const ProductCard = ({ title, description, icon: Icon, image, delay }) => {
  return (
    <div className={`product-card slide-up delay-${delay}`}>
      {image ? (
        <div className="product-image-container">
          <img src={image} alt={title} className="product-image" />
          <div className="product-overlay">
            <span className="btn btn-primary">View Category</span>
          </div>
        </div>
      ) : (
        <div className="product-icon-container">
          <Icon size={48} className="product-icon" />
        </div>
      )}
      <div className="product-content">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
