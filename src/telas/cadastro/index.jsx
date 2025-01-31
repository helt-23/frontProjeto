import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default function Main() {
    return (
        <div className="main-container">
            <div className="barra-superior" />
            <div className="tela-branca">
                <div className="flex-row-f">
                    <div className="botao-voltar">
                        <div className="botao-voltar-1" />
                    </div>
                    <div className="logo-unifesspa" />
                </div>
                <span className="cadastro">Cadastro</span>
                <div className="bloco-nome">
                    <span className="nome">Nome:</span>
                    <input
                        type="text"
                        className="input-nome"
                        placeholder="Digite seu nome"
                    />
                </div>
                <div className="bloco-sobrenome">
                    <span className="sobrenome">Sobrenome:</span>
                    <input
                        type="text"
                        className="input-sobrenome"
                        placeholder="Digite seu sobrenome"
                    />
                </div>
                <div className="bloco-matricula">
                    <span className="matricula">Matrícula:</span>
                    <input
                        type="text"
                        className="input-matricula"
                        placeholder="Digite sua matrícula"
                    />
                </div>
                <div className="bloco-curso">
                    <span className="curso">Curso:</span>
                    <input
                        type="text"
                        className="input-curso"
                        placeholder="Digite seu curso"
                    />
                </div>
                <div className="bloco-senha">
                    <span className="span-senha">Senha:</span>
                    <input
                        type="password"
                        className="input-senha"
                        placeholder="Crie uma senha"
                    />
                </div>
                <div className="bloco-confirmacao">
                    <span className="span-confirmar-senha">Confirme a senha:</span>
                    <input
                        type="password"
                        className="input-confirmar"
                        placeholder="Repita a senha"
                    />
                </div>
                <div className="bloco-data">
                    <span className="span-data-nascimento">Data de Nascimento:</span>
                    <input
                        type="date"
                        className="input-data"
                    />
                </div>
                <Link to="/login" className="botao-cadastrar">
                    <span className="cadastrar">Cadastrar</span>
                    <div className="retangulo-verde" />
                </Link>
            </div>
            <div className="back-ground" />
        </div>
    );
}
