// Editar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Editar = () => {
    const navigate = useNavigate();

    return (
        <main className="main-container">
            <div className="header-bar" />

            <form className="form-container">
                <div className="logo-unifesspa"></div>
                <h2 className="edit-title">Editar Informações</h2>
                <div className="form-group">
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="nome"
                    />
                </div>

                <div className="form-group">
                    <label>Matrícula:</label>
                    <input
                        type="text"
                        name="matricula"
                    />
                </div>

                <div className="form-group">
                    <label>Curso:</label>
                    <input
                        type="text"
                        name="curso"
                    />
                </div>

                <h3 className="password-title">Modificar Senha</h3>

                <div className="form-group">
                    <label>Nova Senha:</label>
                    <input
                        type="password"
                        name="senhaNova"
                    />
                </div>

                <div className="form-group">
                    <label>Confirmar Senha:</label>
                    <input
                        type="password"
                        name="senhaConfirmada"
                    />
                </div>

                <div className="button-group">
                    <button type="submit" className="btn save">
                        Salvar
                    </button>
                    <button type="button"
                        className="btn return"
                        onClick={() => navigate('/laboratorios')} >
                        Retornar
                    </button>
                </div>
            </form>
        </main>
    );
};

export default Editar;