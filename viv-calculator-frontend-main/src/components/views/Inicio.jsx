import Abas from "../layout/Abas"
import EntradaDeDados from "../layout/EntradaDeDados"
import ListaDeAbas from "../layout/ListaDeAbas"
import Resultados from "../layout/Resultados"

const Inicio = props => {
    return (
        <main>
            <ListaDeAbas />
            <Abas>
                <EntradaDeDados />
                <Resultados />
            </Abas>
        </main>
    )
}

export default Inicio