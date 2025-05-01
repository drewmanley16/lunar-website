import React from "react";
import "./buy.css";

function Buy() {
  return (
    <div className="buy-now-page">
      <div className="buy-now-container">
        <h1>Buy Lunar</h1>
        <p>
          We’re not ready yet for automated shipping — fill out the form below and we'll deliver it to you!
        </p>
        <form className="buy-now-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Anything else you want to tell us?" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Buy;
