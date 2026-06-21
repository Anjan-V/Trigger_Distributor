import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
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
          <div className="overall-rating-container slide-up">
            <div className="overall-rating-content">
              <h2 className="overall-rating-title">Overall Rating</h2>
              <div className="overall-rating-score-box">
                <span className="score-number">{averageRating}</span>
                <span className="score-out-of">/ 5</span>
              </div>
              {renderStars(parseFloat(averageRating))}
              <p className="total-reviews-count">Based on {reviews.length} reviews</p>
            </div>
          </div>

          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>
      </section>

      <section className="section submit-review-section">
        <div className="container">
          <div className="review-form-container slide-up">
            <h2 className="section-title">Leave a Review</h2>
            {submitted ? (
              <div className="success-message">
                <h3>Thank you for your feedback!</h3>
                <p>Your review has been submitted for approval.</p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Submit Another</button>
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
      </section>
    </div>
  );
};

export default Reviews;
