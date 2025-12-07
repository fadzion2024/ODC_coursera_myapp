import React, { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';
import './ReservationModal.css';

export default function ReservationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    phone: '',
    email: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.date || !formData.time || !formData.name || !formData.phone || !formData.email) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({
        date: '',
        time: '',
        guests: '2',
        name: '',
        phone: '',
        email: ''
      });
    }, 3000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <X className="close-icon" />
        </button>

        {!isSubmitted ? (
          <>
            <h2 className="modal-title">Réservez votre table</h2>
            <p className="modal-subtitle">Remplissez le formulaire ci-dessous</p>

            <div className="reservation-form">
              <div className="form-group">
                <label className="form-label">Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="form-input"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Heure *</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Sélectionnez une heure</option>
                  <option value="12:00">12:00</option>
                  <option value="12:30">12:30</option>
                  <option value="13:00">13:00</option>
                  <option value="13:30">13:30</option>
                  <option value="14:00">14:00</option>
                  <option value="19:00">19:00</option>
                  <option value="19:30">19:30</option>
                  <option value="20:00">20:00</option>
                  <option value="20:30">20:30</option>
                  <option value="21:00">21:00</option>
                  <option value="21:30">21:30</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Nombre de convives *</label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="form-input"
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'personne' : 'personnes'}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Nom complet *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jean Dupont"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Téléphone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+33 6 12 34 56 78"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jean.dupont@example.com"
                  className="form-input"
                />
              </div>

              <button onClick={handleSubmit} className="submit-button">
                Confirmer ma réservation
              </button>
            </div>
          </>
        ) : (
          <div className="success-message">
            <div className="success-icon">
              <CheckCircle className="check-icon" />
            </div>
            <h2 className="success-title">Réservation confirmée !</h2>
            <p className="success-text">
              Merci {formData.name} ! Votre table pour {formData.guests} {formData.guests === '1' ? 'personne' : 'personnes'} est réservée le {new Date(formData.date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} à {formData.time}.
            </p>
            <p className="success-subtext">
              Un email de confirmation a été envoyé à {formData.email}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}