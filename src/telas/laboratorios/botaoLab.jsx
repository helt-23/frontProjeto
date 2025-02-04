import React from "react";
import { Link } from "react-router-dom";

const BotaoLab = ({ sala, lugares, descricao }) => {
    return (
        <div className="pasta-labs">
            {/* Link envolve todo o conteúdo clicável */}
            <Link
                to="/horarios"
                state={{  // Passa dados do laboratório se necessário
                    sala,
                    lugares,
                    descricao
                }}
                className="botao-lab-link"
            >
                <div className="botao-lab">
                    <div className="id-sala">
                        <span className="sala-24">{sala}</span>
                    </div>
                    <div className="num-de-lugares">
                        <span className="lugares">{lugares}</span>
                    </div>
                    <div className="descricao">
                        <span className="laboratorio-computacao">{descricao}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BotaoLab;