import React from 'react';

export default function ReservationCard({ room, code, time, onCancel }) {
    return (
        <div className="reservation-card">
            <div className="card-header">
                <h3 className="room-number">{room}</h3>
            </div>
            <div className="reservation-details">
                <p className="reservation-detail">
                    <strong>Código:</strong> {code}
                </p>
                <p className="reservation-detail">
                    <strong>Horário:</strong> {time}
                </p>
            </div>
            <button
                className="cancel-button"
                onClick={onCancel}
                aria-label="Cancelar reserva"
            >
                Cancelar Reserva
            </button>
        </div>
    );
}