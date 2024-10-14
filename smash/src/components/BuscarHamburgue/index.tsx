import React from 'react';
import './BuscarHamburguer.css';

interface BuscarHamburgueProps {
    placeholder: string
    busca: string
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

const BuscarHamburgue = ({ placeholder, busca, setBusca}: BuscarHamburgueProps ) => {
    return (
        <div className="busca">
            <input 
                type="text" 
                value={busca}
                placeholder={placeholder}
                onChange={evento => setBusca(evento.target.value)}
            />
        </div>
    );
}

export default BuscarHamburgue;