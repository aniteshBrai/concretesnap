import React from 'react';
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap'

import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';

import profileBanner1  from '../../assets/images/profile_banner1.png';


const schema = Yup.object().shape({    
    first_name: Yup.string().required(), 
    last_name: Yup.string().required(),
    email_address: Yup.string().required().email('Invalid email format'),     
    phone_number: Yup.string().required(),    
  });



const index = () => {
    return (
        <>
          <div className='banner_add innerbanner'>
                <div className='banner_panel'  style={{ backgroundImage: `url("${profileBanner1.src}")` }} >
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <div className='banner_cont'>
                                    <h2><span>ACCOUNT PROFILE</span></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit,</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
        </div>
            <div className='main_content_wrap fromdetails'>
                <div className='main_content_block'>
                    <div className='from_contentblock modf_cont_block from_width_lg'>
                        <Container>
                            {/* <h1>Profile Home Owner</h1> */}

                            <h2 className='from_title'>Edit Profile</h2>
                            <p className='inp_desc_cont'>Lorem ipsum dolor sit amet,consectetur</p>
                            <Formik
                                validationSchema={schema}
                                initialValues={{
                                    first_name: '',
                                    last_name: '',
                                    email_address: '',
                                    phone_number: ''
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

                                                    <label htmlFor="email_address" className="form-label">Email Address</label>
                                                    <input type="email" name="email_address" onChange={handleChange}
                                                        onBlur={handleBlur} value={values.email_address}
                                                        placeholder="Enter email address" className="form-control"/>
                                                    <p className='error'>
                                                        {errors.email_address && touched.email_address && errors.email_address}
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="form-group def_inp_text inp_from">
                                                    <label htmlFor="phone_number" className="form-label">Phone Number</label>
                                                    <input type="text" name="phone_number" onChange={handleChange}
                                                        onBlur={handleBlur} value={values.phone_number}
                                                        placeholder="Enter Phone Number" className="form-control"
                                                    />
                                                     <p className='error'>
                                                         {errors.phone_number && touched.phone_number && errors.phone_number}
                                                         </p>
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col sm={12}>
                                          
                                                <div className='def_from_btn'>
                                                    <button type="submit" disabled={isSubmitting}
                                                            className="def_btn">Update Profile
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
        </>
    );
};

export default index;
