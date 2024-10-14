import cardapio from '../itens.json';
import './Item.css'

type Props = typeof cardapio[0];

const Item = (props: Props) => {
    const { nome, photo, descricao } = props;
    return (
        <div className='item'>
            <div className='imagem'>
                <img src={photo} alt={nome} />
            </div>
            <div className='descricao'>
                <div className='tags'>
                    <h2>{nome}</h2>
                    <p>{descricao}</p>
                </div>

            </div>

        </div>
    );
}

export default Item;