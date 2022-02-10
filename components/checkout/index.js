import React from 'react';
import checkoutBanner  from '../../assets/images/checkoutBanner.png';
import aboutadd1 from '../../assets/images/about_add1.png';
import like_pic from '../../assets/images/like.png';
import premimplan_pic from '../../assets/images/prem.png'; 
import starplan_pic from '../../assets/images/star.png';    
import check_pic from '../../assets/images/check.png';    
import {Container,Row,Col,Navbar,Nav} from 'react-bootstrap'

import {Formik, Field, Form} from 'formik';

import * as Yup from 'yup';
const schema = Yup.object().shape({    
  first_name: Yup.string().required(), 
  last_name: Yup.string().required(),
  address: Yup.string().required(),
  state: Yup.string().required(),  
  city: Yup.string().required(),  
  zipcode: Yup.string().required(),  
});

 
const index = () => {
  return (
      <>
        <div className='banner_add innerbanner'> 
          <div className='banner_panel'  style={{ backgroundImage: `url("${checkoutBanner.src}")` }} >
              <Container>
              <Row>
                <Col sm={12}>
                    <div className='banner_cont'>
                        <h2><span>CHECKOUT </span></h2>
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
                <div className='pricingplan_wrap inner_contview'>
                  
                  <div className='cont_left'>
                      <div className='pricingplan_block'>
                        <div className='pricingplan_info'>
                          <h3>Plan Details</h3>
                          <p>Premium Plan</p>
                            <div className='pricopt basicpric'>
                                <span  className='curnc'>$</span><em className='pricetext'>200</em>
                            </div>
                            <div className='pricopt basicpric'>
                                <strong>pper user / year billed annually <span>billed annually</span> </strong>
                            </div>
                        </div>
                        <div className='totleprice'>
                            <span>Total Price</span>
                            <strong>$200</strong>
                        </div>
                      </div>
                  </div>
                  <div className='cont_right'>

                  <div className='from_contentblock modf_cont_block from_width_lg'>
                        <Container>
                            {/* <h1>Profile Home Owner</h1> */}

                            <h2 className='from_title'>Billing Details</h2>
                            <Formik
                                validationSchema={schema}
                                initialValues={{
                                 
                                    first_name: '',
                                    last_name: '',
                                    address: '',
                                    state: '',
                                    city: '',
                                    zipcode:''
                                    
                                }}
                                validate={values => {
                                    const errors = {};
                                    return errors;
                                }}

                                onSubmit={(values, {setSubmitting}) => {
                                    setTimeout(() => {
                                        alert(JSON.stringify(values, null, 2));
                                        setSubmitting(false);
                                    }, 400);
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                    /* and other goodies */
                                }) => (
                                    <form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col sm={6}>
                                                <div className="form-group def_inp_text inp_from">
                                                    <label htmlFor="first_name" className="form-label">First Name</label>
                                                    <input type="text" name="first_name" onChange={handleChange} onBlur={handleBlur}
                                                        value={values.first_name} placeholder="Enter First Name"
                                                        className="form-control"/>
                                                    <p className='error'>
                                                        {errors.first_name && touched.first_name && errors.first_name}
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="form-group def_inp_text inp_from">
                                                    <label htmlFor="last_name" className="form-label">Last Name</label>
                                                    <input type="text" name="last_name" onChange={handleChange} onBlur={handleBlur}
                                                        value={values.last_name} placeholder="Enter Last Name"
                                                        className="form-control"/>
                                                    <p className='error'>
                                                        {errors.last_name && touched.last_name && errors.last_name}
                                                        </p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={6}>
                                                <div className="form-group def_inp_text inp_from">

                                                    <label htmlFor="address" className="form-label">Address</label>
                                                    <input type="text" name="address" onChange={handleChange}
                                                        onBlur={handleBlur} value={values.address}
                                                        placeholder="Enter Address" className="form-control"/>
                                                    <p className='error'>
                                                        {errors.address && touched.address && errors.address}
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="form-group def_inp_text inp_from">
                                                    <label htmlFor="state" className="form-label">State</label>
                                                    <input type="text" name="state" onChange={handleChange}
                                                        onBlur={handleBlur} value={values.state}
                                                        placeholder="Enter State " className="form-control"
                                                    />
                                                     <p className='error'>
                                                         {errors.state && touched.state && errors.state}
                                                         </p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={6}>
                                                <div className="form-group def_inp_text inp_from">

                                                    <label htmlFor="city" className="form-label">city</label>
                                                    <input type="text" name="city" onChange={handleChange}
                                                        onBlur={handleBlur} value={values.address}
                                                        placeholder="Enter city" className="form-control"/>
                                                    <p className='error'>
                                                        {errors.city && touched.city && errors.city}
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="form-group def_inp_text inp_from">
                                                    <label htmlFor="zipcode" className="form-label">Zip Code</label>
                                                    <input type="text" name="zipcode" onChange={handleChange}
                                                        onBlur={handleBlur} value={values.state}
                                                        placeholder="Enter Zip code" className="form-control"
                                                    />
                                                     <p className='error'>
                                                         {errors.zipcode && touched.zipcode && errors.zipcode}
                                                         </p>
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col sm={12}>
                                          
                                                <div className='def_from_btn'>
                                                    <button type="submit" disabled={isSubmitting}
                                                            className="def_btn">Checkout
                                                    </button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </form>
                                )}
                            </Formik>
                        </Container>
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
