import React from 'react';

export default function ReservationStep({ icon: Icon, text }) {
  return (
    <div className="step-card">
      <div className="icon-box">
        <Icon className="step-icon" />
      </div>
      <span className="step-text">{text}</span>
    </div>
  );
}