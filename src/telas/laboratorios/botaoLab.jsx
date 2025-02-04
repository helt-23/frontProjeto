import React from "react";
import { Link } from "react-router-dom";

const BotaoLab = ({ sala, lugares, descricao }) => (
    <Link
        to="/horarios"
        state={{ sala, lugares, descricao }}
        className="lab-card"
    >
        <div className="lab-header">
            <div className="lab-number">{sala}</div>
            <div className="lab-capacity">{lugares}</div>
        </div>
        <div className="lab-description">
            <p>{descricao}</p>
        </div>
    </Link>
);

export default BotaoLab;
