import React from 'react';

import addimg1 from '../../assets/images/add_pic1.png';
import addimg2 from '../../assets/images/addpic2.png';

import {Container,Row,Col,Navbar,Nav} from 'react-bootstrap'

const index = () => {
  return (
      <>
        <div className='main_content_wrap'>
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
                        <img src={addimg1.src}  alt="add" />
                      </div>
                  </div>
                </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className='main_content_block graycontent'>
            <Container>
              <Row>
                <Col sm={12}>
                    <div className='main_content_info grayopt'>
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
                        <img src={addimg2.src}  alt="add" />

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
