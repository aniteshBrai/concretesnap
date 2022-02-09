import React, { useState } from 'react';
import {Container,Row,Col,Navbar,Nav,NavbarBrand,Collapse,NavItem,NavLink} from 'react-bootstrap'
import clientlogo from '../../assets/images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css'

const index = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="header_outer">
          <Container>
            <Row>
              <Col sm={12}>
                  <div className="headeinfo">
                      <div className='header_left'>
                        <Navbar.Brand href="#home">
                        <img src={clientlogo.src}  alt="logo" />
                        </Navbar.Brand>
                      </div>

                      <div className='header_right'>
                        <Navbar bg="light1" expand="lg">
                          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                          <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                              <Nav.Link href="/about_us">About</Nav.Link>
                              <Nav.Link href="/pricing_plans">Pricing</Nav.Link>
                              <Nav.Link href="/contact_us">Contact Us</Nav.Link>
                              <Nav.Link href="#link">Concrete Calculator</Nav.Link>
                              
                            </Nav>
                            <div className='login_option'>
                              <Nav.Link href="/login">Login</Nav.Link>
                              <Nav.Link href="/signup">Register</Nav.Link>
                            </div>
                          </Navbar.Collapse>
                        </Navbar>
                      </div>
                  </div>
                 
              </Col>
            </Row>
          </Container>  
      </header>
    </>);
};

export default index;
