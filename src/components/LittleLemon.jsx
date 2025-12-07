import React, { useState } from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import MainContent from './MainContent/MainContent';
import ReservationModal from './ReservationModal/ReservationModal';
import './LittleLemon.css';

export default function LittleLemon() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="little-lemon-container">
      <Header />
      <Hero />
      <MainContent onOpenModal={() => setIsModalOpen(true)} />
      <ReservationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}