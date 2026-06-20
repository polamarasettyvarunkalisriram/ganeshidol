import React from 'react'
import Navbar from '../pages/Navbar'
import './Hero.css'
const Hero = () => {
  return (
        
             <section className="hero" id="hero">

      <div className="hero-content">

        <span className="tagline">
          🕉️ Eco-Friendly Ganesh Idols
        </span>

        <h1>
          Bring Home
          <span> Lord Ganesha </span>
        </h1>

        <p>
          Discover handcrafted eco-friendly Ganesh
          idols made with devotion, tradition,
          and sustainability.
        </p>

        <div className="hero-buttons">
          <button className="shop-btn">
            Explore Collection
          </button>

          <button className="about-btn">
            Learn More
          </button>
        </div>

      </div>

      <div className="hero-image">
        <img
          src="ganesh1.jpg"
          alt="Ganesh Idol"
        />
      </div>

    </section>
        
  
  )
}

export default Hero