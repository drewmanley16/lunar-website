import React from "react";
import './contact.css';
import boardwalkBack from '../images/boardwalkback.png';
import boardwalkFore from '../images/boardwalkfore.png';
import ShootingStars from "../components/stars";
import SmallStars from "../components/small-stars";
import Footer from "../components/footer";

function Contact() {
  return (
    <div className="contact-page">
      {/* Background Layer */}
      <div
        className="background-layer"
        style={{
          background: `url(${boardwalkBack}) no-repeat center center fixed`,
          backgroundSize: 'cover',
        }}
      ></div>

      {/* Stars Layer */}
      <div className="stars-layer">
        <div className="shooting-stars-container">
          <ShootingStars count={8} />
        </div>
        <div className="small-stars-container">
          <SmallStars count={25} popSpeed={6} />
        </div>
      </div>

      {/* Foreground Layer */}
      <div
        className="foreground-layer"
        style={{
          background: `url(${boardwalkFore}) no-repeat center center fixed`,
          backgroundSize: 'cover',
        }}
      ></div>

      {/* Content Layer */}
      <div className="content-layer">
        <div className="container">
          <h1>Contact Us</h1>
          <div className="subtitle">We would love to hear from you!</div>

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
            Message
            <textarea name="order" rows="3"/>
          </label>

          <button type="submit">Submit</button>
          </form>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;