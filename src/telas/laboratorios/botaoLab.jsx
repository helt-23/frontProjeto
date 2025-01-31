import React from "react";

const BotaoLab = ({ sala, lugares, descricao }) => {
    return (
        <div className="pasta-labs">
            <div className="botao-lab">
                <div className="id-sala">
                    <span className="sala-24">{sala}</span>
                </div>
                <div className="num-de-lugares">
                    <span className="lugares">{lugares} lugares</span>
                </div>
                <div className="descricao">
                    <span className="laboratorio-computacao">{descricao}</span>
                </div>
            </div>
        </div>
    );
};

export default BotaoLab;