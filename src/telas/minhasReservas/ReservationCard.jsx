import React from 'react';

export default function ReservationCard({ room, code, time, onClick }) {
    return (
        <article className="reservation-card" onClick={onClick}>
            <h2 className="room-number">{room}</h2>
            <p className="reservation-code">Código: {code}</p>
            <p className="reservation-time">horário: {time}</p>
        </article>
    );
}