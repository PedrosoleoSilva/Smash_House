import { Link } from 'react-router-dom';
import './HeaderNavegacao.css';

const HeaderNavegacao = () => {
    return (
        <header className='headerNavegacao'>
            <div className='header-logo'>
                <img src="./imagens/logo.png" alt="Logo" />
                <h3>Smash Burguer</h3>
            </div>
            <div className='navegacao'>
                <Link to="/cardapio" className="link-navegacao"><p>Cardápio</p></Link>
                <Link to="/sobre" className="link-navegacao"><p>Sobre</p></Link>
                <Link to="/contato" className="link-navegacao"><p>Contato</p></Link>
            </div>
        </header>
    );
};

export default HeaderNavegacao;
