import { useParams } from 'react-router-dom';
import tieImage from '../assets/Tie.jpeg';
import beltsImage from '../assets/belts.jpeg';
import badgesImage from '../assets/school_badges.png';
import stateBoardImage from '../assets/state_board_uniforms.png';
import cbseImage from '../assets/cbse_uniforms.png';
import sportsImage from '../assets/sports_uniforms_cover.png';
import stateTextbooksImage from '../assets/state_textbooks.png';
import ncertBooksImage from '../assets/ncert_books.png';
import studyGuidesImage from '../assets/study_guides.png';
import aiExamPaperImage from '../assets/ai_exam_paper.png';
import aiCover1Image from '../assets/ai_cover_1.png';
import aiCover2Image from '../assets/ai_cover_2.png';
import aiCombinedCoversImage from '../assets/ai_combined_covers.png';
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

    if (decodedName === 'School & Sports Uniforms') {
      return (
        <div className="container category-items">

          {/* First Item: State Board Uniforms */}
          <div className="category-item">
            <div className="category-item-image">
              <img src={stateBoardImage} alt="State Board Uniforms" />
              <h3>State Board Uniforms</h3>
            </div>
            <div className="category-item-content">
              <h2>State Board School Uniforms</h2>
              <p>
                Our state board uniforms are tailored to meet the specific dress code requirements of Kerala and Tamil Nadu state syllabus schools. Made from breathable, easy-care fabrics, these uniforms are designed for comfort during long school hours while maintaining a crisp, professional appearance throughout the academic year.
              </p>
            </div>
          </div>

          {/* Second Item: CBSE Uniforms */}
          <div className="category-item">
            <div className="category-item-image">
              <img src={cbseImage} alt="CBSE Uniforms" />
              <h3>CBSE Uniforms</h3>
            </div>
            <div className="category-item-content">
              <h2>CBSE School Uniforms</h2>
              <p>
                Specially designed for CBSE-affiliated institutions, our uniforms combine modern styling with durable, high-quality materials. Available in a wide range of sizes and customizable with your school's logo and color scheme, these uniforms ensure students look sharp and feel confident every day.
              </p>
            </div>
          </div>

          {/* Third Item: Sports Uniforms */}
          <div className="category-item">
            <div className="category-item-image">
              <img src={sportsImage} alt="Sports Uniforms" />
              <h3>Sports Uniforms</h3>
            </div>
            <div className="category-item-content">
              <h2>Sports & PT Uniforms</h2>
              <p>
                Our sports uniforms are engineered for peak performance using moisture-wicking, stretchable fabrics. From tracksuits and jerseys to PT kits, each piece is designed for maximum flexibility and comfort during physical activities, ensuring students can move freely on the field and in the gym.
              </p>
            </div>
          </div>

        </div>
      );
    }

    if (decodedName === 'School Books & Guides') {
      return (
        <div className="container category-items">

          {/* First Item: State Board Books */}
          <div className="category-item">
            <div className="category-item-image">
              <img src={stateTextbooksImage} alt="State Board Books" />
              <h3>State Board Books</h3>
            </div>
            <div className="category-item-content">
              <h2>State Government Syllabus Textbooks</h2>
              <p>
                We provide official state board textbooks for both Kerala and Tamil Nadu syllabuses. Our comprehensive collection ensures that students have access to the exact curriculum materials required by their state education boards, updated for the current academic year.
              </p>
            </div>
          </div>

          {/* Second Item: NCERT Books */}
          <div className="category-item">
            <div className="category-item-image">
              <img src={ncertBooksImage} alt="NCERT Books" />
              <h3>NCERT Books</h3>
            </div>
            <div className="category-item-content">
              <h2>CBSE Curriculum (NCERT) Books</h2>
              <p>
                Stocking the complete range of NCERT textbooks for CBSE-affiliated schools across all grades. From foundational mathematics to advanced sciences, we ensure reliable access to these essential national curriculum materials with guaranteed authenticity.
              </p>
            </div>
          </div>

          {/* Third Item: Study Guides */}
          <div className="category-item">
            <div className="category-item-image">
              <img src={studyGuidesImage} alt="Study Guides" />
              <h3>Study Guides</h3>
            </div>
            <div className="category-item-content">
              <h2>Comprehensive Study Guides & Companions</h2>
              <p>
                Enhance student learning with our selection of specialized study guides for both State Syllabus and NCERT curriculums. These guides offer detailed explanations, solved examples, and practice questions to support thorough understanding and exam preparation.
              </p>
            </div>
          </div>

        </div>
      );
    }

    if (decodedName === 'Exam Papers') {
      return (
        <div className="container category-items">

          <div className="category-item">
            <div className="category-item-image">
              <img src={aiExamPaperImage} alt="Exam Papers" />
              <h3>Exam Papers</h3>
            </div>
            <div className="category-item-content">
              <h2>High-Quality Exam Papers</h2>
              <p>
                We offer standardized examination answer sheets, graph papers, and custom-printed school exam booklets. Designed for clear writing and durability, our exam papers ensure a professional testing experience for all students.
              </p>
              <ul style={{ textAlign: 'left', marginTop: '1rem', color: 'var(--text-color)' }}>
                <li><strong>Customizable:</strong> We can create custom exam answer papers tailored to your specific requirements, including your school's branding and layout preferences.</li>
              </ul>
            </div>
          </div>

        </div>
      );
    }

    if (decodedName === 'Packing Covers') {
      return (
        <div className="container category-items">

          {/* Split 1: Complete Packaging Solutions */}
          <div className="category-item">
            <div className="category-item-image">
              <img src={aiCombinedCoversImage} alt="School Supplies Packaging" />
              <h3>Complete Packaging</h3>
            </div>
            <div className="category-item-content">
              <h2>Complete Packaging Solutions</h2>
              <p>
                Enhance your school supply kits with our vibrant assortment of packaging solutions. We offer colorful paper rolls, fun name labels, and transparent grid book covers designed to make organizing and protecting school materials both engaging and highly efficient.
              </p>
            </div>
          </div>

          {/* Split 2: Standard Cover */}
          <div className="category-item">
            <div className="category-item-image">
              <img src={aiCover1Image} alt="Standard Packing Covers" />
              <h3>Standard Covers</h3>
            </div>
            <div className="category-item-content">
              <h2>Standard Material Packaging</h2>
              <p>
                Our standard packing covers are manufactured from high-quality, durable materials. They provide an excellent protective layer for bulk materials, school uniforms, and various products, ensuring they remain secure and undamaged during transit and storage.
              </p>
            </div>
          </div>

          {/* Split 2: Second Cover */}
          <div className="category-item">
            <div className="category-item-image">
              <img src={aiCover2Image} alt="Premium Protective Sleeves" />
              <h3>Premium Sleeves</h3>
            </div>
            <div className="category-item-content">
              <h2>Premium Product Packaging</h2>
              <p>
                Keep your products and materials pristine with our premium protective sleeves. These robust covers offer a professional aesthetic while providing superior protection against dust, moisture, and everyday wear and tear during distribution.
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
