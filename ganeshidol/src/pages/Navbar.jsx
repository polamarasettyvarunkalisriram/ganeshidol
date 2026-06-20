import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="logo-section">
        <img
          src="/ganesh.jpg"
          alt="Ganesh Logo"
          className="logo-img"
        />

        <div className="logo-text">
          <h2>Ganesh Idols</h2>
          <span>Eco Friendly Collection</span>
        </div>
      </div>

      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-right">
        <span className="ganesh-badge">
          🕉️ Jai Shri Ganesh
        </span>

        <a
          href="https://wa.me/919398171713"
          className="whatsapp-btn"
        >
          WhatsApp
        </a>
      </div>

    </nav>
  );
};

export default Navbar;