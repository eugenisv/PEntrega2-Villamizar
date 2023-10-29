import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
const CartItem = ({ item }) => {
    const { id, nombre, precio, cantidad, img} = item;
    const { removeItem } = useContext(CartContext);

    const handleRemove = () => {
        removeItem(id);
    };

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Img variant="top" src={img}/>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            Precio: ${precio}<br/>
            Cantidad: {cantidad} <br/>
            SubTotal: ${precio*cantidad}
          </Card.Text>
          <Button variant="primary" onClick={handleRemove}>Eliminar del Carrito</Button>
        </Card.Body>
      </Card>
    );
};

export default CartItem;