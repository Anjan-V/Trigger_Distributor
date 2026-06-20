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
        <div className="container" style={{ padding: '4rem 0', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          {/* First Item: Tie */}
          <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 300px', maxWidth: '400px', textAlign: 'center' }}>
              <img src={tieImage} alt="Tie" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }} />
              <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 'bold' }}>Tie</h3>
            </div>
            <div style={{ flex: '2 1 400px', padding: '1rem' }}>
              <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Premium School Ties</h2>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                Our ties are crafted from premium woven fabric designed to maintain its shape and vibrant color wash after wash. They are meticulously tailored to provide a professional and neat appearance, perfectly matching your school's uniform standards while offering exceptional durability for daily wear.
              </p>
            </div>
          </div>

          {/* Second Item: Belts */}
          <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 300px', maxWidth: '400px', textAlign: 'center' }}>
              <img src={beltsImage} alt="Belts" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }} />
              <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 'bold' }}>Belts</h3>
            </div>
            <div style={{ flex: '2 1 400px', padding: '1rem' }}>
              <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>High-Quality Belts</h2>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                Our belts feature sturdy, rust-resistant buckles and strong, flexible webbing for long-lasting comfort. They are engineered to withstand the rigors of daily school life, ensuring a secure and adjustable fit while maintaining a polished, school-approved look.
              </p>
            </div>
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
