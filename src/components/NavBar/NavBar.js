import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';
import logo from './assets/Logo.png'

const NavBar = () => {
    return (
        <nav className="navbar"> 
        <img className="logo" src={logo} alt="logo-sustenix"></img>
        <ul>
            <li><a href="#">Decoración</a></li>
            <li><a href="#">Mueblería</a></li>
            <li><a href="#">Artículos</a></li>
        </ul>
        <CartWidget></CartWidget>
        </nav>
    )
} 

export default NavBar