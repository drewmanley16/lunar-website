import React, { useState } from "react";
import "./buy.css";
import ShootingStars from "../components/stars";
import Footer from "../components/footer";

function Buy() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToForm = () => {
    document.getElementById('order-form').scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      question: "How does Lunar work?",
      answer: "Lunar uses advanced sleep technology to create the perfect environment for restful sleep."
    },
    {
      question: "What's the delivery time?",
      answer: "We typically deliver within 2-3 business days after order confirmation."
    },
    {
      question: "Do you offer returns?",
      answer: "Yes, we offer a 30-day satisfaction guarantee on all our products."
    },
    {
      question: "Is there a warranty?",
      answer: "All Lunar products come with a 1-year warranty against manufacturing defects."
    }
  ];

  return (
    <div className="buy-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Experience Lunar</h1>
        <p>Transform your sleep with our premium sleep solutions</p>
        <button className="scroll-button" onClick={scrollToForm}>
          Order Now
        </button>
      </div>

      {/* Products Section */}
      <div className="products-section">
        <h2>Our Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <h3>Lunar Original</h3>
            <p>Our signature sleep solution</p>
            <span className="price">$299</span>
          </div>
          <div className="product-card">
            <h3>Lunar Dream</h3>
            <p>Enhanced sleep experience</p>
            <span className="price">$399</span>
          </div>
          <div className="product-card">
            <h3>Lunar Premium</h3>
            <p>Ultimate sleep technology</p>
            <span className="price">$499</span>
          </div>
        </div>
      </div>

      {/* Order Form Section */}
      <div id="order-form" className="form-section">
        <div className="buy-header">
          <h2>Place Your Order</h2>
          <p>
            Fill out this short form and we'll reach out to coordinate delivery directly.
          </p>
        </div>

        <form
          className="buy-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! We'll reach out soon 🌙");
          }}
        >
          <label>
            Full Name
            <input type="text" name="name" required />
          </label>

          <label>
            Email
            <input type="email" name="email" required />
          </label>

          <label>
            Address
            <input type="text" name="address" required />
          </label>

          <label>
            What would you like to order?
            <textarea name="order" rows="3" placeholder="e.g. 2x Lunar Original, 1x Lunar Dream" />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openFaq === index ? 'open' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-toggle">{openFaq === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="shooting-stars-container">
        <ShootingStars count={8} />
      </div>
      <Footer />
    </div>
  );
}

export default Buy;

