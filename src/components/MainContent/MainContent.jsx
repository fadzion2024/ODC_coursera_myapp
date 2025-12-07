import React from 'react';
import ReservationSteps from './ReservationSteps';
import CTAButton from './CTAButton';
import './MainContent.css';

export default function MainContent({ onOpenModal }) {
  return (
    <div className="main-content">
      <h2 className="main-title">
        Réservez votre table
      </h2>
      <p className="description">
        Profitez d'une expérience culinaire authentique dans une ambiance chaleureuse. 
        Réservation simple et rapide en quelques étapes.
      </p>

      <ReservationSteps />
      <CTAButton onClick={onOpenModal} />

      <p className="footer-text">
        La réservation prend moins de 2 minutes
      </p>
    </div>
  );
}