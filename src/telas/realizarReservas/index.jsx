// index.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logoUnifesspa from '../assets/images/70672ce5848878a5f7f6c8586ae7e6be78a25b89.png';

export default function RealizarReservas() {
    const [selectedSlots, setSelectedSlots] = useState([]);

    const timeSlots = [
        '07:00 - 08:00',
        '08:00 - 09:00',
        '09:00 - 10:00',
        '10:00 - 11:00',
        '11:00 - 12:00',
        '13:00 - 14:00',
        '14:00 - 15:00',
        '15:00 - 16:00',
        '16:00 - 17:00',
        '17:00 - 18:00',
    ];

    const handleCheckboxChange = (time) => {
        setSelectedSlots(prev =>
            prev.includes(time)
                ? prev.filter(t => t !== time)
                : [...prev, time]
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Horários selecionados:', selectedSlots);
        // Lógica para enviar os dados
    };

    return (
        <div className="reserva-container">
            <div className="reserva-header">
                <Link to="/">
                    <img
                        src={logoUnifesspa}
                        className="logo-unifesspa"
                        alt="Logo UNIFESSPA"
                    />
                </Link>
            </div>

            <h1 className="reserva-titulo">Realizar Reserva</h1>

            <form className="reserva-form" onSubmit={handleSubmit}>
                <div className="day-section">
                    <h3 className="day-title">Segunda-feira</h3>
                    <div className="time-slots-grid">
                        {timeSlots.map((time) => (
                            <label key={time} className="time-slot">
                                <input
                                    type="checkbox"
                                    checked={selectedSlots.includes(time)}
                                    onChange={() => handleCheckboxChange(time)}
                                />
                                <span className="checkmark"></span>
                                {time}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="botoes-container">
                    <button type="submit" className="botao botao-primario">
                        Confirmar
                    </button>
                    <Link to="/horarios" className="botao botao-secundario">
                        Voltar
                    </Link>
                </div>
            </form>
        </div>
    );
}