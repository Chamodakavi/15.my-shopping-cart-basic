import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SingleCard from '../Components/SingleCard'
import { faker } from '@faker-js/faker';
const Home = () => {

    faker.seed(100);

    const productsArray = [...Array(20)].map(() => ({
        id:faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.avatar(),
        inStock: faker.helpers.arrayElement([0, 3, 5, 7, 8]), 
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]) 
  
      }));

      const [product,setProduct] = useState(productsArray)
    
      

  return (
    <Container className='mt-5'>
        <h1 className='text-center mt-4 py-4 text-warning'>Welcome to our online shopping mart</h1>

        <Row className='g-4 '>
            {
                product.map(
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

export default Home
