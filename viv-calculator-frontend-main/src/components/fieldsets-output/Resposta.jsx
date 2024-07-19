import Fieldset from "../layout/Fieldset"
import CampoDeResultado from "../templates/CampoDeResultado"

const Resposta = props => {
    return (
        <Fieldset name="Dados de resposta">
            <CampoDeResultado
                description={<span>f<sub>0,in-line</sub></span>}
                tooltip="Primeira frequência natural na direção in-line"
                name="f0_in"
                unit="Hz" />
            <CampoDeResultado
                description={<span>f<sub>0,cross-flow</sub></span>}
                tooltip="Primeira frequência natural na direção cross-flow"
                name="f0_cr"
                unit="Hz" />
            <CampoDeResultado
                description={<span>A<sub>in-line</sub></span>}
                tooltip="Amplitude normalizada pelo diâmetro máxima na direção in-line"
                name="sa_in"
                unit="MPa" />
            <CampoDeResultado
                description={<span>A<sub>cross-flow</sub></span>}
                tooltip="Amplitude normalizada pelo diâmetro máxima na direção cross-flow"
                name="sa_cr"
                unit="MPa" />
            <CampoDeResultado
                description={<span>&lambda;<sub>max</sub></span>}
                tooltip="Amplitude de tensão equivalente"
                name="lambda"
                unit="MPa" />
            <CampoDeResultado
                description={<span>&lambda;/D</span>}
                tooltip="Razão entre a flecha e o diâmetro externo"
                name="delta_over_d" />
            <CampoDeResultado
                description={<span>S<sub>eff</sub>/P<sub>cr</sub></span>}
                tooltip="Razão entre o esforço axial efetivo e a carga crítica de flambagem"
                name="s_eff_over_p_cr" />
        </Fieldset>
    )
}

export default Resposta