import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cart from '../Pages/Cart';
import { CartContext } from '../Context/Context';

const SingleCard = ({prod}) => {

  const {cart,setCart} = useContext(CartContext)

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.image} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
            {`Stock : `+prod.inStock}
        </Card.Text>
        <Card.Text>
            {`Fast delivery : `+prod.fastDelivery}
        </Card.Text>
        <Card.Text>
            {`ratings : `+prod.ratings}
        </Card.Text>

        {
        cart.includes(prod)?(
            <Button
            className="add"
            onClick={
                ()=>{
                    setCart(cart.filter((cart)=>cart.id!==prod.id));
                }
            }
        >
        Remove from cart
        </Button>
        ):(
            <Button
            className="add"
            onClick={
                ()=>{
                    setCart([...cart,prod]);
                }
            }
        >
        Add to Cart
        </Button>
        )
      }

        {/* <Button 
          variant="primary" 
           onClick={
            setCart([...cart],prod)
           }
        >
          Add to cart
        </Button> */}
      </Card.Body>
    </Card>
  )
}

export default SingleCard
