import React from 'react';
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap'
import {Formik} from 'formik';

const index = () => {
    return <div>
        <Container>
        <h1>Login Form</h1>
        <Formik
            initialValues={{email: '', password: ''}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
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
                            <Col sm={12}>
                            <div className="form-group">
                                <label htmlFor="email" classname="form-label">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder="Enter email id / username"
                                    className="form-control"
                                />
                                {errors.email && touched.email && errors.email}
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={12}>
                            <div className="form-group">
                                <label htmlFor="email" classname="form-label">Password</label>
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
