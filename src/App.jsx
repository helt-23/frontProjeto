import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './telas/login';
import Cadastro from './telas/cadastro';
import Laboratorio from './telas/laboratorios';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/laboratorios" element={<Laboratorio />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </Router>
    );
}

export default App;