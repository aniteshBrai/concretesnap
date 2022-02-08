import React from 'react';
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap'
import {Formik, Field, Form} from 'formik';


const index = () => {
    return <div>
        <Container>
            <h1>Profile Home Owner</h1>
            <Formik
                initialValues={{
                    first_name: '',
                    last_name: '',
                    email_address: '',
                    phone_number: ''
                }}
                validate={values => {
                    const errors = {};
                    if (!values.email_address) {
                        errors.email_address = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email_address)
                    ) {
                        errors.email = 'Invalid email address';
                    }
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
                                <div className="form-group">
                                    <label htmlFor="email" classname="form-label">First Name</label>
                                    <input type="text" name="first_name" onChange={handleChange} onBlur={handleBlur}
                                           value={values.first_name} placeholder="Enter First Name"
                                           className="form-control"/>
                                    {errors.first_name && touched.first_name && errors.first_name}
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="form-group">
                                    <label htmlFor="email" classname="form-label">Last Name</label>
                                    <input type="text" name="last_name" onChange={handleChange} onBlur={handleBlur}
                                           value={values.last_name} placeholder="Enter Last Name"
                                           className="form-control"/>
                                    {errors.last_name && touched.last_name && errors.last_name}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <div className="form-group">

                                    <label htmlFor="email_address" classname="form-label">Email Address</label>
                                    <input type="email" name="email_address" onChange={handleChange}
                                           onBlur={handleBlur} value={values.email_address}
                                           placeholder="Enter email address" className="form-control"/>
                                    {errors.email_address && touched.email_address && errors.email_address}
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="form-group">
                                    <label htmlFor="phone_number" classname="form-label">Phone Number</label>
                                    <input type="text" name="phone_number" onChange={handleChange}
                                           onBlur={handleBlur} value={values.phone_number}
                                           placeholder="Enter Phone Number" className="form-control"
                                    />
                                    {errors.phone_number && touched.phone_number && errors.phone_number}
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
    </div>
        ;
};

export default index;
