import { useState } from "react";
import Banner from "../../Banner";
import BuscarHamburgue from "../../BuscarHamburgue";
import Filtros from "../../BuscarHamburgue/Filtros";
import HeaderNavegacao from "../../HeaderNavegacao";
import Itens from "../../Itens";

const Inicio = () => {
    const [busca, setBusca] = useState<string>('');
    const [filtro, setFiltro] = useState<number | null>(null)

    return (
        <div>
            <HeaderNavegacao />
            <Banner />
            <section>
                <BuscarHamburgue
                    placeholder="Digite o quer buscar"
                    busca={busca}
                    setBusca={setBusca}
                />
                <div>
                    <Filtros
                        filtro={filtro}
                        setFiltro={setFiltro}
                    />
                </div>
                <Itens busca={busca} filtro={filtro} />
            </section>
        </div>
    );
}

export default Inicio;