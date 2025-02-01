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
                    <span className="login-1">Login</span>
                </div>
                <span className="lab-management">
                    Gerenciamento de Laboratório
                    <br />
                </span>
                <div className="usuario-caixa">
                    <span className="bloco-usuario">Usuário:</span>
                    <input className="user-input" />
                    <div className="icone-pessoa" />
                </div>
                <div className="bloco-senha">
                    <span className="senha">Senha:</span>
                    <input className="bloco-senha-input" />
                    <div className="olho" />
                </div>
                <div className="caixa-lembrar-senha">
                    <div className="rectangle" />
                    <span className="lembrar-dos-meus-dados">Lembrar dos meus dados</span>
                </div>
                <Link to="/laboratorios" className="botao-login-lab">
                    <span className="entrar">entrar</span>
                </Link>
                <Link to="/cadastro" className="rectangle-3">
                    <span className="realizar-cadastro">realizar cadastro</span>
                </Link>
            </div>
            <div className="image-login" />
        </div>
    );
}
