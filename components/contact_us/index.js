import React from 'react';
import contactbannerimage  from '../../assets/images/contact_banner.png';
import contactmap  from '../../assets/images/map.png';
import {Container,Row,Col,Navbar,Nav} from 'react-bootstrap'



const index = () => {
  return (
      <>  
        <div className='banner_add innerbanner'> 
          <div className='banner_panel'  style={{ backgroundImage: `url("${contactbannerimage.src}")` }} >
              <Container>
              <Row>
                <Col sm={12}>
                    <div className='banner_cont'>
                        <h2><span>CONTACT US</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit,</p>
                    
                    </div>
                </Col>
              </Row>
            </Container>  
          </div>
        </div>

        <div className='main_content_wrap aboutcontent'>
          <div className='main_content_block'>
            <Container>
              <Row>
                <Col sm={12}>
                    <div className='contact_info_map'>
                        <img src={contactmap.src}  alt="add" />
                    </div>
                </Col>
              </Row>
            </Container>
          </div>



        </div>
      
      </>
        // <div>Contact Us</div>
    );
};

export default index;
