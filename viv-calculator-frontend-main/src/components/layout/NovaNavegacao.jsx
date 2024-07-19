import { Navbar, Nav } from 'react-bootstrap'

const NovaNavegacao = props => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand className="mx-3" href="/"><i className="fa fa-calculator"></i> VIV Calculator</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto mx-2">
                    <Nav.Link href="/">Início</Nav.Link>
                    <Nav.Link href="/sobre">Sobre</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NovaNavegacao