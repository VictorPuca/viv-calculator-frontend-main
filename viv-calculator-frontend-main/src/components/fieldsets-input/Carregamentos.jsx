import { useContext } from "react"
import DataContext from '../../data/DataContext'

import Fieldset from "../layout/Fieldset"
import CampoDeEntrada from "../templates/CampoDeEntrada"

const Carregamentos = props => {
    const { state, } = useContext(DataContext)

    return (
        <Fieldset name="Carregamentos funcionais">
            <CampoDeEntrada
                description={<span>H<sub>eff</sub></span>}
                tooltip="Tensão residual efetiva"
                name="s_lay"
                value={state.s_lay}
                unit="N" />
            <CampoDeEntrada
                description="p"
                tooltip="Pressão interna (normalmente é a pressão de operação)"
                name="pbar"
                value={state.pbar}
                unit="bar" />
            <CampoDeEntrada
                description={<span>&Delta;T</span>}
                tooltip="Mudança de temperatura"
                name="dt"
                value={state.dt}
                unit="°C" />
        </Fieldset>
    )
}

export default Carregamentos