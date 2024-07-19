import { useContext } from "react";
import DataContext from '../../data/DataContext'

import './CampoDeTexto.css'

const CampoDeEntrada = props => {

    const { state, setState } = useContext(DataContext)

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: +e.target.value
        })
    }

    return (
        <div className="input-group my-3">
            <span className="input-group-text label"
                title={props.tooltip}>{props.description}</span>
            <input type="number"
                className="form-control"
                name={props.name}
                step="any"
                required
                value={props.value}
                onChange={handleChange}
                {...props}></input>
            {props.unit ? <span className="input-group-text unit">{props.unit}</span> : ''}
        </div>
    )
}

export default CampoDeEntrada