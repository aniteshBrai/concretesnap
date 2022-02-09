import React from 'react';

import projectbannerimg  from '../../assets/images/projectbanner.png';
import project1pic from '../../assets/images/project1.png';
import project2pic from '../../assets/images/project2.png';
import project3pic from '../../assets/images/project3.png'; 
import doted_pic from '../../assets/images/doted.png'; 
import {Container,Row,Col,Navbar,Nav} from 'react-bootstrap'

 
const index = () => {
  return (
      <>
        <div className='banner_add innerbanner'> 
          <div className='banner_panel'  style={{ backgroundImage: `url("${projectbannerimg.src}")` }} >
              <Container>
              <Row>
                <Col sm={12}>
                    <div className='banner_cont'>
                        <h2><span>PROJECTS</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit,</p>
                    
                    </div>
                </Col>
              </Row>
            </Container>  
          </div>
        </div>


        <div className='main_content_wrap aboutcontent'>
        
          <div className='main_content_block modfcontent'>
            <Container>
              <Row>
                <Col sm={12}>
                <div className='pricingplan_wrap product_wrap'>
                  <div className='pricingplan_block product_block'>
                    <div className='title-opt'>
                        <h2>Project 1 - Residential</h2>
                        <div className='moreviewopt'>
                            <span className='doted_pic'> <img src={doted_pic.src}  alt="doted" /></span>
                        </div>
                    </div>
                    <div className='prod_pic' > 
                        <img src={project1pic.src}  alt="logo" />
                    </div>
                    <div className='pricingplan_info'>
                      <h3>3700 Montclair, Columbus, OH 4321</h3>
                      <p className='date_post'>October 7, <span>2021 10:00 am</span></p>
                        <div className='read_more_option'>
                            <a href='#' className='def_btn' >View Details</a>
                      </div>
                    </div>
                  </div>

                  <div className='pricingplan_block product_block'>
                    <div className='title-opt'>
                        <h2>Project 2 - Hipped Roof</h2>
                        <div className='moreviewopt'>
                            <span className='doted_pic'> <img src={doted_pic.src}  alt="doted" /></span>
                        </div>
                    </div>
                    <div className='prod_pic' > 
                        <img src={project2pic.src}  alt="logo" />
                    </div>
                    <div className='pricingplan_info'>
                      <h3>3700 Montclair, Columbus, OH 4321</h3>
                      <p className='date_post'>October 7, <span>2021 10:00 am</span></p>
                        <div className='read_more_option'>
                            <a href='#' className='def_btn' >View Details</a>
                      </div>
                    </div>
                  </div>

                  <div className='pricingplan_block product_block'>
                    <div className='title-opt'>
                        <h2>Project 3 - Steep Slope</h2>
                        <div className='moreviewopt'>
                            <span className='doted_pic'> <img src={doted_pic.src}  alt="doted" /></span>
                        </div>
                    </div>
                    <div className='prod_pic' > 
                        <img src={project3pic.src}  alt="logo" />
                    </div>
                    <div className='pricingplan_info'>
                      <h3>3700 Montclair, Columbus, OH 4321</h3>
                      <p className='date_post'>October 7, <span>2021 10:00 am</span></p>
                        <div className='read_more_option'>
                            <a href='#' className='def_btn' >View Details</a>
                      </div>
                    </div>
                  </div>

                  <div className='pricingplan_block product_block'>
                    <div className='title-opt'>
                        <h2>Project 1 - Residential</h2>
                        <div className='moreviewopt'>
                            <span className='doted_pic'> <img src={doted_pic.src}  alt="doted" /></span>
                        </div>
                    </div>
                    <div className='prod_pic' > 
                        <img src={project1pic.src}  alt="logo" />
                    </div>
                    <div className='pricingplan_info'>
                      <h3>3700 Montclair, Columbus, OH 4321</h3>
                      <p className='date_post'>October 7, <span>2021 10:00 am</span></p>
                        <div className='read_more_option'>
                            <a href='#' className='def_btn' >View Details</a>
                      </div>
                    </div>
                  </div>

                  <div className='pricingplan_block product_block'>
                    <div className='title-opt'>
                        <h2>Project 2 - Hipped Roof</h2>
                        <div className='moreviewopt'>
                            <span className='doted_pic'> <img src={doted_pic.src}  alt="doted" /></span>
                        </div>
                    </div>
                    <div className='prod_pic' > 
                        <img src={project2pic.src}  alt="logo" />
                    </div>
                    <div className='pricingplan_info'>
                      <h3>3700 Montclair, Columbus, OH 4321</h3>
                      <p className='date_post'>October 7, <span>2021 10:00 am</span></p>
                        <div className='read_more_option'>
                            <a href='#' className='def_btn' >View Details</a>
                      </div>
                    </div>
                  </div>

                  <div className='pricingplan_block product_block'>
                    <div className='title-opt'>
                        <h2>Project 3 - Steep Slope</h2>
                        <div className='moreviewopt'>
                            <span className='doted_pic'> <img src={doted_pic.src}  alt="doted" /></span>
                        </div>
                    </div>
                    <div className='prod_pic' > 
                        <img src={project3pic.src}  alt="logo" />
                    </div>
                    <div className='pricingplan_info'>
                      <h3>3700 Montclair, Columbus, OH 4321</h3>
                      <p className='date_post'>October 7, <span>2021 10:00 am</span></p>
                        <div className='read_more_option'>
                            <a href='#' className='def_btn' >View Details</a>
                      </div>
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
