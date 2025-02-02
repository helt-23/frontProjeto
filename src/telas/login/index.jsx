import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default function Main() {
    return (
        <div className="main-container">
            <div className="barra-superior" />
            <div className="telas-brancas">
                <div className="flex-row">
                    <div className="logo-unifesspa-login" />
                    <span className="login-titulo">Login</span>
                </div>
                <span className="tituloTela-login">
                    Reserva de Laboratório
                    <br />
                </span>
                <div className="usuario-LOGIN">
                    <span className="bloco-usuario">Usuário: </span>
                    <input type="text" className="user-input" />
                    <div className="icone-pessoa"></div>
                </div>
                <div className="senha-container">
                    <span className="senha-login">Senha: </span>
                    <input type="password" className="senha-input-login" />
                    <div className="olho"></div>
                </div>
                <div className="caixa-lembrar-senha">
                    <div className="rectangle" />
                    <span className="lembrar-dos-meus-dados">Lembrar dos meus dados</span>
                </div>
                <Link to="/laboratorios" className="botao-login-lab">
                    <span className="entrar-login">entrar</span>
                </Link>
                <Link to="/cadastro" className="rectangle-3">
                    <span className="realizar-cadastro">realizar cadastro</span>
                </Link>
            </div>
            <div className="image-login" />
        </div>
    );
}
