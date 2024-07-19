import './Formulario.css'

const Formulario = props => {

    return (
        <form>
            <section className="Fieldsets">
                {props.children}
            </section>
            {props.handleSubmit ? <button id="btn-calc" type="submit" className="btn btn-primary" onClick={props.handleSubmit}>
                <i className="fa fa-calculator"></i> Calcular</button> : ''}
        </form>
    )
}

export default Formulario