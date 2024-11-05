import React, {  useContext, useState } from 'react'
import SingleCard from '../Components/SingleCard'
import { CartContext } from '../Context/Context';
import { Col, Container, Row } from 'react-bootstrap';

const Cart = () => {

  const {cart,setCart} = useContext(CartContext)

  return (
    <Container className='mt-5'>
        <h1 className='text-center mt-4 py-4 text-warning'>Total : 12345</h1>

        <Row className='g-4 '>
            {
                cart.map(
                    (prod)=>(

                        <Col key={prod.id}>
                            <SingleCard prod={prod} />
                        </Col>
                       
                    )
                )
            }
        </Row>
       

    </Container>
  )
}

export default Cart
