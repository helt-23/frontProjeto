import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './telas/login';
import Cadastro from './telas/cadastro';
import Laboratorio from './telas/laboratorios';
import Horarios from './telas/horarios';
import Reservas from './telas/minhasReservas';
import Reservar from './telas/realizarReservas';
import EditarInfo from './telas/telaEditar/Editar';

import {LoginContext} from './context/LoginContext'

function App() {
    //Preciso armazenar os dados do usuário caso o navegador seja reiniciado. Desse modo, é usado sessionStorage
    //Session storage só armazena strings, desse modo, precio converter

    //Verifio se já existe um usuário armazenado no session
    const [usuarioLogado, setUsuarioLogado] = useState(JSON.parse(sessionStorage.getItem('usuarioLogado')) || {})
    //Verifica se há algum usuário logado
    const [logado, setLogado] = useState(sessionStorage.getItem('logado') === 'true')

    //Isso se deve ao fato de que ao recarregar a página, os dados do usuário logado é perdido
    useEffect(() => {
        //Atribuo o valor de logado ao sessionStorage, onde caso já exista algum usuário logado
        //Esse valor recebe true, de acordo com a inicialização acima
        sessionStorage.setItem('logado', logado)

        //Atribuo o usuário da sessão somente se o logado for true
        if(logado){
            sessionStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado))
        }
    }, [logado, usuarioLogado])
   
    return (
        <LoginContext.Provider value={{
            setUsuarioLogado, 
            usuarioLogado,
            setLogado,
            logado
        }}>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/laboratorios" element={<Laboratorio />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/horarios" element={<Horarios />} />
                    <Route path="/minhasReservas" element={<Reservas />} />
                    <Route path="/Editar" element={<EditarInfo />} />
                    <Route path="/realizarReservas" element={<Reservar />} />
                </Routes>
            </Router>
        </LoginContext.Provider>
    );
}

export default App;