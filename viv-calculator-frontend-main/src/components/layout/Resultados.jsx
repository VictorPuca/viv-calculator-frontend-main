import Areas from "../fieldsets-output/Areas"
import Auxiliares from "../fieldsets-output/Auxiliares"
import Resposta from "../fieldsets-output/Resposta"
import Formulario from "./Formulario"

const Resultados = props => {
    return (
        <div className="tab-pane fade" id="result" role="tabpanel" aria-labelledby="result-tab">
            <Formulario>
                <Areas />
                <Auxiliares />
                <Resposta />
            </Formulario>
        </div>
    )
}


export default Resultados