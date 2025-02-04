import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logoUnifesspa from '../assets/images/70672ce5848878a5f7f6c8586ae7e6be78a25b89.png';

export default function RealizarReservas() {
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

            <form className="reserva-form">
                <div className="input-group">
                    <input
                        type="text"
                        className="reserva-input"
                        placeholder="Horário"
                    />
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        className="reserva-input"
                        placeholder="Código"
                    />
                </div>

                <div className="input-group">
                    <input
                        type="password"
                        className="reserva-input"
                        placeholder="Senha"
                    />
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