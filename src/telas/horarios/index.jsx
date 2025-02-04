import React from "react";
import { Link } from "react-router-dom";
import "./horarios.css";

// Gerar horários das 08:00 às 13:00
const timeSlots = Array.from({ length: 6 }, (_, i) => '${8 + i}:00');

export default function LabScheduleComponent() {
    return (
        <main className="lab-schedule-container">
            {/* Header */}
            <header className="header">
                <h1>Horários do Laboratório</h1>
            </header>

            {/* Caixa de Descrição */}
            <div className="description-box">
                <h2>Descrição</h2>
                <p>
                    Laboratório de informática. Possui 30 lugares com computadores disponíveis e um lugar para acessibilidade.<br />
                    Usado para aulas, atividades, cursos e exercícios com participação de computadores.
                </p>
            </div>

            {/* Tabela de Horários */}
            <table className="schedule-table">
                <thead>
                    <tr>
                        <th className="time-header">Horário</th>
                        <th>Segunda</th>
                        <th>Terça</th>
                        <th>Quarta</th>
                        <th>Quinta</th>
                        <th>Sexta</th>
                    </tr>
                </thead>
                <tbody>
                    {timeSlots.map((time) => (
                        <tr key={time}>
                            <td className="time-cell">{time}</td>
                            {[...Array(5)].map((_, i) => (
                                <td key={i} className="available-cell">
                                    <Link to="/realizarReservas" className="slot-link">
                                        Disponível
                                    </Link>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}