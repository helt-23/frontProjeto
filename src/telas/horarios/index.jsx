import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./horarios.css";

import {url, port} from '../../../configApi.json'
import {formatarData} from '../../scripts.js'
import axios from "axios";

export default function LabScheduleComponent() {
    const navigate = useNavigate();
    const location = useLocation()
    const {sala, lugares, descricao, detalhe, idLab} = location.state || {}

    const [horarios, setHorarios] = useState([])
    const [diasSemana, setDiasSemana] = useState(["Segunda", "Terça", "Quarta", "Quinta", "Sexta"])

    const [horariosUnicos, setHorariosUnicos] = useState([])

    const buscarHorarios = async () => {    
        try {
            const response = await axios.get(`${url}:${port}/horarios/lab/${idLab}`)
            setHorarios(response.data)    
        } catch (error) {
            console.log("Erro ao buscar horários" + error)
        }
    }

    useEffect(() => {
        if(idLab){
            buscarHorarios()
        }
    }, [idLab])

 

    //Função para montar a tabela de horários dinamicamente
    useEffect(() => {
        function montarTabelaDeHorarios(){
    
            //Adicionando o cabecalho dos dias da semana
    
            //Filtrar somente os horários unicos
            //Basicamente, essa função percorre o meu array de horários e através do SET, retira horários duplicados, retornando uma unica ocorrencia de intervalos de horário
            const hrUnicos = [... new Set(horarios.map(h => `${h.horaInicio} - ${h.horaFim}`))]
            setHorariosUnicos(hrUnicos)
        }

        montarTabelaDeHorarios()
    }, [horarios])
    
    //Essa função retorna todos os horários que são de um determinado intervalo, independente do dia
    function listHorarios(horario){
        //Para conseguir rodar os horários dinamicamente, eu recebo uma informação do hoário nessa função e listo e busco esse dado na função
        //O filter retorna um horário que retorna um array. Esse array constitui a linha da tabel
        const horariosDoDia = horarios.filter(h => `${h.horaInicio} - ${h.horaFim}` === horario)
        console.log(horariosDoDia)
        return horariosDoDia
    }

    
    
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
                <h2>{descricao}</h2>
                <p>
                    Lugares disponíveis: {lugares}
                </p>
                <p>
                    Localização: {sala}
                </p>
                <p>
                    {detalhe}
                </p>
                
            </section>

            {/* Seção da Tabela de Horários */}
            <section className="table-section">
                <table className="schedule-table">
                    <thead>
                        <tr id="diasSemana">
                            <th>Horário</th>
                            {diasSemana.map((dia) => (
                                <th>{dia}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {horariosUnicos.map((time, index) => (
                            <tr key={time}>
                                <td className="time-cell">{time}</td>
                                {listHorarios(time).map((horario, index) => {
                                     return (
                                         <td key={index} className={horario.disponivel ? "available-cell" : "available-cell reserved" }>
                                            {
                                                horario.disponivel ? 
                                                    (
                                                        <Link to="/realizarReservas" className="slot-link">
                                                            Disponivel
                                                        </Link>
                                                    ):(
                                                        <Link to="/realizarReservas" className="slot-link">
                                                            Indisponivel <br />                                            
                                                            Reservista: {horario.reservaHorario.usuarioReserva.nome} <br />
                                                            DataReserva: {formatarData(horario.reservaHorario.dataReserva)}
                                                        </Link>
                                                    )
                                            }
                                             
                                         </td>
                                     )
                                }
                                   )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
