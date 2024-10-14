import filtros from './filtros.json';
import classNames from 'classnames';
import './Filtros.css'; // Importando o arquivo CSS
import React from 'react';

type IOpcao = typeof filtros[0];

interface Props {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

const Filtros = ({ filtro, setFiltro }: Props) => {

    function selecionarFiltro(opcao: IOpcao) {
        if (filtro === opcao.id) {
            return setFiltro(null);
        }
        return setFiltro(opcao.id);
    }

    return (
        <div>
            {filtros.map((opcao) => (
                <button
                    className={classNames({
                        'filtros__filtro': true,
                        'filtros__filtro--ativo': filtro === opcao.id,
                    })}
                    key={opcao.id}
                    onClick={() => selecionarFiltro(opcao)}
                >
                    {opcao.label}
                </button>
            ))}
        </div>
    );
};

export default Filtros;
