import React, { useContext, useReducer, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SingleCard from '../Components/SingleCard'

import { CartContext } from '../Context/Context';


const Home = () => {

   

      
    const {cart,setCart,productsArray,state,dispatch} = useContext(CartContext)
    
    const transformProducts = () =>{
      let sortedProducts = productsArray;

    if (state.sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        state.sort === "lowToHigh" ? a.price - b.price : null
      );
    }
    if (state.sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        state.sort === "highToLow" ?  b.price - a.price : null
      );
    }
    return sortedProducts;
    }

  return (
    <Container className='mt-5'>
        <h1 className='text-center mt-4 py-4 text-warning'>Welcome to our online shopping mart</h1>

        <Row className='g-4 '>
        {transformProducts().map((prod) => (
          <SingleCard prod={prod} key={prod.id} />
        ))}
        </Row>
       

    </Container>
  )
}

export default Home
