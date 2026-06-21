import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ title, description, icon: Icon, image, delay }) => {
  return (
    <Link to={`/category/${encodeURIComponent(title)}`} className={`product-card slide-up delay-${delay}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      {image ? (
        <div className="product-image-container">
          <img loading="lazy" src={image} alt={title} className="product-image" />
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
    </Link>
  );
};

export default ProductCard;
