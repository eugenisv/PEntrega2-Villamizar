import cart from './assets/cart.svg'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
const CartWidget = () => {

   const {cantidadTotal} = useContext(CartContext)
    return (
        <Link to='/cart' className="carro" style={{textDecoration: 'none', color: '#000'}}>
            <img src={cart} alt="carrito"/>
           <p style={{display : cantidadTotal > 0 ? 'block' : 'none'}}>{cantidadTotal}</p>
        </Link>
    )
}

export default CartWidget