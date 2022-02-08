import React from 'react';
import bannerimage  from '../../assets/images/home_banner.png';

import {Container,Row,Col,Navbar,Nav} from 'react-bootstrap'

const index = () => {
  return (
    <div className='banner_add'> 
      <div className='banner_panel'  style={{ backgroundImage: `url("${bannerimage.src}")` }} >
          <Container>
          <Row>
            <Col sm={12}>
                <div className='banner_cont'>
                    <h2>Welcome to <span>Concrete Snap</span></h2>
                    <div className='def_btn_section'>
                      <a href='#' className='def_btn' >Know More</a>
                    </div>
                </div>
            </Col>
          </Row>
        </Container>  
      </div>
    </div>
  );
};

export default index;
