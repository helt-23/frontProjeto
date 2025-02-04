import React, { useState } from 'react';
import ReservationCard from './ReservationCard';
import CancelModal from './CancelReserva/CancelModal'; // Importe o novo componente
import './App.css';

export default function MinhasReservas() {
    const [selectedReservation, setSelectedReservation] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const reservationsData = [
        { id: 1, room: "sala 24", code: "01", time: "13h-13:50" },
        { id: 2, room: "sala 24", code: "01", time: "13h-13:50" },
        { id: 3, room: "sala 24", code: "01", time: "13h-13:50" },
    ];

    const handleCardClick = (reservationId) => {
        setSelectedReservation(reservationId);
        setShowModal(true);
    };

    const handleConfirmCancel = () => {
        // Lógica para cancelar a reserva
        console.log("Cancelar reserva:", selectedReservation);
        setShowModal(false);
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    return (
        <main className="reservations-page">
            <div className="reservations-container">
                <header className="reservations-header">
                    <h1 className="reservations-title">Minhas reservas</h1>
                    <div className="user-avatar" aria-label="User avatar" role="img" />
                </header>

                <section className="reservation-list">
                    {reservationsData.map((reservation) => (
                        <ReservationCard
                            key={reservation.id}
                            room={reservation.room}
                            code={reservation.code}
                            time={reservation.time}
                            onClick={() => handleCardClick(reservation.id)}
                        />
                    ))}
                </section>

                {showModal && (
                    <div className="modal-overlay">
                        <CancelModal
                            onConfirm={handleConfirmCancel}
                            onCancel={handleCancel}
                        />
                    </div>
                )}
            </div>
        </main>
    );
}