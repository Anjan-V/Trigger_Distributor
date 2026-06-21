import React from 'react';
import heroBanner from '../assets/hero_banner.jpg';
import schoolSupplies from '../assets/school_supplies.jpg';
import sportsUniforms from '../assets/sports_uniforms.jpg';
import bulkDispatch from '../assets/bulk_dispatch.jpg';
import booksGuides from '../assets/books_guides.jpg';
import casualWear from '../assets/casual_wear.jpg';
import './Gallery.css';

const Gallery = () => {
  const images = [
    { src: heroBanner, alt: "Premium School Supplies Collection", title: "Premium Supplies" },
    { src: schoolSupplies, alt: "Badges and Ties setup", title: "Badges & Accessories" },
    { src: sportsUniforms, alt: "School Sports Jerseys", title: "School & Sports Uniforms" },
    { src: bulkDispatch, alt: "Packed Orders ready for dispatch", title: "Bulk Dispatch" },
    { src: booksGuides, alt: "Exam Papers and Guides", title: "Books & Guides" },
    { src: casualWear, alt: "Casual Wear Collection", title: "Casual Wear" }
  ];

  return (
    <div className="gallery-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title fade-in">Our Gallery</h1>
          <p className="page-subtitle fade-in delay-100">A glimpse into our products and operations.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {images.map((img, index) => (
              <div key={index} className={`gallery-item slide-up delay-${(index % 3 + 1) * 100}`}>
                <img loading="lazy" src={img.src} alt={img.alt} className="gallery-image" />
                <div className="gallery-overlay">
                  <h3 className="gallery-title">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
