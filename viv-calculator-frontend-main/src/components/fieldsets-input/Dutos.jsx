import { useContext, useEffect, useRef, useState } from "react"
import DataContext from '../../data/DataContext'

import Fieldset from "../layout/Fieldset"
import CampoDeEntrada from "../templates/CampoDeEntrada"

const Pipe = props => {
    const { state, setState } = useContext(DataContext)

    const [pipeType, setPipeType] = useState("Definido pelo usuário")

    const firstRender = useRef(true)

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return;
        }
        if (pipeType === "Definido pelo usuário") {
            setState({ ...state, k_v: '', k_l: '', k_vs: '' })
            document.querySelector("input[name='k_v'").focus()
        }
        // eslint-disable-next-line
    }, [pipeType])
    
    useEffect(() => {
        if (pipeType !== "Definido pelo usuário") {
            const URL = "http://localhost:8000/api/" // alterar a rota
            
            const options = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    pipe: state.pipe,
                    d_s: state.d_s,
                    t_s: state.t_s,
                })
            }
            
            fetch(URL, options)
            .then(resp => resp.json())
            .then(data => setState({ ...state, ...data}))
        }
        // eslint-disable-next-line
    }, [
        state.pipe,
        state.d_s,
        state.t_s,
    ])

    return (

        // Alterar para os parametros que vem da api
        <Fieldset name="Parâmetros do Duto">
            <select className="form-select my-3" value={pipeType} onChange={e => setpipeType(e.target.value)}>
                <option value="Definido pelo usuário">Definido pelo usuário</option>
                <option value="Sand - Loose">Sand - Loose</option>
                <option value="Sand - Medium">Sand - Medium</option>
                <option value="Sand - Dense">Sand - Dense</option>
                <option value="Clay - Very soft">Clay - Very soft</option>
                <option value="Clay - Soft">Clay - Soft</option>
                <option value="Clay - Firm">Clay - Firm</option>
                <option value="Clay - Stiff">Clay - Stiff</option>
                <option value="Clay - Very stiff">Clay - Very stiff</option>
                <option value="Clay - Hard">Clay - Hard</option>
            </select>
            <CampoDeEntrada
                description={<span>K<sub>V</sub></span>}
                tooltip="Rigidez vertical dinâmica do solo por unidade de comprimento"
                name="k_v"
                value={state.k_v}
                unit="N/m/m"
                disabled={pipeType === "Definido pelo usuário" ? false : true} />
            <CampoDeEntrada
                description={<span>K<sub>L</sub></span>}
                tooltip="Rigidez lateral dinâmica do solo por unidade de comprimento"
                name="k_l"
                value={state.k_l}
                unit="N/m/m"
                disabled={pipeType === "Definido pelo usuário" ? false : true} />
            <CampoDeEntrada
                description={<span>K<sub>V,S</sub></span>}
                tooltip="Rigidez vertical estática do solo por unidade de comprimento"
                name="k_vs"
                value={state.k_vs}
                unit="mm"
                disabled={pipeType === "Definido pelo usuário" ? false : true} />
        </Fieldset>
    )
}

export default Solo