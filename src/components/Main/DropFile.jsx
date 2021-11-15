import React, { useCallback, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { setTrama } from '../../features/tramaSlice';

const DropFile = (props) => {
    const [tramaInfo, setTramaInfo] = useState('');
    const dispatch = useDispatch();

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
          const reader = new FileReader()
    
          reader.onabort = () => console.log('file reading was aborted')
          reader.onerror = () => console.log('file reading has failed')
          reader.onload = () => {
          // Do whatever you want with the file contents
            const binaryStr = reader.result
            setTramaInfo(binaryStr.trim());
            dispatch(setTrama(binaryStr.trim()));
          }
          reader.readAsText(file)
        })
        
    }, []);

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({ onDrop });
  
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
        {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <section>
        <div className="mt-5 border border-dashed border-blue-600 bg-gray-50">
            <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                <p className="px-5 py-5 text-lg text-center">
                    <FontAwesomeIcon className="text-gray-500 text-2xl" icon={faFileAlt} /> {files.length >= 1 ? files : 'Arrastra y suelta tu trama aquí'} 
                </p>
            </div>
        </div>
        <div>
            {files.length < 1 ? files : 
            <div className="mt-3">
                <p className="text-gray-800 font-bold italic text-lg text-center"> Trama Ingresada: </p>
                <div className="border border-gray-100 px-2 py-1">
                    {tramaInfo}
                </div>
            </div>
            } 
        </div>
        </section>
        
    );
}

export default DropFile;