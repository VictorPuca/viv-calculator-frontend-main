import Fieldset from "../layout/Fieldset"
import CampoDeResultado from "../templates/CampoDeResultado"

const Areas = props => {
    return (
        <Fieldset name="Áreas">
            <CampoDeResultado
                description={<span>A<sub>cont</sub></span>}
                tooltip="Área interna do duto"
                name="a_cont"
                unit="m²" />
            <CampoDeResultado
                description={<span>A<sub>steel</sub></span>}
                tooltip="Área de aço"
                name="a_s"
                unit="m²" />
            <CampoDeResultado
                description={<span>A<sub>coating</sub></span>}
                tooltip="Área do revestimento"
                name="a_coat"
                unit="m²" />
            <CampoDeResultado
                description={<span>A<sub>concrete</sub></span>}
                tooltip="Área do revestimento de concreto"
                name="a_conc"
                unit="m²" />
            <CampoDeResultado
                description={<span>A<sub>total</sub></span>}
                tooltip="Área total"
                name="a_e"
                unit="m²" />
        </Fieldset>
    )
}

export default Areas