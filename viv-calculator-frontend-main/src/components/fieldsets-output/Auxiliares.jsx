import Fieldset from "../layout/Fieldset"
import CampoDeResultado from "../templates/CampoDeResultado"

const Auxiliares = props => {
    return (
        <Fieldset name="Valores auxiliares">
            <CampoDeResultado
                description="D"
                tooltip="Diâmetro externo"
                name="d"
                unit="m" />
            <CampoDeResultado
                description={<span>EI<sub>steel</sub></span>}
                tooltip="Rigidez à flexão do aço"
                name="ei_s"
                unit="Nm²" />
            <CampoDeResultado
                description={<span>m<sub>e</sub></span>}
                tooltip="Massa efetiva"
                name="m_e"
                unit="kg/m" />
            <CampoDeResultado
                description={<span>S<sub>eff</sub></span>}
                tooltip="Esforço axial efetivo"
                name="s_eff"
                unit="N" />
            <CampoDeResultado
                description="CSF"
                tooltip="Fator de rigidez do revestimento de concreto"
                name="csf" />
            <CampoDeResultado
                description={<span>L/D<sub>s</sub></span>}
                tooltip="Razão entre o comprimento e o diâmetro do aço."
                name="l_over_d_s" />
        </Fieldset>
    )
}

export default Auxiliares