const ListaDeAbas = props => {
    return (
        <ul className="nav nav-tabs" id="tablist" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="input-tab" data-bs-toggle="tab" data-bs-target="#input" type="button" role="tab" aria-controls="input" aria-selected="true">Entrada de dados</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link disabled" id="result-tab" data-bs-toggle="tab" data-bs-target="#result" type="button" role="tab" aria-controls="result" aria-selected="false">Resultados</button>
            </li>
        </ul>
    )
}

export default ListaDeAbas