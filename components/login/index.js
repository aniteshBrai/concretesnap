import React from 'react';
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap'
import {Formik } from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';


const schema = Yup.object().shape({
    email: Yup.string().required().email('Invalid email format'),
    password: Yup.string().required().min(8, 'Password must be at least 8 characters'),    
  });

const index = () => {
    return <div>
        <Container>
        <h1>Login Form</h1>
        <Formik
            validationSchema={schema}
            initialValues={{email: '', password: ''}}
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
                  isvalid
                  /* and other goodies */
              }) => (
                <form noValidate onSubmit={handleSubmit}>

                        <Row>
                            <Col sm={12}>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder="Enter email id / username"
                                    className="form-control"  
                                    id="email"                                 
                                />
                                {errors.email && touched.email && errors.email}                                
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={12}>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder="Enter password"
                                    className="form-control"
                                />
                                {errors.password && touched.password && errors.password}
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
    </div>;
};

export default index;
