import ItemCount from "../ItemCount/ItemCount";
import Card from 'react-bootstrap/Card';
import { useState, useContext} from "react";
import {Link} from 'react-router-dom';
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({id, nombre, img, categoria, descripcion, precio, stock}) => {
  const [quantityAdded, setQuantityAdded] = useState(0)
  const {addItem} = useContext(CartContext)
  const handleOnAdd = (cantidad) => {
    setQuantityAdded(cantidad)
    const item = {id, nombre, precio, cantidad, img}
    addItem(item, cantidad)
  }

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} alt={nombre} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            ${precio} <br/>
            Stock disponible: {stock} <br/>
            {descripcion}
          </Card.Text>
          <footer>
          {
              quantityAdded !==  0 ? (
                <Link to='/cart' className='Option'>Finalizar Compra</Link>
                ) : (
                <ItemCount inicial={1} stock={stock} onAdd={handleOnAdd}/>
                )
            }
          </footer>
           
          

        
        </Card.Body>
      </Card>
    )
}

export default ItemDetail