import React from 'react';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import ReservationStep from './ReservationStep';

export default function ReservationSteps() {
  const steps = [
    { icon: Calendar, text: "Choisissez votre date" },
    { icon: Clock, text: "Sélectionnez l'heure" },
    { icon: Users, text: "Indiquez le nombre de convives" },
    { icon: CheckCircle, text: "Confirmation instantanée" }
  ];

  return (
    <div className="steps-container">
      {steps.map((step, index) => (
        <ReservationStep key={index} icon={step.icon} text={step.text} />
      ))}
    </div>
  );
}