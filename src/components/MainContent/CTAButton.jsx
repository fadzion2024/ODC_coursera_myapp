import React from 'react';

export default function CTAButton({ onClick }) {
  return (
    <button className="cta-button" onClick={onClick}>
      Commencer ma réservation
    </button>
  );
}