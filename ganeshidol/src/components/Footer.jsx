import React from 'react'
import "./Footer.css";

import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";
const Footer = () => {
  return (
     <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>🕉️ Ganesh Idol Store</h2>

          <p>
            Premium eco-friendly Ganesh idols
            crafted with devotion and tradition.
          </p>

          <div className="social-icons">

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaFacebook />
            </a>

            <a href="#">
              <FaWhatsapp />
            </a>

          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>

          <p>
            <FaMapMarkerAlt /> Visakhapatnam, Andhra Pradesh

          </p>

          <p>
            <FaPhone /> +91 9398171713
          </p>

          <p>
            <FaEnvelope /> sriram@gmail.com
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Ganesh Idol Store | All Rights Reserved
      </div>

    </footer>
  );
}

export default Footer