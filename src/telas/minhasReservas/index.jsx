import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReservationCard from './ReservationCard';
import CancelModal from './CancelReserva/CancelModal';
import './App.css';

export default function MinhasReservas() {
    const [selectedReservation, setSelectedReservation] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const reservationsData = [
        { id: 1, room: "Sala de Reuniões 24", code: "RSV-001", time: "13:00 - 13:50" },
        { id: 2, room: "Auditório Principal", code: "RSV-002", time: "14:00 - 15:30" },
        { id: 3, room: "Laboratório 5", code: "RSV-003", time: "16:00 - 17:00" },
        { id: 4, room: "Sala de Treinamento", code: "RSV-004", time: "09:00 - 10:30" },
        { id: 4, room: "Sala de Treinamento", code: "RSV-004", time: "09:00 - 10:30" },
        { id: 4, room: "Sala de Treinamento", code: "RSV-004", time: "09:00 - 10:30" },
    ];

    const handleCancelClick = (reservationId) => {
        setSelectedReservation(reservationId);
        setShowModal(true);
    };

    const handleConfirmCancel = () => {
        console.log("Reserva cancelada:", selectedReservation);
        setShowModal(false);
    };

    return (
        <div className="modal-overlay" onClick={() => navigate('/laboratorios')}>
            <main className="reservations-page" onClick={(e) => e.stopPropagation()}>
                <div className="reservations-container">
                    <header className="reservations-header">
                        <h1 className="reservations-title">Minhas Reservas</h1>
                    </header>

                    <section className="reservation-list">
                        {reservationsData.map((reservation) => (
                            <ReservationCard
                                key={reservation.id}
                                room={reservation.room}
                                code={reservation.code}
                                time={reservation.time}
                                onCancel={() => handleCancelClick(reservation.id)}
                            />
                        ))}
                    </section>

                    {showModal && (
                        <div className="modal-overlay" onClick={(e) => e.stopPropagation()}>
                            <CancelModal
                                onConfirm={handleConfirmCancel}
                                onCancel={() => setShowModal(false)}
                            />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}