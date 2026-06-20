import React from 'react';
import heroBanner from '../assets/hero_banner.png';
import schoolSupplies from '../assets/school_supplies.png';
import sportsUniforms from '../assets/sports_uniforms.png';
import './Gallery.css';

const Gallery = () => {
  const images = [
    { src: heroBanner, alt: "Premium School Supplies Collection", title: "Premium Supplies" },
    { src: schoolSupplies, alt: "Badges and Ties setup", title: "Badges & Accessories" },
    { src: sportsUniforms, alt: "School Sports Jerseys", title: "Sports Uniforms" },
    { src: heroBanner, alt: "Packed Orders ready for dispatch", title: "Bulk Dispatch" },
    { src: schoolSupplies, alt: "Exam Papers and Guides", title: "Books & Guides" },
    { src: sportsUniforms, alt: "Tracksuits Collection", title: "Winter Wear" }
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
                <img src={img.src} alt={img.alt} className="gallery-image" />
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
