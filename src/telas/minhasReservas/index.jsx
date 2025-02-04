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
        { id: 1, room: "sala 24", code: "01", time: "13h-13:50" },
        { id: 2, room: "sala 24", code: "01", time: "13h-13:50" },
        { id: 3, room: "sala 24", code: "01", time: "13h-13:50" },
        { id: 4, room: "sala 24", code: "01", time: "13h-13:50" },
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
        // Overlay que cobre a tela inteira com o fundo borrado
        <div className="modal-overlay" onClick={() => navigate('/laboratorios')}>
            {/* Conteúdo principal do modal; o clique aqui não fecha o overlay */}
            <main className="reservations-page" onClick={(e) => e.stopPropagation()}>
                <div className="reservations-container">
                    <header className="reservations-header">
                        <h1 className="reservations-title">Minhas Reservas</h1>
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
                        // Overlay para o CancelModal, também interrompe a propagação para não fechar o modal de reservas
                        <div className="modal-overlay" onClick={(e) => e.stopPropagation()}>
                            <CancelModal
                                onConfirm={handleConfirmCancel}
                                onCancel={handleCancel}
                            />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
