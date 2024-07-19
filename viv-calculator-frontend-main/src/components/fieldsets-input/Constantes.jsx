import { useContext } from "react"
import DataContext from '../../data/DataContext'

import Fieldset from "../layout/Fieldset"
import CampoDeEntrada from "../templates/CampoDeEntrada"

const Constantes = props => {
    const { state, } = useContext(DataContext)

    return (
        <Fieldset name="Constantes">
            <CampoDeEntrada
                description={<span>&nu;</span>}
                tooltip="Coeficiente de poisson"
                name="nu"
                value={state.nu} />
            <CampoDeEntrada
                description={<span>&alpha;</span>}
                tooltip="Coeficiente de dilatação térmica"
                name="alpha"
                value={state.alpha}
                unit={<span>°C<sup>-1</sup></span>} />
            <CampoDeEntrada
                description="E"
                tooltip="Módulo de Young"
                name="young"
                value={state.young}
                unit="N/m²" />
            <CampoDeEntrada
                description={<span>&rho;<sub>water</sub></span>}
                tooltip="Densidade da água do mar"
                name="rho_water"
                value={state.rho_water}
                unit="kg/m³" />
        </Fieldset>
    )
}

export default Constantes