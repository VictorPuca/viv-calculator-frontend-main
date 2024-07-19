import { useContext } from "react"
import DataContext from '../../data/DataContext'

import Fieldset from "../layout/Fieldset"
import CampoDeEntrada from "../templates/CampoDeEntrada"

const VaoLivre = props => {
    const { state, } = useContext(DataContext)

    return (
        <Fieldset name="Dados do vão livre">
            <CampoDeEntrada
                description="L"
                tooltip="Comprimento do vão"
                name="l"
                value={state.l}
                unit="m" />
            <CampoDeEntrada
                description="h"
                tooltip="Profundidade da água"
                name="h"
                value={state.h}
                unit="m" />
            <CampoDeEntrada
                description="e"
                tooltip="Gap"
                name="e"
                value={state.e}
                unit="m" />
        </Fieldset>
    )
}

export default VaoLivre