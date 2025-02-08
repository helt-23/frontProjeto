import React from "react";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";

export default function Main() {
    const navigate = useNavigate();

    return (
        <div className="main-container-cadastro">
            <div className="barra-superior" />

            <div className="tela-branca">
                <div className="form-header">
                    <button className="botao-voltar" onClick={() => navigate('/login')}>
                    </button>
                    <div className="logo-unifesspa-cadastro" />
                </div>

                <h1 className="cadastro">Auto Cadastro</h1>

                <div className="form-container"> {/*CAMPOS DO FORUMLÁRIO A BAIXO*/}
                    <div className="form-field-container">
                        <label className="form-label">Nome:</label>
                        < input type="text"
                            className="form-input"
                            placeholder="Digite sue nome" />
                    </div>

                    <div className="form-field-container">
                        <label className="form-label">Sobrenome:</label>
                        <input type="text"
                            className="form-input"
                            placeholder="Digite sue sobrenome" />
                    </div>


                    <div className="form-field-container">
                        <label className="form-label">Matricula:</label>
                        <input type="text"
                            className="form-input"
                            placeholder="Digite sua matrícula" />
                    </div>

                    <div className="form-field-container">
                        <label className="form-label">Curso:</label>
                        <input type="text"
                            className="form-input"
                            placeholder="Digite seu curso" />
                    </div>

                    <div className="form-field-container">
                        <label className="form-label">Senha:</label>
                        <input type="password"
                            className="form-input"
                            placeholder="crie uma senha segura" />
                    </div>


                    <div className="form-field-container">
                        <label className="form-label">Confirme a Senha:</label>
                        <input type="password"
                            className="form-input"
                            placeholder="Repita a senha" />
                    </div>

                    <div className="form-field-container">
                        <label className="form-label">Data de Nascimento:</label>
                        <input type="date"
                            className="form-input" />
                    </div>

                    <div className="botao-cadastrar">
                        <span className="cadastrar">Cadastrar</span>
                    </div>

                </div>
                <div className="back-ground" />
            </div>
        </div>
    );
}