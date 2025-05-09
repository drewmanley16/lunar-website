import React from "react";
import './contact.css';
import boardwalkBack from '../images/boardwalkback.png';
import boardwalkFore from '../images/boardwalkfore.png';
import ShootingStars from "../components/stars";
import SmallStars from "../components/small-stars";

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
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;