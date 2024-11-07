import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import {  Link } from "react-router-dom";
import { CartContext } from "../Context/Context";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FormCheck } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import Form from 'react-bootstrap/Form';
const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {cart,setCart,productsArray,state,dispatch} = useContext(CartContext)

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
        <Container>
          <Navbar.Brand>SHopping Mall</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
                <Link className="mx-3 pt-1 fs-5" style={{ textDecoration: "none" }} to="/">
                  Home
                </Link>
              
              
                <Link className="mx-3 pt-1 fs-5" style={{ textDecoration: "none" }} to="/cart">
                  Cart ({cart.length})
                </Link>
              
              <Button className="mx-4" onClick={handleShow}>
                Filter
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filter your Searches</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <span>
          <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() => dispatch({ type: 'SORT',payload: "lowToHigh", })
          }
          checked={state.sort === "lowToHigh" ? true : false}
        />
          </span>
          <br />
          <span>
            <FormCheck
              inline
              label="Descending"
              name="group1"
              type="radio"
              id={`inline-2`}
              onChange={() => dispatch({ type: 'SORT',payload: "highToLow", })}
              checked={state.sort === "highToLow" ? true : false}
            />
          </span>
          <br />
          <span>
            <FormCheck
              inline
              label="Include Out of Stock"
              name="group1"
              type="checkbox"
              id={`inline-3`}
            />
          </span>
          <br />
          <span>
            <FormCheck
              inline
              label="Fast Delivery Only"
              name="group1"
              type="checkbox"
              id={`inline-4`}
            />
          </span>
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button 
            variant="primary"
            onClick={() => dispatch({  type: 'CLEAR_FILTERS' })
          }
            >Clear Filters</Button>

          <Button variant="primary" onClick={handleClose}>
            Filter
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Header;
