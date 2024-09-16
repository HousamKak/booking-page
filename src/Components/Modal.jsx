import React from 'react';
import './Modal.css';

const Modal = ({ children, onClose }) => {
    const handleBackgroundClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleBackgroundClick}>
            <div className="modal-content">
                <button className="modal-close-btn" onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
