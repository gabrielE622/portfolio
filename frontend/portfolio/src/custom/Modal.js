import React from 'react';

const Modal = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-lg text-center">
                <h1 className="text-lg text-black font-semibold">{message}</h1>
            </div>
        </div>
    );
};

export default Modal;
