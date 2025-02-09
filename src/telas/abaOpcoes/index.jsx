// AbaOpcoes/index.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

export default function AbaOpcoes() {
    const navigate = useNavigate()
    const opcoes = [
        {
            texto: "EDITAR INFORMAÇÕES",
            className: "editar-informacoes",
            funcao: editarInformacoes
        },
        {
            texto: "VER RESERVAS",
            className: "ver-reservas",
            funcao: verReservas
        },
        {
            texto: "SAIR",
            className: "sair", 
            funcao: sair
        }
    ];

    //Funções dos botões
    function editarInformacoes() {
        navigate("/editar")
    }

    function verReservas(){
        navigate("/minhasReservas")
    }

    function sair(){
        sessionStorage.setItem("logado", "false");
        sessionStorage.removeItem("usuarioLogado"); 
        window.location.href="/login"
    }
    return (
        <div className="aba-opcoes-container">
            {opcoes.map((opcao, index) => (
                <div
                    key={index}
                    //to={opcao.caminho}
                    onClick={opcao.funcao}
                    className={`opcao-botao ${opcao.className}`}
                >
                    <div className="opcao-frame" />
                    <span>°{opcao.texto}</span>
                </div>
            ))}
        </div>
    );
}