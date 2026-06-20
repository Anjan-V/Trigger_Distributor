import React, { useState } from 'react';
import ReviewCard from '../components/ReviewCard';
import './Reviews.css';

const Reviews = () => {
  const [formData, setFormData] = useState({ name: '', school: '', rating: '5', comment: '' });
  const [submitted, setSubmitted] = useState(false);
  const [reviews, setReviews] = useState([
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
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      name: formData.name,
      school: formData.school,
      rating: parseInt(formData.rating, 10),
      comment: formData.comment,
      delay: "100"
    };
    
    setReviews([newReview, ...reviews]);
    
    // Reset form and show success
    setFormData({ name: '', school: '', rating: '5', comment: '' });
    setSubmitted(true);
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
                <button className="btn btn-outline" onClick={() => setSubmitted(false)}>Submit Another</button>
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
                  <label htmlFor="rating">Rating</label>
                  <select id="rating" name="rating" value={formData.rating} onChange={handleChange}>
                    <option value="5">5 - Excellent</option>
                    <option value="4">4 - Very Good</option>
                    <option value="3">3 - Average</option>
                    <option value="2">2 - Poor</option>
                    <option value="1">1 - Terrible</option>
                  </select>
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
