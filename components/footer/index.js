import React from 'react';
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import linkedin from '../../assets/images/linkedin.png'
import twitter from '../../assets/images/twitter.png'
import youtube from '../../assets/images/youtube.png'
import googleplay from '../../assets/images/googleplay.png';
import appstor from '../../assets/images/appstor.png';


import {Container,Row,Col,Navbar,Nav} from 'react-bootstrap'
 
function index() {
  return (
    <div className='footer_outer'>
        <div  className='footer_content'>
          <Container>
            <Row>
              <Col sm={12}>
                <div className='footer_cont_top'>
                    <h2>Download the App Now</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit,</p>
                    <div className='store_opt'>
                        <a href='#'><img src={googleplay.src}  alt="add" /></a>
                        <a href='#'><img  src={appstor.src}   alt="add" /></a>
                    </div>
                </div>
              </Col>
            </Row> 
            <Row>
              <Col sm={12}>
                <div className='footer_cont'>
                    <div className='social_info'>
                        <a href='#'><img src={facebook.src}  alt="facebook" /></a>
                        <a href='#'><img  src={instagram.src}   alt="instagram" /></a>
                        <a href='#'><img src={linkedin.src}  alt="facebook" /></a>
                        <a href='#'><img  src={youtube.src}   alt="instagram" /></a>
                        <a href='#'><img  src={twitter.src}   alt="instagram" /></a>
                    </div>
                    <p>©2021 Concrete Snap. All rights reserved</p>
                
                </div>
              </Col>
            </Row> 
          </Container>   
        </div>
  </div>
  );
}

export default index;
