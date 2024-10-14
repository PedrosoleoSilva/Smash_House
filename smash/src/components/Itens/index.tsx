import Item from './Item';
import cardapio from './itens.json';

const Itens = () => {
    return (
        <div>
            {cardapio.map(item => (
                <Item key={item.nome} {...item}/>
            ))}
        </div>
    );
}

export default Itens;