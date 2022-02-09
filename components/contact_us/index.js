import React from 'react';
import contactbannerimage  from '../../assets/images/contact_banner.png';
import contactmap  from '../../assets/images/map.png';
import emailicon  from '../../assets/images/email.png';
import callicon  from '../../assets/images/call.png';
import loctaionicon  from '../../assets/images/loctaion.png';

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

        <div className='main_content_wrap contactpage'>
          <div className='main_content_block'>
            <Container>
              <Row>
                <Col md={12}>
                    <div className='contact_info_map'>
                        <img src={contactmap.src}  alt="add" />
                    </div>
                </Col>
              </Row>
            </Container>
              <Container>
                <Row>
                  <Col md={12}>
                    <div className='contact_description'>
                      <div className='contact_desc'>
                        <div className='contact_info'>
                            <div className='contact_info_icon'> 
                                <img src={emailicon.src}  alt="" />
                            </div>
                            <div className='contact_info_des'>
                                <p><span>EMAIL</span></p> 
                                <p>sample@gmail.com</p>
                                <p>officemail@gmail.com</p>
                            </div>
                        </div>
            
                        <div className='contact_info'>
                            <div className='contact_info_icon'> 
                                <img src={callicon.src}  alt="" />
                            </div>
                            <div className='contact_info_des'>
                                <p><span>CONTACT NUMBER</span></p> 
                                <p>(988) 987 654 3210</p>
                                <p>(988) 987 654 3210</p>
                            </div>
                        </div>
                        <div className='contact_info'>
                            <div className='contact_info_icon'> 
                                <img src={loctaionicon.src}  alt="" />
                            </div>
                            <div className='contact_info_des'>
                                <p><span>OUR OFFICE</span></p> 
                                <p>4100, Agrabad Road opp Park Street, USA</p>
                            </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>

              {/* <Container>
                <Row>
                  <Col md={12}>
                    <div className='from_contentblock'>
                      <h2 className='from_title' >Send Us Message</h2>
                      <div className='contact_from' >
                        <div className='from_row'>
                          <div className='inp_from'>
                              <input type="text" name="name" placeholder='Name*'  className='inp_text' />
                          </div>
                          <div className='inp_from'>
                              <input type="email" name="email" placeholder='Email ID*' className='inp_text' />
                          </div>
                          <div className='inp_from'>
                              <input type="text" name="subject" placeholder='Subject*' className='inp_text' />
                          </div>
                        </div>
                        <div className='from_row'>
                          <div className='inp_from2 textareainfo'>
                              <textarea value='' placeholder='Your Message*' className='inp_text '  />
                          </div>
                        </div>
                        <div className='def_from_btn'>
                            <input type="submit" value="Send" className='def_btn' />
                        </div>


                      </div>
                    </div>
                  </Col>
                </Row>
              </Container> */}
          </div>

        </div>
      
      </>
        // <div>Contact Us</div>
    );
};

export default index;
