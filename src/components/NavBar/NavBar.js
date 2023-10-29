import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import logo from './assets/Logo.png'
import {Link} from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand><Link to='/'><img className="logo" src={logo} alt="logo-sustenix"></img></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/category/deco">Decoración</Nav.Link>
            <Nav.Link  as={Link} to="/category/muebleria">Mueblería</Nav.Link>
            <NavDropdown title="Artículos" id="basic-nav-dropdown">
                <NavDropdown.Item  as={Link} to="/category/cocina">Cocina</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/bano">Baño</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/limpieza">Limpieza</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/category/textiles">Textiles</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        <CartWidget/>
        </Container>
        </Navbar>

        
    )
} 

export default NavBar