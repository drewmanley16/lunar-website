import React from "react";
import "./buy.css";
import ShootingStars from "../components/stars";
import Footer from "../components/footer";

function Buy() {
  return (
    <div className="buy-page">
      <div className="buy-header">
        <h1>Order Lunar</h1>
        <p>
          Fill out this short form and we’ll reach out to coordinate delivery directly.
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
            <div className="shooting-stars-container">
              <ShootingStars count={8} />
            </div>
      <Footer />
    </div>
  );
}

export default Buy;

