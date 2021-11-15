import React, { useState } from 'react';

import Modal from './Modal';
import Ingresar from './TramasProcess/Ingresar';

const Content = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedMode, setSelectedMode] = useState('subir');

    return (
        <div>
            <Modal isVisible={isModalVisible} modalContent={
                <Ingresar selectedMode={selectedMode} setSelectedMode={setSelectedMode} setIsModalVisible={setIsModalVisible} />
            }/>

            <div className={isModalVisible ? 'p-8 opacity-40' : 'p-8'}>
                <div className="flex flex-col items-center justify-center shadow-xl mt-4 py-4 px-4 gap-8 bg-white">
                    <div className="text-xl flex justify-center items-center">
                        <h1 className="font-mono border-b-2 border-blue-500 shadow-sm px-4 py-2 rounded-lg">Proyecto Tramas - Examen Segunda Unidad</h1>
                    </div>
                    <div className="text-lg">
                        Bienvenidos al "Proyecto Tramas", el cual consiste en una aplicación web 
                        que permite desglosar una trama a partir de una cadena de hexadecimales.
                    </div>
                    <div>
                        <img className="shadow-sm" width="800" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Ethernet_Type_II_Frame_format.svg/1400px-Ethernet_Type_II_Frame_format.svg.png" alt="Ethernet Frame" />
                        <div className="text-sm text-center text-gray-600 font-bold hover:underline">
                            <a href="https://www.wikiwand.com/en/Ethernet_frame" rel="noreferrer" target="_blank">Estructura de una trama Ethernet II</a>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => setIsModalVisible(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-lg cursor-pointer shadow-md">Subir Trama</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;