// AbaOpcoes/index.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function AbaOpcoes() {
    const opcoes = [
        {
            texto: "EDITAR INFORMAÇÕES",
            caminho: "/editar",
            className: "editar-informacoes"
        },
        {
            texto: "VER RESERVAS",
            caminho: "/reservas",
            className: "ver-reservas"
        },
        {
            texto: "SAIR",
            caminho: "/login",
            className: "sair"
        }
    ];

    return (
        <div className="aba-opcoes-container">
            {opcoes.map((opcao, index) => (
                <Link
                    key={index}
                    to={opcao.caminho}
                    className={`opcao-botao ${opcao.className}`}
                >
                    <div className="opcao-frame" />
                    <span>°{opcao.texto}</span>
                </Link>
            ))}
        </div>
    );
}