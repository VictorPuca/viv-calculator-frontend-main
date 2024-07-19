import { useContext } from "react";
import DataContext from '../../data/DataContext'

import Fieldset from "../layout/Fieldset";
import CampoDeEntrada from "../templates/CampoDeEntrada";

const Dimensoes = props => {
    const { state, } = useContext(DataContext)

    return (
        <Fieldset name="Dimensões do duto">
            <CampoDeEntrada
                description={<span>D<sub>s</sub></span>}
                tooltip="Diâmetro externo de aço"
                name="d_s"
                value={state.d_s}
                unit="m" />
            <CampoDeEntrada
                description={<span>t<sub>steel</sub></span>}
                tooltip="Espessura de aço"
                name="t_s"
                value={state.t_s}
                unit="m" />
            <CampoDeEntrada
                description={<span>t<sub>concrete</sub></span>}
                tooltip="Espessura do revestimento de concreto"
                name="t_conc"
                value={state.t_conc}
                unit="m" />
            <CampoDeEntrada
                description={<span>t<sub>coating</sub></span>}
                tooltip="Espessura de revestimento"
                name="t_coat"
                value={state.t_coat}
                unit="m" />
        </Fieldset>
    )
}


export default Dimensoes