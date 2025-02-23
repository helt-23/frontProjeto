import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ReservationCard from './ReservationCard';
import CancelModal from './CancelReserva/CancelModal';
import './App.css';
import axios from 'axios';
import {url, port} from '../../../configApi.json'
import { LoginContext } from '../../context/LoginContext';
import { validarLogin } from '../../scripts';

export default function MinhasReservas() {
    const {usuarioLogado, logado} = useContext(LoginContext)

    const [reservas, setReservas] = useState([]);
    const [reservaSelecionada, setReservaSelecionada] = useState(null)
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    console.log(reservas)

    const verificarReservas = async () => {
        try {
            const resposta = await axios.get(`${url}:${port}/reserva/usuario/${usuarioLogado.id}`)
            
            if(resposta.status == 200){
                const reservaData = resposta.data
                setReservas(reservaData)
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        validarLogin(logado)
        verificarReservas()
       
    }, [])

    const abrirModal = (reservaId) => {
        setReservaSelecionada(reservaId)
        setShowModal(true);
    };

    const cancelarReserva = async () => {
        try {
            const resposta = await axios.delete(`${url}:${port}/reserva/${reservaSelecionada}`)
            if(resposta.status == 204){
                alert("Reserva cancelada com sucesso!")
                window.location.href = "/minhasReservas"
            }
        } catch (error) {
            console.log(error)
        }
        setReservaSelecionada(null)
        setShowModal(false);
    };

    return (
        <div className="modal-overlay" onClick={() => navigate('/laboratorios')}>
            <main className="reservations-page" onClick={(e) => e.stopPropagation()}>
                <div className="reservations-container">
                    <header className="reservations-header">
                        <h1 className="reservations-title">Minhas Reservas</h1>
                    </header>

                    {
                        reservas.length == 0 ? (
                            <div className='div-semReserva'>
                                <h3>Você não possui reservas</h3>
                                
                            </div>
                        ):(
                            <section className="reservation-list">
                                {reservas.map((reserva, index) => (
                                    <ReservationCard
                                        key={index}
                                        laboratorio={reserva.laboratorio.descricao}
                                        dataReserva={reserva.dataReserva}
                                        horarios={reserva.horarios}
                                        onCancel={() => abrirModal(reserva.id)}
                                    />
                                ))}
                            </section>

                        )
                    }
                    
                    {showModal && (
                        <div className="modal-overlay" onClick={(e) => e.stopPropagation()}>
                            <CancelModal
                                onConfirm={cancelarReserva}
                                onCancel={() => setShowModal(false)}
                            />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}