import React, { useState } from 'react';
import searchopt from '../../assets/images/searchopt.png'; 
import projectbannerimg  from '../../assets/images/projectbanner.png';
import project1pic from '../../assets/images/project1.png';
import project2pic from '../../assets/images/project2.png';
import project3pic from '../../assets/images/project3.png'; 
import doted_pic from '../../assets/images/doted.png'; 
import {Container,Row,Col,Navbar,Nav, Modal,Button} from 'react-bootstrap'

import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({    
  project_name: Yup.string().required(), 
  customer_name: Yup.string().required(), 
  email_address: Yup.string().required().email('Invalid email format'),     
  phone_number: Yup.string().required(),
  customer_address: Yup.string().required(), 
  customer_state: Yup.string().required(),     
  customer_city: Yup.string().required(),     
  customer_zip_code: Yup.string().required(), 

  billing_name: Yup.string().required(), 
  company_name: Yup.string().required(), 
  billing_number: Yup.string().required(),
  billing_address: Yup.string().required(), 
  billing_state: Yup.string().required(),     
  billing_city: Yup.string().required(),     
  billing_zip_code: Yup.string().required(), 
  
  
});

const index = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                  <div className='product_search_option' > 
                        <div className='search_filter'>
                            <button type="submit">
                              <img src={searchopt.src}  alt="search" />
                            </button>
                            <input type="text" name="" placeholder="Search for projects"className="form-control"/>
                        </div>
                        <div className='addprod'>
                            
                            <div className='def_from_btn'>
                              <Button className='def_btn' onClick={handleShow}>
                                  Add New Project
                              </Button>
                            </div>
                        </div>
                  </div>
                <div className='pricingplan_wrap product_wrap nopadding'>
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


                {/* Mobel */}

                  <Modal show={show} onHide={handleClose} className="def_from_content">
                    <Modal.Header closeButton>
                      <Modal.Title>Add New Project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    <div className='from_contentblock modf_cont_block from_width_lg'>
                        <Container>
                         
                            <Formik
                                validationSchema={schema}
                                initialValues={{
                                  
                                    project_name: '',
                                    customer_name: '',
                                    email_address: '',    
                                    phone_number: '',
                                    customer_address: '', 
                                    customer_state: '',    
                                    customer_city: '',   
                                    customer_zip_code: '',
                                  
                                    billing_name: '',
                                    company_name: '',
                                    billing_number: '',
                                    billing_address: '',
                                    billing_state: '',   
                                    billing_city: '',     
                                    billing_zip_code: '',
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
                                            <Col sm={12}>
                                              <h2 className='from_title2'>Project Info</h2>
                                          </Col>
                                          <Col sm={6}>
                                                <div className="form-group def_inp_text inp_from">
                                                    <label htmlFor="text" className="form-label">Project Name*</label>
                                                    <input type="text" name="project_name" onChange={handleChange} onBlur={handleBlur}
                                                        value={values.project_name} placeholder="Enter Project Name*"
                                                        className="form-control"/>
                                                    <p className='error'>
                                                        {errors.project_name && touched.project_name && errors.project_name}
                                                    </p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                              <Col sm={12}>
                                                <h2 className='from_title2'>Customer Info</h2>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="form-group def_inp_text inp_from">
                                                    <label htmlFor="text" className="form-label">Name**</label>
                                                    <input type="text" name="customer_name" onChange={handleChange} onBlur={handleBlur}
                                                        value={values.customer_name} placeholder="Enter Your Name*"
                                                        className="form-control"/>
                                                    <p className='error'>
                                                        {errors.customer_name && touched.customer_name && errors.customer_name}
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="form-group def_inp_text inp_from">
                                                    <label htmlFor="email" className="form-label">Email Address*</label>
                                                    <input type="email" name="email_address" onChange={handleChange} onBlur={handleBlur}
                                                        value={values.email_address} placeholder="Enter email Name*"
                                                        className="form-control"/>
                                                    <p className='error'>
                                                        {errors.email_address && touched.email_address && errors.email_address}
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="form-group def_inp_text inp_from">
                                                    <label htmlFor="phone_number" className="form-label">Phone Number*</label>
                                                    <input type="email" name="phone_number" onChange={handleChange} onBlur={handleBlur}
                                                        value={values.phone_number} placeholder="Enter email Name*"
                                                        className="form-control"/>
                                                    <p className='error'>
                                                        {errors.phone_number && touched.phone_number && errors.phone_number}
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="form-group def_inp_text inp_from">
                                                    <label htmlFor="customer_address" className="form-label">Address*</label>
                                                    <input type="email" name="customer_address" onChange={handleChange} onBlur={handleBlur}
                                                        value={values.customer_address} placeholder="Enter Your Address*"
                                                        className="form-control"/>
                                                    <p className='error'>
                                                        {errors.customer_address && touched.customer_address && errors.customer_address}
                                                    </p>
                                                </div>
                                            </Col>

                                            <Col sm={6}>
                                                <div className="form-group def_inp_text inp_from">
                                                    <label htmlFor="customer_state" className="form-label">State*</label>
                                                    <input type="email" name="customer_state" onChange={handleChange} onBlur={handleBlur}
                                                        value={values.customer_state} placeholder="Enter Your State*"
                                                        className="form-control"/>
                                                    <p className='error'>
                                                        {errors.customer_state && touched.customer_state && errors.customer_state}
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="form-group def_inp_text inp_from">
                                                    <label htmlFor="customer_city" className="form-label">City*</label>
                                                    <input type="email" name="customer_city" onChange={handleChange} onBlur={handleBlur}
                                                        value={values.customer_state} placeholder="Enter Your City*"
                                                        className="form-control"/>
                                                    <p className='error'>
                                                        {errors.customer_city && touched.customer_city && errors.customer_city}
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="form-group def_inp_text inp_from">
                                                    <label htmlFor="customer_zip_code" className="form-label">zip code*</label>
                                                    <input type="email" name="customer_zip_code" onChange={handleChange} onBlur={handleBlur}
                                                        value={values.customer_state} placeholder="Enter zip code*"
                                                        className="form-control"/>
                                                    <p className='error'>
                                                        {errors.customer_zip_code && touched.customer_zip_code && errors.customer_zip_code}
                                                    </p>
                                                </div>
                                            </Col>
                                        </Row>
                                       

                                        <Row>
                                              <Col sm={12}>
                                                <h2 className='from_title2'>Billing Info</h2>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="form-group def_inp_text inp_from">
                                                    <label htmlFor="text" className="form-label">Billing Name**</label>
                                                    <input type="text" name="billing_name" onChange={handleChange} onBlur={handleBlur}
                                                        value={values.customer_name} placeholder="Enter Billing Name*"
                                                        className="form-control"/>
                                                    <p className='error'>
                                                        {errors.billing_name && touched.billing_name && errors.billing_name}
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="form-group def_inp_text inp_from">
                                                    <label htmlFor="company_name" className="form-label">Company Name*</label>
                                                    <input type="text" name="company_name" onChange={handleChange} onBlur={handleBlur}
                                                        value={values.company_name} placeholder="Enter Company Name*"
                                                        className="form-control"/>
                                                    <p className='error'>
                                                        {errors.company_name && touched.company_name && errors.company_name}
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="form-group def_inp_text inp_from">
                                                    <label htmlFor="billing_number" className="form-label">Billing Phone*</label>
                                                    <input type="email" name="billing_number" onChange={handleChange} onBlur={handleBlur}
                                                        value={values.billing_number} placeholder="Enter Billing Phone*"
                                                        className="form-control"/>
                                                    <p className='error'>
                                                        {errors.billing_number && touched.billing_number && errors.billing_number}
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="form-group def_inp_text inp_from">
                                                    <label htmlFor="billing_address" className="form-label">Billing Address*</label>
                                                    <input type="email" name="billing_address" onChange={handleChange} onBlur={handleBlur}
                                                        value={values.billing_address} placeholder="Enter  Address*"
                                                        className="form-control"/>
                                                    <p className='error'>
                                                        {errors.billing_address && touched.billing_address && errors.billing_address}
                                                    </p>
                                                </div>
                                            </Col>

                                            <Col sm={6}>
                                                <div className="form-group def_inp_text inp_from">
                                                    <label htmlFor="billing_state" className="form-label">Billing State*</label>
                                                    <input type="email" name="billing_state" onChange={handleChange} onBlur={handleBlur}
                                                        value={values.billing_state} placeholder="Enter  State*"
                                                        className="form-control"/>
                                                    <p className='error'>
                                                        {errors.billing_state && touched.billing_state && errors.billing_state}
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="form-group def_inp_text inp_from">
                                                    <label htmlFor="billing_city" className="form-label">Billing City*</label>
                                                    <input type="email" name="billing_city" onChange={handleChange} onBlur={handleBlur}
                                                        value={values.billing_city} placeholder="Enter  City*"
                                                        className="form-control"/>
                                                    <p className='error'>
                                                        {errors.billing_city && touched.billing_city && errors.billing_city}
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="form-group def_inp_text inp_from">
                                                    <label htmlFor="billing_zip_code" className="form-label">Billing zip code*</label>
                                                    <input type="email" name="billing_zip_code" onChange={handleChange} onBlur={handleBlur}
                                                        value={values.customer_state} placeholder="Enter  zip code*"
                                                        className="form-control"/>
                                                    <p className='error'>
                                                        {errors.billing_zip_code && touched.billing_zip_code && errors.billing_zip_code}
                                                    </p>
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                              <Col sm={12}>
                                              <div className='def_from_btn popupbtn'>
                                                    <button type="button" onClick={handleClose}
                                                            className="def_btn2">Cancel
                                                    </button>
                                                    <button type="submit" disabled={isSubmitting}
                                                            className="def_btn">Save Changes
                                                    </button>

                                                    {/* <Button variant="secondary" onClick={handleClose}>
                                                      Close
                                                    </Button>
                                                    <Button disabled={isSubmitting}
                                                            className="def_btn" onClick={handleClose}>
                                                      Save Changes
                                                    </Button> */}
                                                </div>
                                            </Col>
                                        </Row>
                                       
                                    </form>
                                )}
                            </Formik>
                        </Container>
                    </div>


                    </Modal.Body>
                    {/* <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Save Changes
                      </Button>
                    </Modal.Footer> */}
                  </Modal>


                </Col>
              </Row>
            </Container>
          </div>
        </div>

    </>
  );
};

export default index;
