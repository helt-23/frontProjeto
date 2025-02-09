import React, {useContext, useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

import axios from "axios";
import {url, port} from '../../../configApi.json'
import { LoginContext } from "../../context/LoginContext";
import { validarLogin } from "../../scripts";

export default function Main() {
    const {setUsuarioLogado, usuarioLogado, setLogado, logado} = useContext(LoginContext)
    const navigate = useNavigate()

    useEffect(() => {
        validarLogin(logado, "login")
    }, [])

    const [login, setLogin] = useState({
        matricula: "",
        senha: ""
    })

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const fazerLogin = async() => {
        if(login.matricula == "" || login.senha == ""){
            alert("Preencha os campos corretamente!")
            return
        }
        try {
            const resposta = await axios.get(`${url}:${port}/usuario/loginUsuario`, {
                params: {
                    matricula: login.matricula,
                    senha: login.senha
                }
            })

            
            if(resposta.request.status == 200){
                setLogado(true)
                setUsuarioLogado(resposta.data)
                sessionStorage.setItem('logado', 'true')
                sessionStorage.setItem('usuarioLogado', JSON.stringify(resposta.data))
                navigate("/laboratorios")
            }

            //console.log(resposta)
        } catch (error) {
            const erro = error.response.data
            alert(erro.message)
        }
    }

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
                    <input 
                        type="text" 
                        className="user-input"
                        name="matricula"
                        onChange={(e) => handleChange(e)}

                    />
                    <div className="icone-pessoa"></div>
                </div>

                {/* Campo de senha */}
                <div className="senha-container">
                    <span className="senha-login">Senha:</span>
                    <input 
                        type="password" 
                        className="senha-input-login"
                        name="senha"
                        onChange={(e) => handleChange(e)}
                    
                    />
                    <div className="olho"></div>
                </div>

                {/* Botões */}
                <div className="botao-login-lab" onClick={fazerLogin}>
                    Entrar
                </div>
                <Link to="/cadastro" className="botao-cadastro">
                    auto cadastro
                </Link>
            </div>
        </div>
    );
}