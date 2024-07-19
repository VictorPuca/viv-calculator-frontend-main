import { useContext } from "react"
import DataContext from '../../data/DataContext'

import Fieldset from "../layout/Fieldset"
import CampoDeEntrada from "../templates/CampoDeEntrada"

const Densidades = props => {
    const { state, } = useContext(DataContext)

    return (
        <Fieldset name="Densidades">
            <CampoDeEntrada
                description={<span>&rho;<sub>steel</sub></span>}
                tooltip="Densidade do aço"
                name="rho_s"
                value={state.rho_s}
                unit="kg/m³" />
            <CampoDeEntrada
                description={<span>&rho;<sub>concrete</sub></span>}
                tooltip="Densidade do concreto"
                name="rho_conc"
                value={state.rho_conc}
                unit="kg/m³" />
            <CampoDeEntrada
                description={<span>&rho;<sub>coating</sub></span>}
                tooltip="Densidade do revestimento"
                name="rho_coat"
                value={state.rho_coat}
                unit="kg/m³" />
            <CampoDeEntrada
                description={<span>&rho;<sub>content</sub></span>}
                tooltip="Densidade do conteúdo"
                name="rho_cont"
                value={state.rho_cont}
                unit="kg/m³" />
        </Fieldset>
    )
}

export default Densidades