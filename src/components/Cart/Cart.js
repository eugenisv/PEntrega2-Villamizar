import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const {cart, clearCart, cantidadTotal, cartTotal} = useContext(CartContext)

    if(cantidadTotal === 0) {
        return (
            <div>
                <h2>De momento, no tienes productos en tu carrito</h2>
                <Link to='/' className="Option">Ver productos</Link>
            </div>
        )
    }
    
    return (
        <div className="contenedorCart">
            <div className="contenedorCart">
                {cart.map(item => <CartItem key={item.id} item={item} />)}
            </div>
            <h1>Total: ${cartTotal()}</h1>
            <Button onClick={() => clearCart()} variant="primary">Limpiar Carrito</Button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    )
}

export default Cart