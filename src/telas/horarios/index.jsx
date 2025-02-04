import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./horarios.css";

// Gerar horários das 08:00 às 13:00
const timeSlots = Array.from({ length: 6 }, (_, i) => `${8 + i}:00`);

export default function LabScheduleComponent() {
    const navigate = useNavigate();

    return (
        <div className="schedule-wrapper">
            {/* Cabeçalho */}
            <button className="botao-voltar" onClick={() => navigate('/laboratorios')}>
            </button>
            <header className="schedule-header">
                <h1>Horários do Laboratório</h1>
            </header>

            {/* Seção de Descrição */}
            <section className="description-section">
                <h2>Descrição</h2>
                <p>
                    Laboratório de informática com 30 lugares equipados com computadores e um espaço de acessibilidade.<br />
                    Ideal para aulas, atividades, cursos e exercícios com tecnologia.
                </p>
            </section>

            {/* Seção da Tabela de Horários */}
            <section className="table-section">
                <table className="schedule-table">
                    <thead>
                        <tr>
                            <th>Horário</th>
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
            </section>
        </div>
    );
}
