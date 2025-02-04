import React, { useState, useRef, useEffect } from "react";
import BotaoLab from "./BotaoLab";
import AbaOpcoes from "../abaOpcoes";
import "./App.css";

const labsData = Array(12).fill({
    sala: "Sala 24",
    lugares: "30 lugares",
    descricao: "LABORATÓRIO DE COMPUTAÇÃO"
});

export default function Laboratorios() {
    const [mostrarAba, setMostrarAba] = useState(false);
    const abaRef = useRef(null);

    const toggleAba = () => setMostrarAba(!mostrarAba);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (abaRef.current && !abaRef.current.contains(event.target)) {
                setMostrarAba(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="main-container-lab">
            <header className="header">
                <button
                    className="user-button"
                    onClick={toggleAba}
                    aria-label="Menu do usuário"
                />
                {mostrarAba && (
                    <div ref={abaRef}>
                        <AbaOpcoes />
                    </div>
                )}
            </header>

            <main className="main-content">
                <div className="title-container">
                    <h1 className="page-title">Laboratórios</h1>
                </div>

                <div className="labs-grid">
                    {labsData.map((lab, index) => (
                        <BotaoLab
                            key={index}
                            sala={lab.sala}
                            lugares={lab.lugares}
                            descricao={lab.descricao}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}

