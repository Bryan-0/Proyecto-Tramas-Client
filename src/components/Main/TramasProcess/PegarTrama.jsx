import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTrama } from '../../../features/tramaSlice';

const PegarTrama = () => {
    const tramaRef = useRef(null);
    const dispatch = useDispatch();
    const tramaContent = useSelector(state => state.trama.content);

    useEffect(() => {
        tramaRef.current.focus();
        if (tramaContent) {
            tramaRef.current.value = tramaContent;
        }
    }, []);

    const registerTrama = () => {
        dispatch(setTrama(tramaRef.current.value.trim()));
    }

    return (
        <div className="flex flex-col">
            <div className="text-lg font-sans">Pegar Trama</div>
            <div className="mt-2">
                <textarea onKeyUp={registerTrama} placeholder="Pega tu trama aquí..." ref={tramaRef} className="w-full h-32 shadow-sm focus:outline-none border border-blue-500 px-2 py-1" />
            </div>
        </div>
    )
};

export default PegarTrama;