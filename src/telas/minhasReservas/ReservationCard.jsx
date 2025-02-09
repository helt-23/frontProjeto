import React from 'react';
import {formatarData} from '../../scripts.js'

export default function ReservationCard({ laboratorio, dataReserva, horarios, onCancel }) {
    //console.log(horarios[0].diaSemana)
    return (
        <div className="reservation-card">
            <div className="card-header">
                <h3 className="room-number">{laboratorio}</h3>
            </div>
            <div className="reservation-details">
                <p className="reservation-detail">
                    <strong>Data de criacao:</strong> {formatarData(dataReserva)}
                </p>
                <div className="table-section reserva">
                    <strong>Lista de horarios</strong>
                    {
                        horarios && horarios.length > 0 ? (
                            <>
                                <h3>{horarios[0].diaSemana}</h3>
                                <table className="schedule-table">
                                    <thead>
                                        <tr>
                                            <th>Inicio</th>
                                            <th>Fim</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        {
                                            horarios.map((horario, index) => {
                                                return(
                                                    <tr key={index}>
                                                        <td>{horario.horaInicio}</td>
                                                        <td>{horario.horaFim}</td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table> 
                            </>
                        ):(
                            <p>Carregando...</p>
                        )
                    }
                    
                   
                </div>
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