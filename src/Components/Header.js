import React, {  useContext } from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/Context';



const Header = () => {

  const {cart,setCart} = useContext(CartContext)

  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand>SHopping Mall</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='mx-4'><Link style={{textDecoration:'none'}} to='/'>Home</Link></Nav.Link>
            <Nav.Link className='mx-4'>
              <Link style={{textDecoration:'none'}} to='/cart'>
                Cart ({cart.length})
              </Link>
            </Nav.Link>
            <button className='mx-4'>Filter</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
