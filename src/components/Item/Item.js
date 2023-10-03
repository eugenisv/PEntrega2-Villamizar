// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
const Item = ({id, nombre, img, precio, stock}) => {

    return (
        <Card style={{ width: '18rem', justifySelf: 'center'}}>
        <Card.Img variant="top" src={img} alt={nombre} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            ${precio} <br/>
            Stock disponible: {stock}
          </Card.Text>
          <Link to={`/item/${id}`} className="Option">Ver Detalles</Link>
        </Card.Body>
      </Card>
    )
}

export default Item