import React from 'react';
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap';
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({    
    old_password: Yup.string().required().min(8, 'Password must be at least 8 characters'),
    new_password: Yup.string().required().min(8, 'Password must be at least 8 characters'),
    confirm_password: Yup.string().required().min(8, 'Password must be at least 8 characters')
    .oneOf([Yup.ref('new_password')], 'Confirm Passwords must match New Password')    
  });

const index = () => {
    return <div>
        <Container>
            <h1>Change Password</h1>
            <Formik
                validationSchema={schema}
                initialValues={{
                    old_password: '',
                    new_password: '',
                    confirm_password: ''
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
                                    <label htmlFor="old_password" className="form-label">Old assword</label>
                                    <input
                                        type="password"
                                        name="old_password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.old_password}
                                        placeholder="Enter Old password"
                                        className="form-control"
                                    />
                                    {errors.old_password && touched.old_password && errors.old_password}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <div className="form-group">
                                    <label htmlFor="new_password" className="form-label">New Password</label>
                                    <input
                                        type="password"
                                        name="new_password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.new_password}
                                        placeholder="Enter New password"
                                        className="form-control"
                                    />
                                    {errors.new_password && touched.new_password && errors.new_password}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <div className="form-group">

                                    <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                                    <input
                                        type="password"
                                        name="confirm_password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.confirm_password}
                                        placeholder="Enter Confirm Password"
                                        className="form-control"
                                    />
                                    {errors.confirm_password && touched.confirm_password && errors.confirm_password}
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
