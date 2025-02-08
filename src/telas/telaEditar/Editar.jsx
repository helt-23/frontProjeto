// Editar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Editar = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nome: "",
        matricula: "",
        curso: "",
        senhaNova: "",
        senhaConfirmada: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.senhaNova === formData.senhaConfirmada) {
            alert("Dados enviados com sucesso!");
        } else {
            alert("As senhas não coincidem!");
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <main className="main-container">
            <div className="header-bar" />

            <form className="form-container" onSubmit={handleSubmit}>
                {/* Logo centralizado */}
                <div className="logo-unifesspa"></div>
                {/* Título centralizado */}
                <h2 className="edit-title">Editar Informações</h2>
                <div className="form-group">
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Matrícula:</label>
                    <input
                        type="text"
                        name="matricula"
                        value={formData.matricula}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Curso:</label>
                    <input
                        type="text"
                        name="curso"
                        value={formData.curso}
                        onChange={handleChange}
                    />
                </div>

                <h3 className="password-title">Modificar Senha</h3>

                <div className="form-group">
                    <label>Nova Senha:</label>
                    <input
                        type="password"
                        name="senhaNova"
                        value={formData.senhaNova}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Confirmar Senha:</label>
                    <input
                        type="password"
                        name="senhaConfirmada"
                        value={formData.senhaConfirmada}
                        onChange={handleChange}
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