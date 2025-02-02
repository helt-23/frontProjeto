import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default function Main() {
    return (
        <div className="main-container">
            <div className="barra-superior" />
            <div className="tela-branca">
                <div className="flex-row-f">
                    <Link to="/login" className="botao-voltar">
                        <div className="botao-voltar-cadastro" />
                    </Link>
                    <div className="logo-unifesspa-cadastro" />
                </div>
                <span className="cadastro">Cadastro</span>

                {/* Campos Ajustados */}
                <div className="form-field-container bloco-nome">
                    <span className="form-label">Nome:</span>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Digite seu nome"
                    />
                </div>

                <div className="form-field-container bloco-sobrenome">
                    <span className="form-label">Sobrenome:</span>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Digite seu sobrenome"
                    />
                </div>

                <div className="form-field-container bloco-matricula">
                    <span className="form-label">Matrícula:</span>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Digite sua matrícula"
                    />
                </div>

                <div className="form-field-container bloco-curso">
                    <span className="form-label">Curso:</span>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Digite seu curso"
                    />
                </div>

                <div className="form-field-container bloco-senha">
                    <span className="form-label">Senha:</span>
                    <input
                        type="password"
                        className="form-input"
                        placeholder="Crie uma senha segura"
                    />
                </div>

                <div className="form-field-container bloco-confirmacao">
                    <span className="form-label">Confirme a Senha:</span>
                    <input
                        type="password"
                        className="form-input"
                        placeholder="Repita a senha"
                    />
                </div>

                <div className="form-field-container bloco-data">
                    <span className="form-label">Data de Nascimento:</span>
                    <input
                        type="date"
                        className="form-input"
                    />
                </div>

                <Link to="/login" className="botao-cadastrar">
                    <span className="cadastrar">Cadastrar</span>
                </Link>
            </div>
            <div className="back-ground" />
        </div>
    );
}