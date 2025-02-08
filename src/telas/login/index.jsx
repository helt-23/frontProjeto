import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function Main() {
    return (
        <div className="main-container-login">
            {/* Barra superior */}
            <div className="barra-superior" />

            {/* Conteúdo central */}
            <div className="telas-brancas">
                {/* Logo e título */}
                <div className="logo-unifesspa-login" />
                <h1 className="login-titulo">Login</h1>
                <p className="tituloTela-login">Reserva de Laboratório</p>

                {/* Campo de usuário */}
                <div className="usuario-LOGIN">
                    <span className="bloco-usuario">Usuário:</span>
                    <input type="text" className="user-input" />
                    <div className="icone-pessoa"></div>
                </div>

                {/* Campo de senha */}
                <div className="senha-container">
                    <span className="senha-login">Senha:</span>
                    <input type="password" className="senha-input-login" />
                    <div className="olho"></div>
                </div>

                {/* Botões */}
                <Link to="/laboratorios" className="botao-login-lab">
                    Entrar
                </Link>
                <Link to="/cadastro" className="botao-cadastro">
                    auto cadastro
                </Link>
            </div>
        </div>
    );
}