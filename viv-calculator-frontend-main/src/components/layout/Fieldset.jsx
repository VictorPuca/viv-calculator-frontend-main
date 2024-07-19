import './Fieldset.css'

const Fieldset = props => (
    <fieldset>
        <p className="my-2">{props.name}</p>
        <hr></hr>
        {props.children}
    </fieldset>
)

export default Fieldset