import React from 'react';
import { useSelector } from 'react-redux';

const Modal = ({ modalContent, isVisible }) => {
    const { showResults } = useSelector(state => state.trama)

    return (
        <div className={showResults ? "z-10 -mt-16 fixed w-full transition-all duration-500" : "z-10 fixed w-full transition-all duration-500"} style={isVisible ? { transform: 'translateX(0)' } : { transform: 'translateX(-100%)' }}>
            {modalContent}
        </div>
    )
};

export default Modal;