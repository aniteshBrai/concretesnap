import React from 'react';
import pricing_plansimage  from '../../assets/images/pricing_plans.png';
import aboutadd1 from '../../assets/images/about_add1.png';
import like_pic from '../../assets/images/like.png';
import premimplan_pic from '../../assets/images/prem.png'; 
import starplan_pic from '../../assets/images/star.png';    
import check_pic from '../../assets/images/check.png';    


import {Container,Row,Col,Navbar,Nav} from 'react-bootstrap'
 
const index = () => {
  return (
      <>
        <div className='banner_add innerbanner'> 
          <div className='banner_panel'  style={{ backgroundImage: `url("${pricing_plansimage.src}")` }} >
              <Container>
              <Row>
                <Col sm={12}>
                    <div className='banner_cont'>
                        <h2><span>Pricing Plans </span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit,</p>
                    
                    </div>
                </Col>
              </Row>
            </Container>   
          </div>
        </div>


        <div className='main_content_wrap pricingplans'>
          <div className='main_content_block'>
            <Container>
              <Row>
                <Col sm={12}>
                <div className='pricingplan_wrap'>
                  <div className='pricingplan_block basicplan'>
                    <div className='pric_pic' > 
                        <img src={like_pic.src}  alt="logo" />
                    </div>
                    <div className='pricingplan_info'>
                      <h3>BASIC</h3>
                      <p>Lorem ipsum dolor sit amet,
consectetur adipiscing elit nulla </p>
                        <div className='pricopt basicpric'>
                            <span  className='curnc'>$</span><em className='pricetext'>0</em><strong> </strong>
                        </div>
                    </div>
                    <div className='pricingplan_opt' >
                      <ul>
                        <li><img src={check_pic.src}  alt="check" />Lorem ipsum dolor sit amet</li>
                        <li><img src={check_pic.src}  alt="check" />Lorem ipsum dolor sit amet</li>
                        <li><img src={check_pic.src}  alt="check" />Lorem ipsum dolor sit amet</li>
                        <li className='des'>Lorem ipsum dolor sit amet</li>
                        <li className='des'>Lorem ipsum dolor sit amet</li>
                      </ul>
                      <div className='read_more_option'>
                            <a href='#' className='def_btn' >Subscribe</a>
                      </div>
                
                    </div>
                  </div>
                  <div className='pricingplan_block premimplan'>
                    <div className='pric_pic' > 
                        <img src={premimplan_pic.src}  alt="logo" />
                    </div>
                    <div className='pricingplan_info'>
                      <h3>PREMIUM</h3>
                      <p>Lorem ipsum dolor sit amet,
consectetur adipiscing elit nulla </p>
                        <div className='pricopt basicpric'>
                            <span  className='curnc'>$</span><em className='pricetext'>200</em><strong>per user / year <span>billed annually</span> </strong>
                        </div>
                    </div>
                    <div className='pricingplan_opt' >
                      <ul>
                        <li><img src={check_pic.src}  alt="check" />Lorem ipsum dolor sit amet</li>
                        <li><img src={check_pic.src}  alt="check" />Lorem ipsum dolor sit amet</li>
                        <li><img src={check_pic.src}  alt="check" />Lorem ipsum dolor sit amet</li>
                        <li><img src={check_pic.src}  alt="check" />Lorem ipsum dolor sit amet</li>
                        <li><img src={check_pic.src}  alt="check" />Lorem ipsum dolor sit amet</li>
                      </ul>
                      <div className='read_more_option'>
                            <a href='#' className='def_btn' >Subscribe</a>
                      </div>
                
                    </div>
                  </div>

                  <div className='pricingplan_block standardplan'>
                    <div className='pric_pic' > 
                        <img src={starplan_pic.src}  alt="logo" />
                    </div>
                    <div className='pricingplan_info'>
                      <h3>STANDARD</h3>
                      <p>Lorem ipsum dolor sit amet,
consectetur adipiscing elit nulla </p>
                        <div className='pricopt basicpric'>
                            <span  className='curnc'>$</span><em className='pricetext'>100</em><strong>per user / year <span>billed annually</span> </strong>
                        </div>
                    </div>
                    <div className='pricingplan_opt' >
                      <ul>
                        <li><img src={check_pic.src}  alt="check" />Lorem ipsum dolor sit amet</li>
                        <li><img src={check_pic.src}  alt="check" />Lorem ipsum dolor sit amet</li>
                        <li><img src={check_pic.src}  alt="check" />Lorem ipsum dolor sit amet</li>
                        <li className='des' >Lorem ipsum dolor sit amet</li>
                        <li className='des'>Lorem ipsum dolor sit amet</li>
                      </ul>
                      <div className='read_more_option'>
                            <a href='#' className='def_btn' >Subscribe</a>
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
