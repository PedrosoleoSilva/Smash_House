import cardapio from '../itens.json';
import './Item.css';
import { IoMdTimer } from "react-icons/io";
import { TbCurrencyReal } from "react-icons/tb";

type Props = typeof cardapio[0];

const Item = (props: Props) => {
    const { nome, photo, descricao, tempo, preco } = props;
    return (
        <div className='item'>
            <div className='imagem'>
                <img src={photo} alt={nome} />
            </div>
            <div className='descricao'>
                <div className='tags'>
                    <h2>{nome}</h2>
                    <p>{descricao}</p>
                    <div className='tempo-container'>
                        <IoMdTimer size={23} className='icon' />
                        <p>{tempo}</p>
                    </div>
                    <div className='preco-container'> 
                        <TbCurrencyReal size={26} />
                        <p>{preco}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
