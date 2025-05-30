import React, { useState } from "react";
import "./buy.css";
import ShootingStars from "../components/stars";
import Footer from "../components/footer";

function Buy() {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToForm = () => {
    document.getElementById('order-form').scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      name: "Lunar Original",
      description: "Our signature sleep solution, designed for consistency and comfort.",
      price: "$299",
      details: "Includes breathable material, smart cooling tech, and calming scent infusion.",
      sizes: ["Single", "6-Pack", "30-Rack"]
    },
    {
      name: "Lunar Dream",
      description: "Enhanced sleep experience with added support.",
      price: "$399",
      details: "Features memory foam layering, white noise syncing, and app integration.",
      sizes: ["Single", "6-Pack", "30-Rack"]
    },
    {
      name: "Lunar Premium",
      description: "Ultimate sleep technology for deep and rejuvenating rest.",
      price: "$499",
      details: "Comes with bio-adaptive sensors, REM tracking, and personalized feedback reports.",
      sizes: ["Single", "6-Pack", "30-Rack"]
    }
  ];

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
      <div className="hero-section">
        <h1>Experience Lunar</h1>
        <p>Transform your sleep with our premium sleep solutions</p>
        <button className="scroll-button" onClick={scrollToForm}>
          Order Now
        </button>
      </div>

      <div className="products-section">
        <h2>Our Products</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <div
              key={index}
              className="product-card"
              onClick={() => setSelectedProduct(product)}
              style={{ cursor: "pointer" }}
            >
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="price">{product.price}</span>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="product-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProduct.name}</h2>
            <p><strong>Price:</strong> {selectedProduct.price}</p>
            <p>{selectedProduct.details}</p>
            <div className="product-sizes">
              <p><strong>Available Sizes:</strong></p>
              <ul>
                {selectedProduct.sizes.map((size, idx) => (
                  <li key={idx}>{size}</li>
                ))}
              </ul>
            </div>
            <button onClick={() => setSelectedProduct(null)}>Close</button>
          </div>
        </div>
      )}

      <div id="order-form" className="form-section">
        <div className="buy-header">
          <h2>Place Your Order</h2>
          <p>Fill out this short form and we'll reach out to coordinate delivery directly.</p>
        </div>

        <form
          className="buy-form"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const orders = products.map((product, index) => {
              const selection = formData.get(`product-${index}`);
              const quantity = formData.get(`quantity-${index}`);
              return quantity > 0 ? `${quantity} x ${selection}` : null;
            }).filter(Boolean);

            alert(`Thanks! You ordered:\n${orders.join("\n")}`);
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
            Select Product & Quantity
            {products.map((product, index) => (
              <div className="order-row" key={index}>
                <select name={`product-${index}`}>
                  {product.sizes.map((size, i) => (
                    <option key={i} value={`${product.name} - ${size}`}>
                      {product.name} — {size}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  name={`quantity-${index}`}
                  min="0"
                  placeholder="Qty"
                />
              </div>
            ))}
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>

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
