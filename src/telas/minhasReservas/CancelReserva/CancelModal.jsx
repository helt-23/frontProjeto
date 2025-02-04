import React from 'react';
import './index.css';

export default function CancelModal({ onConfirm, onCancel }) {
    return (
        <div className="cancel-modal">
            <p className="modal-text">Deseja cancelar sua reserva?</p>
            <div className="buttons-container">
                <button className="modal-button confirm-btn" onClick={onConfirm}>
                    Sim
                </button>
                <button className="modal-button cancel-btn" onClick={onCancel}>
                    Não
                </button>
            </div>
        </div>
    );
}