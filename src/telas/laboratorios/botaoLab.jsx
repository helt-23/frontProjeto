import React from "react";
import { Link } from "react-router-dom";

const BotaoLab = ({ sala, lugares, descricao, detalhe, idLab }) => (
    <Link
        to="/horarios"
        state={{ sala, lugares, descricao, detalhe, idLab }}
        className="lab-card"
    >
        <div className="lab-header">
            <div className="lab-number">{sala}</div>
            <div className="lab-capacity">Capacidade: {lugares}</div>
        </div>
        <div className="lab-description">
            <p>{descricao}</p>
        </div>
    </Link>
);

export default BotaoLab;
