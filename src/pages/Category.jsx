import { useParams } from 'react-router-dom';
import tieImage from '../assets/Tie.jpeg';
import beltsImage from '../assets/belts.jpeg';
import badgesImage from '../assets/school_badges.png';
import './Category.css';

const Category = () => {
  const { categoryName } = useParams();
  const decodedName = decodeURIComponent(categoryName);

  const renderContent = () => {
    if (decodedName === 'Belts, Ties & Badges') {
      return (
        <div className="container category-items">
          
          {/* First Item: Belts */}
          <div className="category-item">
            <div className="category-item-image">
              <img src={beltsImage} alt="Belts" />
              <h3>Belts</h3>
            </div>
            <div className="category-item-content">
              <h2>High-Quality Belts</h2>
              <p>
                Our belts feature sturdy, rust-resistant buckles and strong, flexible webbing for long-lasting comfort. They are engineered to withstand the rigors of daily school life, ensuring a secure and adjustable fit while maintaining a polished, school-approved look.
              </p>
            </div>
          </div>

          {/* Second Item: Ties */}
          <div className="category-item">
            <div className="category-item-image">
              <img src={tieImage} alt="Ties" />
              <h3>Ties</h3>
            </div>
            <div className="category-item-content">
              <h2>Premium School Ties</h2>
              <p>
                Our ties are crafted from premium woven fabric designed to maintain its shape and vibrant color wash after wash. They are meticulously tailored to provide a professional and neat appearance, perfectly matching your school's uniform standards while offering exceptional durability for daily wear.
              </p>
            </div>
          </div>

          {/* Third Item: Badges */}
          <div className="category-item">
            <div className="category-item-image">
              <img src={badgesImage} alt="Badges" />
              <h3>Badges</h3>
            </div>
            <div className="category-item-content">
              <h2>Precision-Crafted Badges</h2>
              <p>
                Each badge is meticulously crafted with precise detailing using high-quality metal and vibrant enamel finishes. From prefect shields to lapel pins, our badges are designed to represent your school's identity with pride and durability that lasts throughout the academic year. Both metal and cloth badges are available to suit your institution's requirements.
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
