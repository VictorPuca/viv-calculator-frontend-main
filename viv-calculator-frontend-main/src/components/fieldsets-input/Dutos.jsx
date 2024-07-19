import { useContext, useEffect, useState } from "react";
import DataContext from '../../data/DataContext';

import Fieldset from "../layout/Fieldset";
import CampoDeEntrada from "../templates/CampoDeEntrada";

const Dimensoes = props => {
    const { state, setState } = useContext(DataContext);
    const [preset, setPreset] = useState("Definido pelo usuário");
    const [dbData, setDbData] = useState(null);

    useEffect(() => {
        // Fetch the data from db.json once on initial render
        fetch('/path/to/db.json')
            .then(response => response.json())
            .then(data => setDbData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        if (preset === "Definido pelo usuário") {
            setState({ ...state, d_s: '', t_s: '' });
        } else if (dbData && dbData[preset]) {
            const selectedData = dbData[preset];
            setState({
                ...state,
                d_s: selectedData.d_s,
                t_s: selectedData.t_s,
            });
        }
    }, [preset, dbData, setState, state]);

    return (
        <Fieldset name="Dimensões do duto">
            <select className="form-select my-3" value={preset} onChange={e => setPreset(e.target.value)}>
                <option value="Definido pelo usuário">Definido pelo usuário</option>
                {dbData && Object.keys(dbData).map((key) => (
                    <option key={key} value={key}>{key}</option>
                ))}
            </select>
            <CampoDeEntrada
                description={<span>D<sub>s</sub></span>}
                tooltip="Diâmetro externo de aço"
                name="d_s"
                value={state.d_s}
                unit="m"
                disabled={preset !== "Definido pelo usuário"} />
            <CampoDeEntrada
                description={<span>t<sub>steel</sub></span>}
                tooltip="Espessura de aço"
                name="t_s"
                value={state.t_s}
                unit="m"
                disabled={preset !== "Definido pelo usuário"} />
            <CampoDeEntrada
                description={<span>t<sub>concrete</sub></span>}
                tooltip="Espessura do revestimento de concreto"
                name="t_conc"
                value={state.t_conc}
                unit="m"
                disabled={preset !== "Definido pelo usuário"} />
            <CampoDeEntrada
                description={<span>t<sub>coating</sub></span>}
                tooltip="Espessura de revestimento"
                name="t_coat"
                value={state.t_coat}
                unit="m"
                disabled={preset !== "Definido pelo usuário"} />
        </Fieldset>
    );
};

export default Dimensoes;
