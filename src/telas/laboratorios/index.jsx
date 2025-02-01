import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import BotaoLab from "./BotaoLab";

export default function Main() {
    const labs = Array(12).fill({
        sala: "Sala 24",
        lugares: "30 lugares",
        descricao: "LABORATÓRIO DE COMPUTAÇÃO"
    });

    return (
        <div className="main-container">
            <div className="barra-superior">
                <div className="botao-usuario" />
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