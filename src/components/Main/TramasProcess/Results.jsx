import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faNetworkWired, faDotCircle, faEthernet, faServer, faInfoCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { resetAll } from '../../../features/tramaSlice';

const Results = ({ setIsModalVisible }) => {
    const { result } = useSelector(state => state.trama);
    const { frame } = result;
    const { Red } = frame;
    const { Adicional } = frame;
    const { content } = useSelector(state => state.trama);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const closeAll = () => {
        setIsModalVisible(false);
        setTimeout(() => {
            dispatch(resetAll());
        }, 300);
    }

    const newTrama = () => {
        dispatch(resetAll());
    }

    return (
        <div>
            <div className="text-center text-2xl italic">
                <FontAwesomeIcon icon={faNetworkWired} className="text-blue-500" /> Trama Procesada
                <hr className="mt-1 md:mx-16" />
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 text-center text-xl">
                <div className="flex flex-col items-center gap-2">
                    <div className="text-lg cursor-pointer italic">
                        <FontAwesomeIcon icon={faEthernet} className="text-blue-600 text-xl" /> Ethernet
                    </div>
                    <div className="flex flex-col px-2 py-1 gap-2">
                        <div className="flex justify-between gap-2">
                            <div className="font-bold">
                                <FontAwesomeIcon className="text-sm text-blue-500" icon={faDotCircle} /> MAC Destino:
                            </div> 
                            <div>{frame['Ethernet II']['MAC Destino']}</div>
                        </div>
                        <div className="flex justify-between gap-2">
                            <div className="font-bold">
                                <FontAwesomeIcon className="text-sm text-blue-500" icon={faDotCircle} /> MAC Origen:
                            </div> 
                            <div>{frame['Ethernet II']['MAC Origen']}</div>
                        </div>
                        <div className="flex justify-between gap-2">
                            <div className="font-bold">
                                <FontAwesomeIcon className="text-sm text-blue-500" icon={faDotCircle} /> EtherType:
                            </div> 
                            <div>{frame['Ethernet II']['EtherType']}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="text-lg cursor-pointer italic">
                            <FontAwesomeIcon icon={faWifi} className="text-blue-600 text-xl" /> Paquete de Red
                        </div>
                        <div className="flex flex-col px-2 py-1 gap-2">
                            <div className="flex justify-between gap-4">
                                <div className="font-bold">
                                    <FontAwesomeIcon className="text-sm text-blue-500" icon={faDotCircle} /> IP Origen:
                                </div> 
                                <div>{Red['IP Origen']}</div>
                            </div>
                            <div className="flex justify-between gap-2">
                                <div className="font-bold">
                                    <FontAwesomeIcon className="text-sm text-blue-500" icon={faDotCircle} /> IP Destino:
                                </div> 
                                <div>{Red['IP Destino']}</div>
                            </div>
                            <div className="flex justify-between gap-2">
                                <div className="font-bold">
                                    <FontAwesomeIcon className="text-sm text-blue-500" icon={faDotCircle} /> Protocolo:
                                </div> 
                                <div>{Red['Protocolo']}</div>
                            </div>
                            <div className="flex justify-between gap-2">
                                <div className="font-bold">
                                    <FontAwesomeIcon className="text-sm text-blue-500" icon={faDotCircle} /> Puerto Origen:
                                </div> 
                                <div className="flex items-center gap-1 relative">
                                    {Red['Puerto Origen']} {String(Adicional['Puerto Origen']).search('aleatoriamente') === -1 ?  
                                    <div className="absolute -right-7 shadow-sm">
                                        <FontAwesomeIcon icon={faServer} className="text-blue-600" />
                                    </div>
                                    : ''}
                                </div>
                            </div>
                            <div className="flex justify-between gap-2">
                                <div className="font-bold">
                                    <FontAwesomeIcon className="text-sm text-blue-500" icon={faDotCircle} /> Puerto Destino:
                                </div> 
                                <div className="flex items-center gap-1 relative">
                                {Red['Puerto Destino']} {String(Adicional['Puerto Destino']).search('aleatoriamente') === -1 ?  
                                    <div className="absolute -right-7 shadow-sm">
                                        <FontAwesomeIcon icon={faServer} className="text-blue-600" />
                                    </div>
                                    : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 mt-2 flex flex-col gap-2">
                    <div className="italic"><FontAwesomeIcon icon={faInfoCircle} className="text-blue-600" /> Notas Adicionales</div>
                    <div className="text-left md:mx-32 border border-gray-100 bg-gray-50 shadow-sm rounded-lg px-2 text-lg flex flex-col py-2">
                        <div>• {Adicional['Puerto Origen']}</div>
                        <div>• {Adicional['Puerto Destino']}</div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between gap-2 mt-4">
                <div>
                    <div onClick={() => setShow(true)} className="bg-gray-300 hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer">Ver Trama Original</div>
                    
                    <div className={show ? "opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white text-lg shadow-xl ring-2" : "hidden"}>
                        <div className="px-2 font-bold italic flex justify-between items-center">
                            <div>Trama Ingresada (Hexadecimal)</div>
                            <div onClick={() => setShow(false)} className="mt-1 cursor-pointer"><FontAwesomeIcon icon={faTimesCircle} className="text-red-500 text-xl" /></div>
                        </div>
                        <div className="px-4 py-2">{content}</div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div onClick={closeAll} className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow-md cursor-pointer">Salir</div>

                    <div onClick={newTrama} className="bg-blue-600 text-white hover:bg-blue-500 px-4 py-2 rounded-lg shadow-md cursor-pointer">Nueva trama</div>
                </div>
            </div>
        </div>
    )
};

export default Results;