import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import { Link } from "react-router-dom";
import BotaoLab from "./BotaoLab";
import AbaOpcoes from "../abaOpcoes";

export default function Main() {
    const labs = Array(12).fill({
        sala: "Sala 24",
        lugares: "30 lugares",
        descricao: "LABORATÓRIO DE COMPUTAÇÃO"
    });
    const [mostrarAba, setMostrarAba] = useState(false);
    const abaRef = useRef(null); // Referência para a aba de opções
    const toggleAba = () => {
        setMostrarAba(!mostrarAba);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (abaRef.current && !abaRef.current.contains(event.target)) {
                setMostrarAba(false); // Fecha a aba
            }
        };

        // Adiciona o listener ao documento
        document.addEventListener("mousedown", handleClickOutside);
        // Remove o listener ao desmontar o componente
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="main-container">
            <div className="barra-superior">
                <div
                    className="botao-usuario"
                    onClick={toggleAba} // Adiciona o evento de clique 
                />
                {mostrarAba && (
                    <div ref={abaRef}>
                        <AbaOpcoes />
                    </div>
                )}
            </div>
            <div className="tabela">
                <div className="flex-row-ed">
                    <div className="logo-unifesspa" />
                    <span className="laboratorios">Laboratórios</span>
                </div>

                <div className="tabela-de-labs">
                    <div className="flex-row-e">
                        {labs.map((lab, index) => (
                            <BotaoLab
                                key={index}
                                sala={lab.sala}
                                lugares={lab.lugares}
                                descricao={lab.descricao}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="image" />
        </div>
    );
}