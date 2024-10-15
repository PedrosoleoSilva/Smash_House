import { useCallback, useEffect, useState } from 'react';
import Item from './Item';
import cardapio from './itens.json';


interface Props {
    busca: string
    filtro: number | null
}

const Itens = (props: Props) => {

    const [lista, setLista] = useState(cardapio);
    const { busca, filtro } = props;

    const testaBusca = useCallback((title: string) => {
        const regex = new RegExp(busca, 'i');
        return regex.test(title);
    }, [busca]);

    const testaFiltro = useCallback((id: number) => {
        if (filtro !== null) return filtro === id;
        return true;
    }, [filtro]);

    useEffect(() => {
        const novaLista = cardapio.filter(item => testaBusca(item.nome) && testaFiltro(item.categoria.id));
        setLista(novaLista);
    }, [testaBusca, testaFiltro])

    return (
        <div style={{ minHeight: '200px' }}>
            {lista.length > 0 ? (
                lista.map(item => (
                    <Item key={item.nome} {...item} />
                ))
            ) : (
                <p style={{fontSize:23, color: 'black'}}>Nenhum item encontrado.</p>
        )}
        </div>
    );
}

export default Itens;