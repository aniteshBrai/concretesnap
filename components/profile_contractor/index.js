import React from 'react';
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({    
    business_name: Yup.string().required(), 
    website: Yup.string().required(),
    email_address: Yup.string().required().email('Invalid email format'),     
    phone_number: Yup.string().required(),    
    business_address: Yup.string().required(),
    state: Yup.string().required(),
    city: Yup.string().required(),
    zip_code: Yup.string().required(),    
    brand_color: Yup.string().required(),    
    currency: Yup.string().required(),
  });


const index = () => {
    return <div>
        <Container>
            <h1>Profile Controctor</h1>
            <Formik
                validationSchema={schema}
                initialValues={{
                    business_name: '',
                    website: '',
                    email_address: '',
                    phone_number: '',
                    business_address: '',
                    state: '',
                    city: '',
                    zip_code: '',
                    brand_color:'',
                    currency:''
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
                                <div className="form-group">
                                    <label htmlFor="business_name" className="form-label">Business Name</label>
                                    <input type="text" name="business_name" onChange={handleChange} onBlur={handleBlur}
                                           value={values.business_name} placeholder="Enter Business Name"
                                           className="form-control"/>
                                    {errors.business_name && touched.business_name && errors.business_name}
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="form-group">
                                    <label htmlFor="phone_number" className="form-label">Phone Number</label>
                                    <input type="text" name="phone_number" onChange={handleChange} onBlur={handleBlur}
                                           value={values.phone_number} placeholder="Enter Phone Number"
                                           className="form-control"/>
                                    {errors.phone_number && touched.phone_number && errors.phone_number}
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={6}>
                                <div className="form-group">
                                    <label htmlFor="email_address" className="form-label">Email Address</label>
                                    <input type="email" name="email_address" onChange={handleChange} onBlur={handleBlur}
                                           value={values.email_address} placeholder="Enter email address"
                                           className="form-control"/>
                                    {errors.email_address && touched.email_address && errors.email_address}
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="form-group">
                                    <label htmlFor="business_address" className="form-label">Business Address</label>
                                    <input type="text" name="business_address" onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.business_address} placeholder="Enter Business Address"
                                           className="form-control"/>
                                    {errors.business_address && touched.business_address && errors.business_address}
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={6}>
                                <div className="form-group">
                                    <label htmlFor="state" className="form-label">Color</label>
                                    <select name="state" value={values.state} onChange={handleChange}
                                            onBlur={handleBlur} className="form-control">
                                        <option value="" label="Select a state"/>
                                        <option value="WB" label="WB"/>
                                        <option value="Jharkhand" label="Jharkhand"/>
                                        <option value="Bihar" label="Bihar"/>
                                    </select>
                                    {errors.state && touched.state &&
                                    <div className="input-feedback">{errors.state}</div>}
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="form-group">
                                    <label htmlFor="city" className="form-label">City</label>
                                    <input type="text" name="city" onChange={handleChange} onBlur={handleBlur}
                                           value={values.city} placeholder="Enter City" 
                                           className="form-control"/>
                                    {errors.city && touched.city && errors.city}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <div className="form-group">
                                    <label htmlFor="zip_code" className="form-label">Zip Code</label>
                                    <input type="text" name="zip_code" onChange={handleChange} onBlur={handleBlur}
                                           value={values.zip_code} placeholder="Enter Zip Code" 
                                           className="form-control"/>
                                    {errors.zip_code && touched.zip_code && errors.zip_code}
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="form-group">
                                    <label htmlFor="brand_color" className="form-label">Brand Color</label>
                                    <input type="text" name="brand_color" onChange={handleChange} onBlur={handleBlur}
                                           value={values.brand_color} placeholder="Enter Brand Color" 
                                           className="form-control"/>
                                    {errors.brand_color && touched.brand_color && errors.brand_color}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <div className="form-group">
                                    <label htmlFor="currency" className="form-label">Currency</label>
                                    <select name="currency" value={values.currency} onChange={handleChange}
                                            onBlur={handleBlur} className="form-control">
                                        <option value="" label="Select a currency"/>
                                        <option value="Dolar" label="Dolar"/>
                                        <option value="Rs" label="Rs"/>
                                        <option value="Taka" label="Taka"/>
                                    </select>
                                    {errors.currency && touched.currency &&
                                    <div className="input-feedback">{errors.currency}</div>}
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
