import React from 'react';
import { BookOpen, Shirt, Shield, FileText, Package, LayoutGrid } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import sportsUniformsImage from '../assets/sports_uniforms.png';
import schoolSuppliesImage from '../assets/school_supplies.png';
import heroBanner from '../assets/hero_banner.png';
import examPapersImage from '../assets/exam_papers.png';
import packingCoversImage from '../assets/packing_covers.png';
import socksAccessoriesImage from '../assets/socks_accessories.png';
import './Products.css';

const Products = () => {
  const productCategories = [
    {
      title: "School Books & Guides",
      description: "State syllabus, CBSE, and ICSE textbooks, plus comprehensive study guides and premium notebooks.",
      icon: BookOpen,
      image: heroBanner,
      delay: "100"
    },
    {
      title: "Sports Uniforms",
      description: "High-quality, breathable tracksuits, jerseys, and PT uniforms designed for active students.",
      icon: Shirt,
      image: sportsUniformsImage,
      delay: "200"
    },
    {
      title: "Belts, Ties & Badges",
      description: "Custom-embroidered school ties, adjustable belts, and precisely crafted metal and cloth badges.",
      icon: Shield,
      image: schoolSuppliesImage,
      delay: "300"
    },
    {
      title: "Exam Papers",
      description: "Standardized examination answer sheets, graph papers, and custom-printed school exam booklets.",
      image: examPapersImage,
      delay: "100"
    },
    {
      title: "Packing Covers",
      description: "Durable brown covers, plastic sleeves, and custom-branded packing materials for books.",
      image: packingCoversImage,
      delay: "200"
    },
    {
      title: "Socks & Accessories",
      description: "Comfortable, durable school socks and other essential daily wear accessories.",
      image: socksAccessoriesImage,
      delay: "300"
    }
  ];

  return (
    <div className="products-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title fade-in">Our Products & Services</h1>
          <p className="page-subtitle fade-in delay-100">Comprehensive supplies for a seamless academic year.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="products-catalog">
            {productCategories.map((product, index) => (
              <ProductCard 
                key={index}
                title={product.title}
                description={product.description}
                icon={product.icon}
                image={product.image}
                delay={product.delay}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <h2 className="cta-title">Need custom branding?</h2>
          <p className="cta-subtitle">We provide specialized badging, branded ties, and customized sports uniforms featuring your school's emblem.</p>
          <a href="/contact" className="btn btn-primary">Request a Custom Quote</a>
        </div>
      </section>
    </div>
  );
};

export default Products;
