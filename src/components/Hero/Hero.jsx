import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-overlay">
        <img 
          src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80" 
          alt="Plat de pâtes aux crevettes"
          className="hero-image"
        />
      </div>
    </div>
  );
}