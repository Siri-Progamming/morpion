import React from 'react';
import { createPortal } from 'react-dom';

function Popup({ winner, isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;

    return (
        <>
            {createPortal(
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-95">
                    <div className={`p-4 ${winner === 'X' ? 'bg-emerald-400' : 'bg-fuchsia-700'} bg-opacity-20 w-1/4 mx-auto text-center rounded-3xl`}>
                        <p className="mb-3">Le gagnant est '<b>{winner}</b>' !!</p>
                        <p className="mb-5">Voulez-vous rejouer ?</p>
                        <button className="mr-2" onClick={onConfirm}>Oui</button>
                        <button onClick={onClose}>Non</button>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}

export default Popup;
