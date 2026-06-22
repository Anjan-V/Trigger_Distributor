import React from 'react';

import './Gallery.css';

const galleryModules = import.meta.glob('../../Images/Gallery/*.{jpeg,jpg,png,webp}', { eager: true, import: 'default' });

const images = Object.keys(galleryModules)
  .sort((a, b) => {
    const matchA = a.match(/(\d+)\.\w+$/);
    const matchB = b.match(/(\d+)\.\w+$/);
    const numA = matchA ? parseInt(matchA[1], 10) : 0;
    const numB = matchB ? parseInt(matchB[1], 10) : 0;
    return numA - numB;
  })
  .map(key => ({
    src: galleryModules[key],
    alt: `Gallery Image`,
    title: `Gallery Image`
  }));

const Gallery = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const openLightbox = (imgSrc) => {
    setSelectedImage(imgSrc);
    // Prevent scrolling on the body when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="gallery-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title fade-in">Our Gallery</h1>
          <p className="page-subtitle fade-in delay-100">A glimpse into our products and operations.</p>
          <p className="mobile-instruction fade-in delay-200">Tap on any image to view it full screen</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {images.map((img, index) => (
              <div 
                key={index} 
                className={`gallery-item slide-up delay-${(index % 3 + 1) * 100}`}
                onClick={() => openLightbox(img.src)}
              >
                <img loading="lazy" src={img.src} alt={img.alt} className="gallery-image" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-modal" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
          <img src={selectedImage} alt="Fullscreen View" className="lightbox-image" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
};

export default Gallery;
