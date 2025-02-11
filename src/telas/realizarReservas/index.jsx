// index.jsx
import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import logoUnifesspa from '../assets/images/70672ce5848878a5f7f6c8586ae7e6be78a25b89.png';
import {url, port} from '../../../configApi.json'
import axios from 'axios';
import { LoginContext } from '../../context/LoginContext';
import { validarLogin } from '../../scripts';

export default function RealizarReservas() {
    const location = useLocation();
    const {usuarioLogado, logado} = useContext(LoginContext)
    const { sala, lugares, descricao, detalhe, idLab, horarios, diaSemana } = location.state || {};

    useEffect(() => {
        validarLogin(logado)
    }, [])

    const [horariosSelecionados, setHorariosSelecionados] = useState([]);
    const navigate = useNavigate()

    const handleCheckboxChange = (time) => {
        setHorariosSelecionados(prev => //O prev recebe o estado anterior
            prev.includes(time) //Verifio se o horário já está incluso no array
                ? prev.filter(t => t !== time) //Se já estiver, crio um novo array onde aquele horário não esteja
                : [...prev, time] //Se não tiver, crio um novo array adicionado aquele horário
        );
    };

    //console.log(horarios)

    const gravaReserva = async () => {
        if(horariosSelecionados.length == 0){
            alert("É preciso selecionar ao menos um horário para reserva!")
            return
        }

        try {
            const resposta = await axios.post(`${url}:${port}/reserva/${usuarioLogado.id}`, horariosSelecionados)
            if(resposta.status == 201){
                alert("Reserva realizada com sucesso!!")
                navigate("/horarios", {
                    state: {
                        sala, 
                        lugares, 
                        descricao, 
                        detalhe, 
                        idLab
                    }
                })
            }
        } catch (error) {
            alert("Ocorreu um erro ao realizar reserva")
        }
        
    }

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
                <div className="day-section">
                    <h3 className="day-title">{diaSemana}</h3>
                    <div className="time-slots-grid">
                        {horarios.map((horario, index) => {
                           return horario.disponivel ? 
                                (
                                    <label key={index} className="time-slot">
                                        <input
                                            type="checkbox"
                                            checked={horariosSelecionados.includes(horario)} //Verifico se o objeto está incluso no array dos horários selecionados, me retornando true ou false e marcando o checkBox
                                            onChange={() => handleCheckboxChange(horario)} //Chamo a função, inserindo ou retirando o horário
                                        />
                                        <span className="checkmark"></span>
                                        {horario.horaInicio} - {horario.horaFim} 
                                    </label>
                                ): (
                                    <div key={index} className="time-slot checkbox-desabilitado" onClick={() => alert("Horário já reservado")}>
                                        <input
                                            type="checkbox"
                                            checked={true} //Verifico se o objeto está incluso no array dos horários selecionados, me retornando true ou false e marcando o checkBox
                                            onChange={() => handleCheckboxChange(horario)} //Chamo a função, inserindo ou retirando o horário
                                            disabled={true}                        
                                        />
                                        <span className="checkmark"></span>
                                        {horario.horaInicio} - {horario.horaFim} 
                                    </div>
                                ) 
                            } 
                        )}
                    </div>
                </div>

                <div className="botoes-container">
                    <button type="button" onClick={gravaReserva} className="botao botao-primario">
                        Confirmar
                    </button>
                    <Link 
                        to="/horarios" 
                        className="botao botao-secundario"
                        state={{sala, lugares, descricao, detalhe, idLab}}
                    >
                        Voltar
                    </Link>
                </div>
            </form>
        </div>
    );
}