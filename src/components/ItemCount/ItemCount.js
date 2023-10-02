import { useState } from "react"
import Button from 'react-bootstrap/Button';


const ItemCount = ({inicial, stock, onAdd}) => {

    const [contador, setContador] = useState(inicial)
    function sumar (){
        if (contador < stock) {
            setContador(contador+1)
        }
    }
    function restar () {
        if (contador > 1) {
            setContador(contador-1)
        }
    }

    
    return (

    <div className="d-flex justify-content-center">
         <Button variant="primary" onClick={restar}>-</Button>
    <p>{contador}</p>
    <Button variant="primary" onClick={sumar}>+</Button>
    </div>
   
    )

    
    
}

export default ItemCount