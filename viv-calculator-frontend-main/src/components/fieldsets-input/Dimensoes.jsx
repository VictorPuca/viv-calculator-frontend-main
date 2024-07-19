import { useContext, useEffect, useState } from "react";
import DataContext from '../../data/DataContext';

import Fieldset from "../layout/Fieldset";
import CampoDeEntrada from "../templates/CampoDeEntrada";

const Dimensoes = props => {
    const { state, setState } = useContext(DataContext);

    const [pipeType, setPipeType] = useState("Definido pelo usuário");
    const [pipes, setPipes] = useState([]);

    useEffect(() => {
        // Fetch the data from the API
        fetch('http://localhost:8000/pipes')
            .then(response => response.json())
            .then(data => {
                // Verifica se 'pipes' está definido e é um array
                if (data && Array.isArray(data.pipes)) {
                    setPipes(data.pipes);
                } else {
                    console.error('Dados da API não estão no formato esperado:', data);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleSelectChange = (e) => {
        const selectedPipe = e.target.value;
        setPipeType(selectedPipe);

        if (selectedPipe !== "Definido pelo usuário") {
            const pipeData = pipes.find(pipe => pipe.pipe === selectedPipe);
            if (pipeData) {
                setState({
                    ...state,
                    d_s: pipeData.d_s,
                    t_s: pipeData.t_s
                });
            }
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
            <select className="form-select my-3" value={pipeType} onChange={handleSelectChange}>
                <option value="Definido pelo usuário">Definido pelo usuário</option>
                {pipes.map(pipe => (
                    <option key={pipe.pipe} value={pipe.pipe}>
                        {pipe.pipe}
                    </option>
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
