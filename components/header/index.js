import React from 'react';
import clientlogo from '../../assets/images/logo.png';

import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Navbar,Nav} from 'react-bootstrap'


const index = () => {
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
                              <Nav.Link href="#About">About</Nav.Link>
                              <Nav.Link href="#Pricing">Pricing</Nav.Link>
                              <Nav.Link href="#link">Contact Us</Nav.Link>
                              <Nav.Link href="#link">Concrete Calculator</Nav.Link>
                              
                            </Nav>
                            <div className='login_option'>
                              <Nav.Link href="#link">Login</Nav.Link>
                              <Nav.Link href="#link">Register</Nav.Link>
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
