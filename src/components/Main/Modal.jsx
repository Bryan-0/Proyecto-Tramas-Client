import React from 'react';

const Modal = ({ modalContent, isVisible }) => {
    return (
        <div className="z-10 -mt-6 fixed w-full transition-all duration-500" style={isVisible ? { transform: 'translateX(0)' } : { transform: 'translateX(-100%)' }}>
            {modalContent}
        </div>
    )
};

export default Modal;