import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import logo from './assets/Logo.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#home"><img className="logo" src={logo} alt="logo-sustenix"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home">Decoración</Nav.Link>
            <Nav.Link href="#link">Mueblería</Nav.Link>
            <NavDropdown title="Artículos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Cocina</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Baño
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Limpieza</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                Textiles
                </NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        <CartWidget/>
        </Container>
        </Navbar>
    )
} 

export default NavBar