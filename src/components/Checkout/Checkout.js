import React, { useContext, useState} from "react";
import { Button } from "react-bootstrap";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../services/firebase";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {

    const [user, setUser] = useState({})
    const[validateEmail, setValidateEmail] = useState('')
    const {cart, clearCart, cantidadTotal} =  useContext(CartContext)
    const[orderId, setOrderId] = useState('')

    const datosComprador = (e) => {
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })

    }

    const generarOrden = (e) => {
        e.preventDefault()
        if(user.nombre && user.tlf) {
           
            let orden = {
                user, 
                items: cart,
                total: cantidadTotal,
                fecha: serverTimestamp()
            }
            const ventas = collection(db, 'ordenes')
            addDoc(ventas, orden)
            .then((res)=>{
                setOrderId(res.id)
                (clearCart)
            } )
            .catch((error) => console.log(error))
        } else {
            alert('Por favor, rellena todos los campos')
        }
      
    }
    console.log(user)
    return (
        <div>
            {orderId !==''
            ? <div>
                <h2>Listo, tu orden se realizó exitosamente!</h2>
                <p>Su Id de registro es: {orderId}</p>
            </div>: 
            <div className="col-8 col-m-10 container justify-content-center">
            <h1>Terminar Compra</h1>
            <p>Para finalizar la compra, te pedimos nos des tus datos</p>
            <form onSubmit={((e)=> generarOrden(e))}>
                <div className="mb-3">
                    <label className='form-label'>Nombre Completo</label>
                    <input onChange={datosComprador} className="form-control" type="text" placeholder="Nombre y Apellido" name="nombre"/>
                </div>
                <div className="mb-3">
                    <label className='form-label'>Número de Teléfono</label>
                    <input onChange={datosComprador} className="form-control" type="number" placeholder="+58-424-0000-000" name="tlf"/>
                </div>
                <div className="mb-3">
                    <label className='form-label'>E-mail</label>
                    <input onChange={datosComprador} className="form-control" type="email" placeholder="contacto@sustenix.com" name="email"/>
                </div>
                <div className="mb-3">
                    <label className='form-label'>Confirmar E-maill</label>
                    <input onChange={((e)=> setValidateEmail(e.target.value)) } className="form-control" type="email" placeholder="contacto@sustenix.com" name="email"/>
                </div>
                <Button variant='primary' type="submit" disabled={validateEmail !== user.email}>Generar Orden</Button>
            </form>
        </div>}
        </div>
       
       
    )
}

export default Checkout