import { useContext, useEffect, useState } from "react";
import DataContext from '../../data/DataContext';

import Fieldset from "../layout/Fieldset";
import CampoDeEntrada from "../templates/CampoDeEntrada";

const Dimensoes = props => {
    const { state, setState } = useContext(DataContext);

    const [pipeType, setPipeType] = useState("Definido pelo usuário");
    // pipes será um objeto com os dados dos pipes
    const [pipes, setPipes] = useState({});

    useEffect(() => {
        // Fetch the data from the API
        fetch('http://localhost:8000/pipes')
            .then(response => response.json()) 
            .then(data => {
                // get the data and set the state to working in handleselectchange
                setPipes(data);
            })
    }, []);

    const handleSelectChange = (e) => {
        const selectedPipe = e.target.value;
        setPipeType(selectedPipe);
        console.log(selectedPipe)

        if (selectedPipe !== "Definido pelo usuário") {
            setState({
                ...state,
                pipe: selectedPipe,
                d_s: pipes[selectedPipe].d_s,
                t_s: pipes[selectedPipe].t_s
            });
        } else {
            setState({
                ...state,
                d_s: '',
                t_s: ''
            });
        }
    };

    return (
        <Fieldset name="Dimensões do duto">
            <select className="form-select my-3" onChange={handleSelectChange}>
                <option value="Definido pelo usuário">Definido pelo usuário</option>
                {Object.keys(pipes).map(pipe => (
                    <option key={pipe} value={pipe}>{pipe}</option>
                ))}
            </select>
            <CampoDeEntrada
                description={<span>D<sub>s</sub></span>}
                tooltip="Diâmetro externo de aço"
                name="d_s"
                value={state.d_s}
                unit="m" />
            <CampoDeEntrada
                description={<span>t<sub>steel</sub></span>}
                tooltip="Espessura de aço"
                name="t_s"
                value={state.t_s}
                unit="m" />
                <CampoDeEntrada
                description={<span>t<sub>concrete</sub></span>}
                tooltip="Espessura do revestimento de concreto"
                name="t_conc"
                value={state.t_conc}
                unit="m" />
            <CampoDeEntrada
                description={<span>t<sub>coating</sub></span>}
                tooltip="Espessura de revestimento"
                name="t_coat"
                value={state.t_coat}
                unit="m" />
        </Fieldset>
    );
};

export default Dimensoes;
