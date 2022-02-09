import React from 'react';
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap';
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({    
    name: Yup.string().required(),    
    email_address: Yup.string().required().email('Invalid email format'),
    subject: Yup.string().required(),
    message: Yup.string().required(),    
  });

const form = () => {
    return <div>
        <Container>
            <h1>Send us Message</h1>
            <Formik
                validationSchema={schema}
                initialValues={{
                    name: '',
                    email_address: '',
                    subject: '',
                    message: ''
                }}
                validate={values => {
                    const errors = {};
                    /*if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }*/
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
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" name="name" onChange={handleChange} onBlur={handleBlur}
                                           value={values.name} placeholder="Enter Name" className="form-control"/>
                                    {errors.name && touched.name && errors.name}
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="form-group">
                                    <label htmlFor="email_address" className="form-label">Email Address</label>
                                    <input type="email" name="email_address" onChange={handleChange}
                                        onBlur={handleBlur} value={values.email_address}
                                        placeholder="Enter email address" className="form-control"
                                    />
                                    {errors.email_address && touched.email_address && errors.email_address}
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={6}>
                                <div className="form-group">
                                    <label htmlFor="subject" className="form-label">Subject</label>
                                    <input type="text" name="subject" onChange={handleChange}
                                        onBlur={handleBlur} value={values.subject}
                                        placeholder="Enter Subject" className="form-control"
                                    />
                                    {errors.subject && touched.subject && errors.subject}
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <Field name="message" as="textarea" className="form-control"
                                           onChange={handleChange}
                                           onBlur={handleBlur} value={values.message}/>
                                    {errors.message && touched.message && errors.message}
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={6}>
                                <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                    Submit
                                </button>
                            </Col>
                        </Row>
                    </form>
                )}
            </Formik>
        </Container>
    </div>;
};

export default form;
