import React from 'react';
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap';
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({    
    email: Yup.string().required().email('Invalid email format'),    
  });

import loginbanner  from '../../assets/images/loginbanner.png';

const index = () => {
    return (
    <>
           <div className='banner_add innerbanner'> 
                <div className='banner_panel'  style={{ backgroundImage: `url("${loginbanner.src}")` }} >
                    <Container>
                    <Row>
                        <Col sm={12}>
                            <div className='banner_cont'>
                                <h2><span>FORGOT PASSWORD</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit,</p>
                            </div>
                        </Col>
                    </Row>
                    </Container>   
                </div>
            </div>

        <Container>
            <h1>Forgot Password</h1>
            <Formik
                validationSchema={schema}
                initialValues={{
                    email: ''
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
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" name="email" onChange={handleChange}
                                        onBlur={handleBlur} value={values.email}
                                        placeholder="Enter email id / username" className="form-control"/>
                                    {errors.email && touched.email && errors.email}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                    Submit
                                </button>
                            </Col>
                        </Row>
                    </form>
                )}
            </Formik>
        </Container>
    </>);
};

export default index;
