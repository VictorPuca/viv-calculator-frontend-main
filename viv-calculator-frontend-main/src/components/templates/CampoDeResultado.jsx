import './CampoDeTexto.css'

const CampoDeResultado = props => {

    return (
        <div className="input-group my-3 result">
            <span className="input-group-text label"
                title={props.tooltip}>{props.description}</span>
            <input type="text"
                className="form-control result"
                name={props.name}
                step="any"
                disabled
                value=''></input>
            {props.unit ? <span className="input-group-text unit">{props.unit}</span> : ''}
        </div>
    )
}

export default CampoDeResultado