import React from 'react';
import aboutbannerimage  from '../../assets/images/about_banner.png';
import aboutadd1 from '../../assets/images/about_add1.png';
import aboutadd2 from '../../assets/images/about_add2.png';   
import {Container,Row,Col,Navbar,Nav} from 'react-bootstrap'
 
const index = () => {
  return (
      <>
        <div className='banner_add innerbanner'> 
          <div className='banner_panel'  style={{ backgroundImage: `url("${aboutbannerimage.src}")` }} >
              <Container>
              <Row>
                <Col sm={12}>
                    <div className='banner_cont'>
                        <h2><span>ABOUT US</span></h2>
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
                <div className='main_content_info'>
                  <div className='main_content_left'>
                      <h3><span>What We Do</span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit,
                      </h3>
                      <p>Curabitur hendrerit quam tellus, sed pretium lorem condimentum in. Sed turpis ex, hendrerit in rutrum at, tincidunt id eros. Quisque sed vehicula diam. Nulla feugiat nisi justo, sed aliquet nisl sollicitudin ut. Phasellus sagittis felis sed sem cursus condimentum. </p>
                      <p>Sed enim risus, maximus posuere placerat sed, venenatis id ex. Morbi porttitor pretium tempor. Duis et arcu sit amet sem posuere vestibulum vel in nunc. In placerat, orci non volutpat venenatis, justo enim vulputate purus.</p>
                      <p>Curabitur hendrerit quam tellus, sed pretium lorem condimentum in. Sed turpis ex, hendrerit in rutrum at, tincidunt id eros. Quisque sed vehicula diam. Nulla feugiat nisi justo, sed aliquet nisl sollicitudin ut. Phasellus sagittis felis sed sem cursus condimentum. </p>
                      <div className='read_more_option'>
                            <a href='#' className='def_btn' >Read More</a>
                      </div>
                  </div>
                  <div className='main_content_add'>
                      <div  className='addcontent'>
                        <img src={aboutadd1.src}  alt="add" />
                      </div>
                  </div>
                </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className='main_content_block modfcontent'>
            <Container>
              <Row>
                <Col sm={12}>
                    <div className='main_content_info modfcontentblock'>
                      <div className='main_content_left'>
                          <h3>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit,
                          </h3>
                          <p>Curabitur hendrerit quam tellus, sed pretium lorem condimentum in. Sed turpis ex, hendrerit in rutrum at, tincidunt id eros. Quisque sed vehicula diam. Nulla feugiat nisi justo, sed aliquet nisl sollicitudin ut. Phasellus sagittis felis sed sem cursus condimentum. </p>
                          <p>Sed enim risus, maximus posuere placerat sed, venenatis id ex. Morbi porttitor pretium tempor. Duis et arcu sit amet sem posuere vestibulum vel in nunc. In placerat, orci non volutpat venenatis, justo enim vulputate purus.</p>
                          <p>Curabitur hendrerit quam tellus, sed pretium lorem condimentum in. Sed turpis ex, hendrerit in rutrum at, tincidunt id eros. Quisque sed vehicula diam. Nulla feugiat nisi justo, sed aliquet nisl sollicitudin ut. Phasellus sagittis felis sed sem cursus condimentum. </p>
                          <div className='read_more_option'>
                                <a href='#' className='def_btn' >Read More</a>
                          </div>
                      </div>
                      <div className='main_content_add'>
                        <div  className='addcontent'>
                        <img src={aboutadd2.src}  alt="add" />

                        </div>
                      </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

    </>
  );
};

export default index;
