import React from 'react';
import { useParams } from 'react-router-dom';
import tieImage from '../assets/Tie.jpeg';
import beltsImage from '../assets/belts.jpeg';

const Category = () => {
  const { categoryName } = useParams();
  const decodedName = decodeURIComponent(categoryName);

  const renderContent = () => {
    if (decodedName === 'Belts, Ties & Badges') {
      return (
        <div className="container" style={{ padding: '2rem 0' }}>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
            <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
              <img src={tieImage} alt="School Ties" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }} />
            </div>
            <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
              <img src={beltsImage} alt="School Belts" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '2rem', backgroundColor: 'var(--surface)', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: 'var(--primary)' }}>Premium Quality & Materials</h2>
            <p style={{ color: 'var(--text-light)', marginTop: '1rem', lineHeight: '1.8', fontSize: '1.1rem' }}>
              Our belts, ties, and badges are crafted from high-quality, durable materials designed to withstand the rigors of daily school life. 
              The ties are made from premium woven fabric that maintains its shape and vibrant color wash after wash. 
              Our belts feature sturdy, rust-resistant buckles and strong, flexible webbing for long-lasting comfort. 
              Each badge is meticulously crafted with precise detailing, ensuring students wear their school emblem with pride.
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="container" style={{ minHeight: '40vh', textAlign: 'center', paddingTop: '4rem' }}>
        <h2>Products coming soon</h2>
        <p style={{ color: 'var(--text-light)', marginTop: '1rem' }}>
          We are currently updating our catalog for {decodedName}. Please check back later.
        </p>
      </div>
    );
  };

  return (
    <div className="category-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title fade-in">{decodedName}</h1>
          <p className="page-subtitle fade-in delay-100">Explore our selection of {decodedName}.</p>
        </div>
      </div>
      <section className="section">
        {renderContent()}
      </section>
    </div>
  );
};

export default Category;
