import cart from './assets/cart.svg'
import './CartWidget.css'
const CartWidget = () => {
    return (
        <div className="carro">
            <img src={cart} alt="carrito"></img>
            <p>5</p>
        </div>

    )
}

export default CartWidget