import { useContext } from "react"
import DataContext from '../../data/DataContext'

import Fieldset from "../layout/Fieldset"
import CampoDeEntrada from "../templates/CampoDeEntrada"

const Revestimento = props => {
    const { state, } = useContext(DataContext)

    return (
        <Fieldset name="Dados do revestimento">
            <CampoDeEntrada
                description={<span>k<sub>c</sub></span>}
                tooltip="Constante empírica para a rigidez do concreto"
                name="kc"
                value={state.kc} />
            <CampoDeEntrada
                description={<span>f<sub>cn</sub></span>}
                tooltip="Resistência construtiva do revestimento de concreto"
                name="fcn"
                value={state.fcn}
                unit="MPa" />
        </Fieldset>
    )
}

export default Revestimento