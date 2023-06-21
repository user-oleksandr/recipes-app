import React from 'react';

const Modal = ({ children, onClose }) => {
    const handleClose = () => {
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                {/*<button className="close-button" onClick={handleClose}>*/}
                {/*    Close*/}
                {/*</button>*/}
                {children}
            </div>
        </div>
    );
};

export default Modal;
