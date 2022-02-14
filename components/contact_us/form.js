import React from 'react';
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap';
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { contactUs } from "../../store/actions/contactUs";

const schema = Yup.object().shape({    
    name: Yup.string().required('Name is a required field'),    
    email_address: Yup.string().required('Email is a required field').email('Invalid email format'),
    subject: Yup.string().required('Subject is a required field'),
    message: Yup.string().required('Message is a required field'),    
  });

const form = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    return <div>
        <Container>
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
                onSubmit={(values) => {
                    const { name, email_address, subject, message } = values;
                    dispatch(contactUs({ name, email_address, subject, message }));
                }}

                // onSubmit={(values, {setSubmitting}) => {
                //     setTimeout(() => {
                //         alert(JSON.stringify(values, null, 2));
                //         setSubmitting(false);
                //     }, 400);
                // }}
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

                        {/* <Row>
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
                        </Row> */}


                        <Row>
                            <Col md={12}>
                                <div className='from_contentblock contactinfo'>
                                    <h2 className='from_title' >Send Us Message</h2>
                                    <div className='contact_from' >
                                        <div className='from_row'>
                                        <div className='inp_from'>
                                                    <input type="text" name="name" onChange={handleChange} onBlur={handleBlur}
                                                        value={values.name} placeholder="Enter Name" className="form-control inp_text"/>
                                            <p className='error'> {errors.name && touched.name && errors.name}</p>

                                        </div>
                                        <div className='inp_from'>
                                                <input type="email" name="email_address" onChange={handleChange}
                                                        onBlur={handleBlur} value={values.email_address}
                                                        placeholder="Enter email address" className="form-control inp_text"
                                                    />
                                            <p className='error'> {errors.email_address && touched.email_address && errors.email_address}</p>

                                        </div>
                                        <div className='inp_from'>
                                                    <input type="text" name="subject" onChange={handleChange}
                                                        onBlur={handleBlur} value={values.subject}
                                                        placeholder="Enter Subject" className="form-control inp_text"
                                                    />
                                            <p className='error'>{errors.subject && touched.subject && errors.subject}</p>
                                        </div>
                                        </div>
                                        <div className='from_row'>
                                        <div className='inp_from2 textareainfo'>
                                            {/* <textarea value='' placeholder='Your Message*' className='inp_text '  /> */}
                                                    <Field name="message" as="textarea" className="form-control inp_text"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur} value={values.message}/>
                                            <p className='error'>{errors.message && touched.message && errors.message}</p>
                                        </div>
                                        </div>
                                        <div className='def_from_btn'>
                                            {/* <input type="submit" value="Send" className='def_btn' /> */}
                                            <button type="submit" disabled={isSubmitting} className="def_btn">
                                                    Submit
                                                </button>
                                        </div>

    
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </form>
                )}
            </Formik>
        </Container>
    </div>;
};

export default form;
