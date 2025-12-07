import React from 'react';
import Logo from './Logo';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Logo />
        <div>
          <h1 className="header-title">Little Lemon</h1>
          <p className="header-subtitle">Cuisine Méditerranéenne</p>
        </div>
      </div>
    </header>
  );
}