import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cart from '../Pages/Cart'; // Assuming Cart is for reference
import { CartContext } from '../Context/Context';

const SingleCard = ({ prod }) => {

  const { cart, setCart } = useContext(CartContext);

  const isInCart = cart.some(cartItem => cartItem.id === prod.id); // Check if product is in cart

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.image} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          {`Stock : ` + prod.inStock}
        </Card.Text>
        <Card.Text>
          {`Fast delivery : ` + prod.fastDelivery}
        </Card.Text>
        <Card.Text>
          {`ratings : ` + prod.ratings}
        </Card.Text>
        <Card.Text>
          {`Price : ` + prod.price}
        </Card.Text>

        {isInCart ? (
          <Button
            className="add"
            onClick={() => {
              setCart(cart.filter((cartItem) => cartItem.id !== prod.id));
            }}
          >
            Remove from cart
          </Button>
        ) : (
          <Button
            className="add"
            onClick={() => {
              setCart([...cart, prod]);
            }}
          >
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default SingleCard;