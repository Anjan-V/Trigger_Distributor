import React, { useState, useEffect } from 'react';
import { Star, Plus } from 'lucide-react';
import ReviewCard from '../components/ReviewCard';
import { db } from '../firebase';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import './Reviews.css';

const defaultReviews = [
  {
    name: "Principal Rajesh K.",
    school: "St. Mary's Public School",
    rating: 5,
    comment: "Trigger Distributor has been our sole supplier for the past 4 years. Their quality of uniforms and timely delivery of books have made our academic preparations completely stress-free.",
    delay: "100"
  },
  {
    name: "Anitha V.",
    school: "Little Flower High School",
    rating: 5,
    comment: "The custom metal badges they created for our student council were phenomenal. Highly professional team, always reachable via WhatsApp.",
    delay: "200"
  },
  {
    name: "Suresh Menon",
    school: "Bharathiya Vidya Bhavan",
    rating: 4,
    comment: "Very competitive pricing on bulk exam papers and packing covers. A trustworthy vendor in the Thrissur region.",
    delay: "300"
  }
];

const Reviews = () => {
  const [formData, setFormData] = useState({ name: '', school: '', rating: '5', comment: '' });
  const [submitted, setSubmitted] = useState(false);
  const [reviews, setReviews] = useState(defaultReviews);
  const [loading, setLoading] = useState(true);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedReviews = [];
      querySnapshot.forEach((doc) => {
        fetchedReviews.push({ id: doc.id, ...doc.data() });
      });
      
      if (fetchedReviews.length > 0) {
        setReviews(fetchedReviews);
      } else {
        setReviews(defaultReviews);
      }
      setLoading(false);
    }, (error) => {
      console.error("Error fetching reviews from Firestore: ", error);
      // Fallback to localStorage or defaults if Firestore fails (e.g., permissions)
      const savedReviews = localStorage.getItem('triggerReviews');
      if (savedReviews) {
        setReviews(JSON.parse(savedReviews));
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    let value = e.target.value;

    // Enforce max 5 immediately on input change for rating
    if (e.target.name === 'rating') {
      if (parseFloat(value) > 5) value = '5';
    }

    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let finalRating = parseFloat(formData.rating);
    if (isNaN(finalRating)) finalRating = 5;
    if (finalRating > 5) finalRating = 5;
    if (finalRating < 1) finalRating = 1;

    const newReview = {
      name: formData.name,
      school: formData.school,
      rating: finalRating,
      comment: formData.comment,
      delay: "100",
      createdAt: serverTimestamp()
    };

    try {
      await addDoc(collection(db, 'reviews'), newReview);
      setFormData({ name: '', school: '', rating: '5', comment: '' });
      setSubmitted(true);
    } catch (error) {
      console.error("Error adding review: ", error);
      alert("There was an error submitting your review. Please try again.");
    }
  };

  const averageRating = reviews.length > 0
    ? (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1)
    : 0;

  const renderStars = (rating) => {
    return (
      <div className="review-stars overall-stars">
        {[...Array(5)].map((_, i) => {
          const fillPercentage = Math.max(0, Math.min(100, (rating - i) * 100));
          if (fillPercentage >= 100) {
            return <Star key={i} size={28} className="star-filled" fill="currentColor" />;
          } else if (fillPercentage <= 0) {
            return <Star key={i} size={28} className="star-empty" fill="none" />;
          } else {
            return (
              <div key={i} style={{ position: 'relative', display: 'inline-flex' }}>
                <Star size={28} className="star-empty" fill="none" />
                <Star
                  size={28}
                  className="star-filled"
                  fill="currentColor"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    clipPath: `inset(0 ${100 - fillPercentage}% 0 0)`
                  }}
                />
              </div>
            );
          }
        })}
      </div>
    );
  };

  return (
    <div className="reviews-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title fade-in">Client Testimonials</h1>
          <p className="page-subtitle fade-in delay-100">Hear what schools across Kerala & TamilNadu have to say about us.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="reviews-actions-header slide-up" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', gap: '1rem' }}>
            
            <div style={{ flex: 1 }}></div>

            <div className="overall-rating-horizontal" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'var(--color-surface)', padding: '0.75rem 1.5rem', borderRadius: '10px', boxShadow: 'var(--shadow-sm)', border: '1px solid rgba(0, 0, 0, 0.05)', margin: '0 auto' }}>
              <h2 className="overall-rating-title" style={{ margin: 0, fontSize: '1.1rem' }}>Overall Rating</h2>
              <div className="overall-rating-score-box" style={{ margin: 0 }}>
                <span className="score-number" style={{ fontSize: '1.8rem' }}>{averageRating}</span>
                <span className="score-out-of" style={{ fontSize: '1rem' }}>/ 5</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', margin: '-0.5rem 0', transform: 'scale(0.8)', transformOrigin: 'center left' }}>
                {renderStars(parseFloat(averageRating))}
              </div>
            </div>

            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <button 
                className="btn btn-primary" 
                onClick={() => setIsFormVisible(!isFormVisible)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', height: 'fit-content' }}
              >
                <Plus size={20} /> {isFormVisible ? 'Close Form' : (submitted ? 'Submit another review' : 'Add review')}
              </button>
            </div>

          </div>

          {isFormVisible && (
            <div className="modal-overlay fade-in" onClick={() => { setIsFormVisible(false); if(submitted) setSubmitted(false); }}>
              <div className="review-form-container slide-up modal-content" onClick={(e) => e.stopPropagation()}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h2 className="section-title" style={{ margin: 0 }}>Leave a Review</h2>
                  <button 
                    onClick={() => { setIsFormVisible(false); if(submitted) setSubmitted(false); }} 
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-light)', padding: '0.5rem', display: 'flex' }}
                    aria-label="Close form"
                  >
                    <Plus size={28} style={{ transform: 'rotate(45deg)' }} />
                  </button>
                </div>
                
                {submitted ? (
                  <div className="success-message" style={{ textAlign: 'center', padding: '2rem 0' }}>
                    <h3 style={{ color: '#25D366', marginBottom: '1rem', fontSize: '1.5rem' }}>Thank you for your feedback!</h3>
                    <p style={{ marginBottom: '2rem', color: 'var(--color-text)' }}>Your review has been successfully submitted.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                      <button className="btn btn-secondary" onClick={() => { setIsFormVisible(false); setSubmitted(false); }} style={{ padding: '0.75rem 1.5rem', background: '#f1f5f9', color: '#334155', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: '600' }}>Close</button>
                      <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Submit Another</button>
                    </div>
                  </div>
                ) : (
                  <form className="review-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="school">School / Institution Name</label>
                      <input type="text" id="school" name="school" required value={formData.school} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="rating">Rating (1-5)</label>
                      <input
                        type="number"
                        id="rating"
                        name="rating"
                        min="1"
                        max="5"
                        step="0.1"
                        required
                        value={formData.rating}
                        onChange={handleChange}
                        placeholder="Eg: 1-5"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="comment">Your Review</label>
                      <textarea id="comment" name="comment" rows="4" required value={formData.comment} onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary submit-btn">Submit Review</button>
                  </form>
                )}
              </div>
            </div>
          )}

          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
