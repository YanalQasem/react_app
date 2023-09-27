import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComp(props){
  return(
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src= {props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          The food looks good
        </Card.Text>
        <Button variant="primary">More details</Button>
      </Card.Body>
    </Card>
  )
}

export default CardComp;