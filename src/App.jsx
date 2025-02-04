import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './telas/login';
import Cadastro from './telas/cadastro';
import Laboratorio from './telas/laboratorios';
import Horarios from './telas/horarios';
import Reservas from './telas/minhasReservas';
import Reservar from './telas/realizarReservas';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/laboratorios" element={<Laboratorio />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/horarios" element={<Horarios />} />
                <Route path="/minhasReservas" element={<Reservas />} />
                <Route path="/realizarReservas" element={<Reservar />} />
            </Routes>
        </Router>
    );
}

export default App;