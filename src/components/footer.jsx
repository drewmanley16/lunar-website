import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="lofi-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Company</h3>
          <a href="/about">About</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <a href="/faq">FAQs</a>
          <a href="/support">Support</a>
          <a href="/blog">Blog</a>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/shipping">Shipping</a>
        </div>

        <div className="footer-section">
          <h3>Connect</h3>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <img src="/github-logo.png" alt="GitHub" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src="/twitter-logo.png" alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src="/instagram-logo.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Lunar. All rights reserved.</p>
      </div>
    </footer>
  );
}
