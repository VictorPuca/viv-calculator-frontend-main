import { useContext, useEffect, useRef, useState } from "react"
import DataContext from '../../data/DataContext'

import Fieldset from "../layout/Fieldset"
import CampoDeEntrada from "../templates/CampoDeEntrada"

const Solo = props => {
    const { state, setState } = useContext(DataContext)

    const [soilType, setSoilType] = useState("Definido pelo usuário")

    const firstRender = useRef(true)

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return;
        }
        if (soilType === "Definido pelo usuário") {
            setState({ ...state, k_v: '', k_l: '', k_vs: '' })
            document.querySelector("input[name='k_v'").focus()
        }
        // eslint-disable-next-line
    }, [soilType])
    
    useEffect(() => {
        if (soilType !== "Definido pelo usuário") {
            const URL = "http://localhost:8000/api/soil_stiffness"
            
            const options = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    d_s: state.d_s,
                    t_s: state.t_s,
                    t_conc: state.t_conc,
                    t_coat: state.t_coat,
                    rho_s: state.rho_s,
                    rho_conc: state.rho_conc,
                    rho_coat: state.rho_coat,
                    rho_cont: state.rho_cont,
                    rho_water: state.rho_water,
                    soil_type: soilType
                })
            }
            
            fetch(URL, options)
            .then(resp => resp.json())
            .then(data => setState({ ...state, ...data}))
        }
        // eslint-disable-next-line
    }, [
        state.d_s,
        state.t_s,
        state.t_conc,
        state.t_coat,
        state.rho_s,
        state.rho_conc,
        state.rho_coat,
        state.rho_cont,
        state.rho_water,
        soilType
    ])

    return (
        <Fieldset name="Parâmetros do solo">
            <select className="form-select my-3" value={soilType} onChange={e => setSoilType(e.target.value)}>
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
                disabled={soilType === "Definido pelo usuário" ? false : true} />
            <CampoDeEntrada
                description={<span>K<sub>L</sub></span>}
                tooltip="Rigidez lateral dinâmica do solo por unidade de comprimento"
                name="k_l"
                value={state.k_l}
                unit="N/m/m"
                disabled={soilType === "Definido pelo usuário" ? false : true} />
            <CampoDeEntrada
                description={<span>K<sub>V,S</sub></span>}
                tooltip="Rigidez vertical estática do solo por unidade de comprimento"
                name="k_vs"
                value={state.k_vs}
                unit="N/m/m"
                disabled={soilType === "Definido pelo usuário" ? false : true} />
        </Fieldset>
    )
}

export default Solo