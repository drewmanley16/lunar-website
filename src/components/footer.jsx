import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="lofi-footer">
      <div className="footer-left">
        <p>Made by Oregon Blockchain Group</p>
      </div>

      <div className="footer-center">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/music">Music</a>
        <a href="/contact">Contact</a>
      </div>

      <div className="footer-right">
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
        <a href="https://oregonblockchain.org" target="_blank" rel="noreferrer">Website</a>
      </div>
    </footer>
  );
}
