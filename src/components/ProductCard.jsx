import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ title, description, icon: Icon, image, delay }) => {
  return (
    <div className={`product-card slide-up delay-${delay}`}>
      {image ? (
        <div className="product-image-container">
          <img src={image} alt={title} className="product-image" />
          <div className="product-overlay">
            <Link to="/products" className="btn btn-primary">View Category</Link>
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
