import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DropFile from '../DropFile';
import PegarTrama from './PegarTrama';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaste, faFileUpload, faExclamationTriangle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import axiosConfig from '../../../axiosConfig/axiosConfig';
import { resetAll, setResult, setShowResults } from '../../../features/tramaSlice';
import Results from './Results';

const Ingresar = ({ selectedMode, setSelectedMode, setIsModalVisible }) => {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const tramaContent = useSelector(state => state.trama.content);
    const showResults = useSelector(state => state.trama.showResults);
    const dispatch = useDispatch();

    const handleTrama = () => {
        if (!tramaContent) {
            setError('Ingrese una trama antes de continuar');
            return;
        }
        setError('');
        setIsLoading(true);
        axiosConfig.post('/api/frame', {
            content: tramaContent,
        }).then(res => {
            const { data } = res;
            if (data.success) {
                dispatch(setResult(data.data));
                dispatch(setShowResults(true));
                setIsLoading(false);
            } else {
                setIsLoading(false);
            }
        }).catch(err => {
            setError('Error al procesar la trama (Asegurese de ponerla en el formato correcto)');
            setIsLoading(false);
        });
    }

    return (
        <div className="shadow-xl mx:2 md:mx-56 my-24 p-6 bg-white rounded-lg">
            {showResults ? <Results setIsModalVisible={setIsModalVisible} /> :
            <>
                <div className="text-center text-2xl">
                    Ingrese la trama
                </div>

                <div className="flex flex-row-reverse gap-4">
                    <div className="flex border border-gray-500 rounded-lg shadow-md">
                        <div onClick={() => setSelectedMode('pegar')} className={selectedMode === 'pegar' 
                        ? "bg-gray-200 px-4 py-1 cursor-pointer border-r border-gray-500 rounded-tl-lg rounded-bl-lg"
                        : "hover:bg-gray-100 px-4 py-1 cursor-pointer border-r border-gray-500 rounded-tl-lg rounded-bl-lg"}>
                            <FontAwesomeIcon icon={faPaste} className="text-blue-600 text-lg" /> Pegar
                        </div>
                        <div onClick={() => setSelectedMode('subir')} className={selectedMode === 'subir' 
                        ? "bg-gray-200 px-4 py-1 cursor-pointer rounded-tr-lg rounded-br-lg"
                        : "hover:bg-gray-100 px-4 py-1 cursor-pointer rounded-tr-lg rounded-br-lg"}>
                            <FontAwesomeIcon icon={faFileUpload} className="text-blue-600 text-lg" /> Subir
                        </div>            
                    </div>
                </div>
                
                {selectedMode === 'pegar' ? <PegarTrama /> : <DropFile />}
                <div className={error.length !== 0 ? "text-center text-red-700 font-bold mt-2" : "hidden"}>
                    <FontAwesomeIcon icon={faExclamationTriangle} /> {error} 
                </div>

                <div className="flex flex-row-reverse mt-4">
                    <div className="mr-4">
                        <button onClick={() => {
                            setIsModalVisible(false);
                            dispatch(resetAll());
                        }} className="mr-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow-md">Cancelar</button>
                        <button onClick={handleTrama} className={isLoading ? "bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md bg-opacity-80" : "bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md"}
                        disabled={isLoading ? true : false}>
                            {!isLoading ? 'Procesar' : <FontAwesomeIcon icon={faSpinner} className="text-white mx-4 text-lg" spin />}
                        </button>
                    </div>
                </div>
            </>
            }
        </div>
    )
};

export default Ingresar;