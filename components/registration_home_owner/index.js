import React from 'react';
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap'
import {Formik, Field, Form} from 'formik';
import { useState } from "react";
import * as Yup from 'yup';




const index = () => {

    // const [show, setShow] = true;
    const [show, setDivHandler] = useState(1);
    const typeChange=(par) => setDivHandler(!show);

    const schema = Yup.object().shape({    
        register_as: Yup.string().required(), 
        first_name: Yup.string().required(),
        last_name: Yup.string().required(),
        email_address: Yup.string().required().email('Invalid email format'),
        confirm_email_address: Yup.string().required().email('Invalid email format')
                                  .oneOf([Yup.ref('email_address')], 'Confirm email address must match email address'),
        password: Yup.string().required().min(8, 'Password must be at least 8 characters'),
        confirm_password: Yup.string().required().min(8, 'Password must be at least 8 characters')
                             .oneOf([Yup.ref('password')], 'Confirm Passwords must match New Password'),
        phone_number: Yup.string().required(),    
      });

    
    if(show==0)  
    {
        const schema = Yup.object().shape({    
            register_as: Yup.string().required(), 
            business_name: Yup.string().required(),            
            state: Yup.string().required(),            
            city: Yup.string().required(),            
            zip_code: Yup.string().required()                    
          }); 
    }

    return <div>
        <Container>
            <h1>Register</h1>
            <Formik
                validationSchema={schema}                
                initialValues={{
                    register_as: '1',
                    first_name: '',
                    last_name: '',
                    email_address: '',
                    confirm_email_address: '',
                    password: '',
                    confirm_password: '',
                    phone_number: ''
                }/*:{
                    register_as: '0',
                    business_name: '',
                    phone_number: '',                   
                    email_address: '',
                    confirm_email_address: '',
                    password: '',
                    confirm_password: '',
                    business_address:'',
                    state:'',
                    city:'',
                    zip_code:''                    
                }*/}
                validate={values => {
                    const errors = {};
                    return errors;
                }}
                enableReinitialize

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
                                    <div id="my-radio-group">Register As</div>
                                    <div role="group" aria-labelledby="my-radio-group" onChange={()=>{typeChange(values.register_as)}}>
                                        <label>
                                            <Field type="radio" name="register_as"
                                                   value="0"/>
                                            Contractor
                                        </label>
                                        <label>
                                            <Field type="radio" name="register_as"
                                                   value="1" />
                                            Home owner
                                        </label>
                                        {/* <div>Register As: {values.register_as} {JSON.stringify(show)}</div> */}
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        {show? <div>
                            <Row>
                                <Col sm={6}>
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">First Name</label>
                                        <input type="text" name="first_name" onChange={handleChange} onBlur={handleBlur}
                                               value={values.first_name} placeholder="Enter First Name"
                                               className="form-control"/>
                                        {errors.first_name && touched.first_name && errors.first_name}
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">Last Name</label>
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
                                        <label htmlFor="email_address" className="form-label">Email Address</label>
                                        <input
                                            type="email"
                                            name="email_address"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email_address}
                                            placeholder="Enter email address`"
                                            className="form-control"
                                        />
                                        {errors.email_address && touched.email_address && errors.email_address}
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="form-group">
                                        <label htmlFor="confirm_email_address" className="form-label">Confirm Email
                                            Address</label>
                                        <input
                                            type="email"
                                            name="confirm_email_address"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.confirm_email_address}
                                            placeholder="Confirm email address"
                                            className="form-control"
                                        />
                                        {errors.confirm_email_address && touched.confirm_email_address && errors.confirm_email_address}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
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
                                <Col sm={6}>
                                    <div className="form-group">
                                        <label htmlFor="confirm_password" className="form-label">Confirm
                                            Password</label>
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
                                <Col sm={6}>
                                    <div className="form-group">
                                        <label htmlFor="phone_number" className="form-label">Phone Number</label>
                                        <input
                                            type="text"
                                            name="phone_number"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.phone_number}
                                            placeholder="Enter Phone Number"
                                            className="form-control"
                                        />
                                        {errors.phone_number && touched.phone_number && errors.phone_number}
                                    </div>
                                </Col>
                            </Row>
                        </div>:<div>
                            <Row>
                                <Col sm={6}>
                                    <div className="form-group">
                                        <label htmlFor="business_name" className="form-label">Business Name</label>
                                        <input type="text" name="business_name" onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.business_name} placeholder="Enter Business Name"
                                               className="form-control"/>
                                        {errors.business_name && touched.business_name && errors.business_name}
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="form-group">

                                        <label htmlFor="phone_number" className="form-label">Phone Number</label>
                                        <input type="text" name="phone_number" onChange={handleChange}
                                               onBlur={handleBlur}
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
                                        <input type="email" name="email_address" onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.email_address} placeholder="Enter email address"
                                               className="form-control"/>
                                        {errors.email_address && touched.email_address && errors.email_address}
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="form-group">

                                        <label htmlFor="confirm_email_address" className="form-label">Confirm Email
                                            Address</label>
                                        <input type="email" name="confirm_email_address" onChange={handleChange}
                                               onBlur={handleBlur} value={values.confirm_email_address}
                                               placeholder="Confirm email address" className="form-control"/>
                                        {errors.confirm_email_address && touched.confirm_email_address && errors.confirm_email_address}
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={6}>
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">Password</label>
                                        <input type="password" name="password" onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.password} placeholder="Enter password"
                                               className="form-control"/>
                                        {errors.password && touched.password && errors.password}
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="form-group">
                                        <label htmlFor="confirm_password" className="form-label">Confirm
                                            Password</label>
                                        <input type="password" name="confirm_password" onChange={handleChange}
                                               onBlur={handleBlur} value={values.confirm_password}
                                               placeholder="Enter Confirm Password" className="form-control"/>
                                        {errors.confirm_password && touched.confirm_password && errors.confirm_password}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <div className="form-group">
                                        <label htmlFor="business_address" className="form-label">Business
                                            Address</label>
                                        <input type="text" name="business_address" onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.business_address} placeholder="Enter Business Address"
                                                className="form-control"/>
                                        {errors.business_address && touched.business_address && errors.business_address}
                                    </div>
                                </Col>

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
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <div className="form-group">

                                        <label htmlFor="city" className="form-label">City</label>
                                        <input type="text" name="city" onChange={handleChange} onBlur={handleBlur}
                                               value={values.city} placeholder="Enter City"
                                               className="form-control"/>
                                        {errors.city && touched.city && errors.city}
                                    </div>
                                </Col>

                                <Col sm={6}>
                                    <div className="form-group">
                                        <label htmlFor="zip_code" className="form-label">Zip Code</label>
                                        <input type="text" name="zip_code" onChange={handleChange} onBlur={handleBlur}
                                               value={values.zip_code} placeholder="Enter Zip Code"
                                               className="form-control"/>
                                        {errors.zip_code && touched.zip_code && errors.zip_code}
                                    </div>
                                </Col>
                            </Row>
                        </div>}

                        {/* <div style={{ display: show==0 ? "none" : "block" }}>
                            <Row>
                                <Col sm={6}>
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">First Name</label>
                                        <input type="text" name="first_name" onChange={handleChange} onBlur={handleBlur}
                                               value={values.first_name} placeholder="Enter First Name"
                                               className="form-control"/>
                                        {errors.first_name && touched.first_name && errors.first_name}
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">Last Name</label>
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
                                        <label htmlFor="email_address" className="form-label">Email Address</label>
                                        <input
                                            type="email"
                                            name="email_address"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email_address}
                                            placeholder="Enter email address`"
                                            className="form-control"
                                        />
                                        {errors.email_address && touched.email_address && errors.email_address}
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="form-group">
                                        <label htmlFor="confirm_email_address" className="form-label">Confirm Email
                                            Address</label>
                                        <input
                                            type="email"
                                            name="confirm_email_address"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.confirm_email_address}
                                            placeholder="Confirm email address"
                                            className="form-control"
                                        />
                                        {errors.confirm_email_address && touched.confirm_email_address && errors.confirm_email_address}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
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
                                <Col sm={6}>
                                    <div className="form-group">
                                        <label htmlFor="confirm_password" className="form-label">Confirm
                                            Password</label>
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
                                <Col sm={6}>
                                    <div className="form-group">
                                        <label htmlFor="phone_number" className="form-label">Phone Number</label>
                                        <input
                                            type="text"
                                            name="phone_number"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.phone_number}
                                            placeholder="Enter Phone Number"
                                            className="form-control"
                                        />
                                        {errors.phone_number && touched.phone_number && errors.phone_number}
                                    </div>
                                </Col>
                            </Row>
                        </div> */}


                        {/* contractor registration form start */}

                        {/* <div style={{ display: show==0 ? "block" : "none" }}>
                            <Row>
                                <Col sm={6}>
                                    <div className="form-group">
                                        <label htmlFor="business_name" className="form-label">Business Name</label>
                                        <input type="text" name="business_name" onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.business_name} placeholder="Enter Business Name"
                                               className="form-control"/>
                                        {errors.business_name && touched.business_name && errors.business_name}
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="form-group">

                                        <label htmlFor="phone_number" className="form-label">Phone Number</label>
                                        <input type="text" name="phone_number" onChange={handleChange}
                                               onBlur={handleBlur}
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
                                        <input type="email" name="email_address" onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.email_address} placeholder="Enter email address"
                                               className="form-control"/>
                                        {errors.email_address && touched.email_address && errors.email_address}
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="form-group">

                                        <label htmlFor="confirm_email_address" className="form-label">Confirm Email
                                            Address</label>
                                        <input type="email" name="confirm_email_address" onChange={handleChange}
                                               onBlur={handleBlur} value={values.confirm_email_address}
                                               placeholder="Confirm email address" className="form-control"/>
                                        {errors.confirm_email_address && touched.confirm_email_address && errors.confirm_email_address}
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={6}>
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">Password</label>
                                        <input type="password" name="password" onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.password} placeholder="Enter password"
                                               className="form-control"/>
                                        {errors.password && touched.password && errors.password}
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="form-group">
                                        <label htmlFor="confirm_password" className="form-label">Confirm
                                            Password</label>
                                        <input type="password" name="confirm_password" onChange={handleChange}
                                               onBlur={handleBlur} value={values.confirm_password}
                                               placeholder="Enter Confirm Password" className="form-control"/>
                                        {errors.confirm_password && touched.confirm_password && errors.confirm_password}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <div className="form-group">
                                        <label htmlFor="business_address" className="form-label">Business
                                            Address</label>
                                        <input type="text" name="business_address" onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.business_address} placeholder="Enter Business Address"
                                               required className="form-control"/>
                                        {errors.business_address && touched.business_address && errors.business_address}
                                    </div>
                                </Col>

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
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <div className="form-group">

                                        <label htmlFor="city" className="form-label">City</label>
                                        <input type="text" name="city" onChange={handleChange} onBlur={handleBlur}
                                               value={values.city} placeholder="Enter City" required
                                               className="form-control"/>
                                        {errors.city && touched.city && errors.city}
                                    </div>
                                </Col>

                                <Col sm={6}>
                                    <div className="form-group">
                                        <label htmlFor="zip_code" className="form-label">Zip Code</label>
                                        <input type="text" name="zip_code" onChange={handleChange} onBlur={handleBlur}
                                               value={values.zip_code} placeholder="Enter Zip Code" required
                                               className="form-control"/>
                                        {errors.zip_code && touched.zip_code && errors.zip_code}
                                    </div>
                                </Col>
                            </Row>
                        </div> */}
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
