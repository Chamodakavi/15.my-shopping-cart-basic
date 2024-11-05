import React, {  useContext, useEffect, useState } from 'react'
import SingleCard from '../Components/SingleCard'
import { CartContext } from '../Context/Context';
import { Col, Container, Row } from 'react-bootstrap';

const Cart = () => {

  const {cart,setCart} = useContext(CartContext)

  const [total,setTotal] = useState('0')

  useEffect(
    ()=>(
      setTotal(
        cart.reduce((acc,curr)=>acc+ Number(curr.price),0)
      )
    ),[cart]
  )

  return (
    <Container className='mt-5'>
        <h1 className='cart-price text-center mt-4 py-4 text-warning'>Total : {total}</h1>

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
