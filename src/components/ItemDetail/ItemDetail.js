import ItemCount from "../ItemCount/ItemCount";
import Card from 'react-bootstrap/Card';


const ItemDetail = ({id, nombre, img, categoria, descripcion, precio, stock}) => {
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
          <ItemCount inicial={1} stock={stock} onAdd={(contador) =>  console.log("cantidad agregada", contador)}/> 
        </Card.Body>
      </Card>
    )
}

export default ItemDetail