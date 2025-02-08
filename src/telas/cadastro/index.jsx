import React, { useState } from "react";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import {url, port} from '../../../configApi.json'

export default function Main() {
    const navigate = useNavigate();

    const [dataUsuario, setDataUsuario] = useState({
        curso: "",
        matricula: "",
        senha: "",
        nome: "",
        nascimento: ""
    })
    const [confSenha, setConfSenha] = useState("")

    //Função para capturar as alterações e lançar no useState
    const handleChange = (e) => {
        setDataUsuario({
            ...dataUsuario,
            [e.target.name]: e.target.value
        })
    }

    const cadastrarUsuario = async() => {
        console.log(dataUsuario)
        if(dataUsuario.senha != confSenha){
            alert("Senha informada difere da confirmação de senha")
            return;
        }

        if (dataUsuario.nome == "" || dataUsuario.matricula == "" || dataUsuario.curso == "" || dataUsuario.senha == "" || dataUsuario.nascimento == "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        
        try {
            const resposta = await axios.post(`${url}:${port}/usuario/`, dataUsuario)
            alert("Usuário cadastrado com sucesso!!")
            window.location.href = "/login"
            
        }catch(e){
            const erro = e.response.data
            if(erro.status === 500){
                alert(erro.message)
                window.location.href = "/login"
            }
        }
    }

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
                            placeholder="Digite sue nome" 
                            name="nome"
                            onChange={handleChange}
                            required    
                            />
                    </div>


                    <div className="form-field-container">
                        <label className="form-label">Matricula:</label>
                        <input type="text"
                            className="form-input"
                            placeholder="Digite sua matrícula" 
                            name="matricula"
                            onChange={handleChange}
                            required
                            />
                    </div>

                    <div className="form-field-container">
                        <label className="form-label">Curso:</label>
                        <input type="text"
                            className="form-input"
                            placeholder="Digite seu curso" 
                            name="curso"
                            onChange={handleChange}
                            required
                            />
                    </div>

                    <div className="form-field-container">
                        <label className="form-label">Senha:</label>
                        <input type="password"
                            className="form-input"
                            placeholder="crie uma senha segura" 
                            name="senha"
                            onChange={handleChange}
                            required
                            />
                    </div>


                    <div className="form-field-container">
                        <label className="form-label">Confirme a Senha:</label>
                        <input type="password"
                            className="form-input"
                            placeholder="Repita a senha"
                            onChange={(e) => {setConfSenha(e.target.value)}}
                            required
                            />
                    </div>

                    <div className="form-field-container">
                        <label className="form-label">Data de Nascimento:</label>
                        <input type="date"
                            className="form-input" 
                            name="nascimento"
                            onChange={handleChange}
                            required
                            />
                    </div>

                    <div className="botao-cadastrar"
                        onClick={cadastrarUsuario}
                    >
                        <span className="cadastrar">Cadastrar</span>
                    </div>

                </div>
                <div className="back-ground" />
            </div>
        </div>
    );
}