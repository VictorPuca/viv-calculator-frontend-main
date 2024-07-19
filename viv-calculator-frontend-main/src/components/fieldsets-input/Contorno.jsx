import { useContext } from "react"

import DataContext from '../../data/DataContext'

import Fieldset from "../layout/Fieldset"

const Contorno = props => {
    const { state, setState } = useContext(DataContext)

    const handleOptionChange = e => {
        setState({
            ...state,
            boundary_condition: +e.target.value
        })
    }

    return (
        <Fieldset name="Condições de contorno">
            <div className="form-check my-3">
                <input type="radio" className="form-check-input"
                    value="1"
                    checked={state.boundary_condition === 1}
                    onChange={handleOptionChange} />
                <label className="form-check-label">RP-F105 Span</label>
            </div>
            <div className="form-check my-3">
                <input type="radio" className="form-check-input"
                    value="2"
                    checked={state.boundary_condition === 2}
                    onChange={handleOptionChange} />
                <label className="form-check-label">Pinned-pinned</label>
            </div>
            <div className="form-check my-3">
                <input type="radio" className="form-check-input"
                    value="3"
                    checked={state.boundary_condition === 3}
                    onChange={handleOptionChange} />
                <label className="form-check-label">Fixed-fixed</label>
            </div>
        </Fieldset>
    )
}

export default Contorno