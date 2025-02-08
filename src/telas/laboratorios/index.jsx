import React, { useState, useRef, useEffect, useContext } from "react";
import BotaoLab from "./BotaoLab";
import AbaOpcoes from "../abaOpcoes";
import "./App.css";
import { LoginContext } from "../../context/LoginContext";
import { validarLogin } from "../../scripts";

//Importação da configuração da API
import axios from "axios";
import {url, port} from '../../../configApi.json'

export default function Laboratorios() {
    const [labs, setLabs] = useState([]);
    const [mostrarAba, setMostrarAba] = useState(false);
    
    const {logado, usuarioLogado} = useContext(LoginContext)
    const abaRef = useRef(null);

    const toggleAba = () => setMostrarAba(!mostrarAba);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (abaRef.current && !abaRef.current.contains(event.target)) {
                setMostrarAba(false);
            }
        };

        const buscarLaboratorios = async () =>{
            try {
                const response = await axios.get(`${url}:${port}/laboratorio/`)
                setLabs(response.data)

            } catch (error) {
                console.log("Erro", error)
            }
            
        }
        validarLogin(logado)
        buscarLaboratorios()

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="main-container-lab">
            <header className="header">
                <button
                    className="user-button"
                    onClick={toggleAba}
                    aria-label="Menu do usuário"
                />
                {mostrarAba && (
                    <div ref={abaRef}>
                        <AbaOpcoes />
                    </div>
                )}
            </header>

            <main className="main-content">
                <div className="title-container">
                    <h1 className="page-title">Laboratórios</h1>
                </div>

                <div className="labs-grid">
                    {labs.map((lab, index) => (
                        <BotaoLab
                            key={index}
                            idLab={lab.id}
                            sala={lab.localizacaoLab}
                            lugares={lab.capacidade}
                            descricao={lab.descricao}
                            detalhe={lab.detalhamentoLab}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}

