import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo-section">
        <img src="/ganesh.jpg" alt="Ganesh Logo" className="logo-img" />
        <div className="logo-text">
          <h2>Ganesh Idols</h2>
          <span>Eco Friendly Collection</span>
        </div>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#products" onClick={() => setMenuOpen(false)}>Products</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>

      {/* Right */}
      <div className="nav-right">
        <span className="ganesh-badge">🕉️ Jai Shri Ganesh</span>

        <a href="https://wa.me/919398171713" className="whatsapp-btn">
          WhatsApp
        </a>
      </div>

    </nav>
  );
};

export default Navbar;