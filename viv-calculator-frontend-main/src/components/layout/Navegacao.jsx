import { NavLink } from 'react-router-dom'

const Navegacao = props => {

    return (
        <nav id="nav" className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to='/'><i className="fa fa-calculator"></i> VIV Calculator</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Início</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/sobre">Sobre</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navegacao