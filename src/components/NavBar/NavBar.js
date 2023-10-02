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
            <Nav.Link to={`/category/deco`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Decoración</Nav.Link>
            <Nav.Link to={`/category/muebleria`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mueblería</Nav.Link>
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