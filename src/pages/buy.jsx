import React, { useState } from "react";
import "./buy.css";
import ShootingStars from "../components/stars";
import Footer from "../components/footer";
import blueCan from "../images/blue-can.png";

function Buy() {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderRows, setOrderRows] = useState([{ product: "", size: "", quantity: 1 }]);

  const products = [
    {
      name: "Lunar Original",
      price: "$299",
      sizes: ["Single", "6-Pack", "30-Rack"],
      image: blueCan
    },
    {
      name: "Lunar Dream",
      price: "$399",
      sizes: ["Single", "6-Pack", "30-Rack"],
      image: blueCan
    },
    {
      name: "Lunar Premium",
      price: "$499",
      sizes: ["Single", "6-Pack", "30-Rack"],
      image: blueCan
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

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToForm = () => {
    document.getElementById("order-form").scrollIntoView({ behavior: "smooth" });
  };

  const handleRowChange = (index, field, value) => {
    const updated = [...orderRows];
    updated[index][field] = value;
    setOrderRows(updated);
  };

  const addOrderRow = () => {
    setOrderRows([...orderRows, { product: "", size: "", quantity: 1 }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const summary = orderRows
      .filter(row => row.product && row.size && row.quantity > 0)
      .map(row => `${row.quantity} x ${row.product} — ${row.size}`);
    alert(`Thanks! You ordered:\n${summary.join("\n")}`);
  };

  const sizesForProduct = (productName) => {
    const product = products.find(p => p.name === productName);
    return product ? product.sizes : [];
  };

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
              <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "12px", marginBottom: "1rem" }} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="product-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: "100%", borderRadius: "12px", marginBottom: "1rem" }} />
            <h2>{selectedProduct.name}</h2>
            <p><strong>Price:</strong> {selectedProduct.price}</p>
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
          <p>Select your product, size, and quantity. Add multiple combos if you'd like.</p>
        </div>

        <form className="buy-form" onSubmit={handleSubmit}>
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

          {orderRows.map((row, index) => (
            <div className="order-row" key={index}>
              <select
                value={row.product}
                onChange={(e) => handleRowChange(index, "product", e.target.value)}
                required
              >
                <option value="">Select Product</option>
                {products.map((p, i) => (
                  <option key={i} value={p.name}>{p.name}</option>
                ))}
              </select>

              <select
                value={row.size}
                onChange={(e) => handleRowChange(index, "size", e.target.value)}
                required
                disabled={!row.product}
              >
                <option value="">Select Size</option>
                {sizesForProduct(row.product).map((size, i) => (
                  <option key={i} value={size}>{size}</option>
                ))}
              </select>

              <input
                type="number"
                min="1"
                placeholder="Qty"
                value={row.quantity}
                onChange={(e) => handleRowChange(index, "quantity", e.target.value)}
                required
              />
            </div>
          ))}

          <button type="button" onClick={addOrderRow}>+ Add Another</button>
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
