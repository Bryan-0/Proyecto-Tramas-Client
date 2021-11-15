import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center border-b-2 border-blue-400 shadow-md bg-white">
            <div className="flex items-center gap-1 cursor-pointer">
                <img width="60" src="https://icons-for-free.com/iconfiles/png/512/connection+earth+internet+network+social+world+icon-1320183955809923202.png" alt="Network" />
                <div className="cursor-pointer font-sans italic text-lg">Redes de Datos I - Proyecto Tramas</div>
            </div>
            <div className="mr-3 text-small text-gray-600 italic">
                Brayan Ayala & Urias Flores
            </div>
        </nav>
    )
};

export default Navbar;