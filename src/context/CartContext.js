import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const addItem = (item, cantidad) => {

        //Luego se puede modificar para que se agregue la nueva cantidad
        if(isIncart(item.id)) {
            setCart(cart.map ((producto)=> {
                if (producto.id === item.id) {
                    return {...producto, cantidad : producto.cantidad + cantidad}
                } else {
                    return producto
                }
            }))
            
        } else {
            setCart([...cart, {...item, cantidad: cantidad}]);
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isIncart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => total + (item.precio * item.cantidad), 0)
    }
    
    const cantidadTotal = cart.reduce((total, item) => total + item.cantidad, 0);
    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, cartTotal, cantidadTotal}}>
            {children}
        </CartContext.Provider>
    )



}

