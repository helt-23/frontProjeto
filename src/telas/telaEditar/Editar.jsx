// Editar.jsx
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { LoginContext } from "../../context/LoginContext";
import axios from "axios";
import {url, port} from '../../../configApi.json'
import { validarLogin } from "../../scripts";
import Footer from "../rodaPe/Footer";

const Editar = () => {
    const navigate = useNavigate();
    const {usuarioLogado, logado, setUsuarioLogado} = useContext(LoginContext)


    useEffect(() => {
        validarLogin(logado)
    }, [])

    
    const [dadosUsuario, setDadosUsuario] = useState({
        nome: usuarioLogado.nome,
        curso: usuarioLogado.curso,
        nascimento: usuarioLogado.nascimento,
        senha: ''
    })

     //Confirmar Senha
    const [confSenha, setConfSenha] = useState('')
     //A função é acionada sempre que um campo for modificado
    const handleChange = (e) => {
        //Atualiza "DadosUsuarios" com novos valores inseridos no input
        setDadosUsuario({
            ...dadosUsuario, //Mantém valores
            [e.target.name]: e.target.value //Atualiza o campo correspondente ao input
        })
    }

    const salvarAlteracoes = async () =>{
        if(dadosUsuario.senha != confSenha){
            alert("Senha difere da confirmação")
            return
        }
        try {
            const response = await axios.put(`${url}:${port}/usuario/${usuarioLogado.id}`, dadosUsuario,{
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if(response.status == 200){
                alert("Usuário editado com sucesso!")
                setUsuarioLogado(response.data)
                window.location.href = "/laboratorios"
                
            }
        } catch (error) {
            console.log(error)
        }
    }


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
                        value={dadosUsuario.nome}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Curso:</label>
                    <input
                        type="text"
                        name="curso"
                        value={dadosUsuario.curso}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Data nascimento:</label>
                    <input
                        type="date"
                        name="nascimento"
                        value={dadosUsuario.nascimento}
                        onChange={handleChange}
                    />
                </div>

                <h3 className="password-title">Modificar Senha</h3>

                <div className="form-group">
                    <label>Nova Senha:</label>
                    <input
                        type="password"
                        name="senha"
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Confirmar Senha:</label>
                    <input
                        type="password"
                        name="senhaConfirmada"
                        onChange={(e) => setConfSenha(e.target.value)}
                    />
                </div>

                <div className="button-group">
                    <button type="button" className="btn save" onClick={salvarAlteracoes}>
                        Salvar
                    </button>
                    <button type="button"
                        className="btn return"
                        onClick={() => navigate('/laboratorios')} >
                        Retornar
                    </button>
                </div>
            </form>
            <Footer/>
        </main>
    );
};

export default Editar;