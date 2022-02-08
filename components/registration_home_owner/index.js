import React from 'react';
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap'
import {Formik, Field, Form} from 'formik';

const index = () => {
    // const [show, setShow] = true;
    // const handleChange = () => setShow(false);
    return <div>
        <Container>
            <h1>Register</h1>
            <Formik
                initialValues={{
                    register_as: '',
                    first_name: '',
                    last_name: '',
                    email_address: '',
                    confirm_email_address: '',
                    password: '',
                    confirm_password: '',
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
                            <Col sm={12}>
                                <div className="form-group">
                                    <div id="my-radio-group">Register As</div>
                                    <div role="group" aria-labelledby="my-radio-group">
                                        <label>
                                            <Field type="radio" name="register_as"
                                                   value="0" /*onChange={this.handleChange}*//>
                                            Contractor
                                        </label>
                                        <label>
                                            <Field type="radio" name="register_as"
                                                   value="1" /*onChange={this.handleChange}*//>
                                            Home owner
                                        </label>
                                        <div>Register As: {values.register_as}</div>
                                    </div>
                                </div>
                            </Col>
                        </Row>


                        <div /*disabled={!setShow}*/>
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
                                        <label htmlFor="confirm_email_address" classname="form-label">Confirm Email
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
                                <Col sm={6}>
                                    <div className="form-group">
                                        <label htmlFor="confirm_password" classname="form-label">Confirm
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
                                        <label htmlFor="phone_number" classname="form-label">Phone Number</label>
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
                        </div>


                        <div> Contractor</div>


                        <div /*disabled={setShow}*/>
                            <Row>
                                <Col sm={6}>
                                    <div className="form-group">
                                        <label htmlFor="business_name" classname="form-label">Business Name</label>
                                        <input type="text" name="business_name" onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.business_name} placeholder="Enter Business Name"
                                               className="form-control"/>
                                        {errors.business_name && touched.business_name && errors.business_name}
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="form-group">

                                        <label htmlFor="phone_number" classname="form-label">Phone Number</label>
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
                                        <label htmlFor="email_address" classname="form-label">Email Address</label>
                                        <input type="email" name="email_address" onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.email_address} placeholder="Enter email address"
                                               className="form-control"/>
                                        {errors.email_address && touched.email_address && errors.email_address}
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="form-group">

                                        <label htmlFor="confirm_email_address" classname="form-label">Confirm Email
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
                                        <label htmlFor="email" classname="form-label">Password</label>
                                        <input type="password" name="password" onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.password} placeholder="Enter password"
                                               className="form-control"/>
                                        {errors.password && touched.password && errors.password}
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="form-group">
                                        <label htmlFor="confirm_password" classname="form-label">Confirm
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
                                        <label htmlFor="business_address" classname="form-label">Business
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
                                        <label htmlFor="state" classname="form-label">Color</label>
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

                                        <label htmlFor="city" classname="form-label">City</label>
                                        <input type="text" name="city" onChange={handleChange} onBlur={handleBlur}
                                               value={values.city} placeholder="Enter City" required
                                               className="form-control"/>
                                        {errors.city && touched.city && errors.city}
                                    </div>
                                </Col>

                                <Col sm={6}>
                                    <div className="form-group">
                                        <label htmlFor="zip_code" classname="form-label">Zip Code</label>
                                        <input type="text" name="zip_code" onChange={handleChange} onBlur={handleBlur}
                                               value={values.zip_code} placeholder="Enter Zip Code" required
                                               className="form-control"/>
                                        {errors.zip_code && touched.zip_code && errors.zip_code}
                                    </div>
                                </Col>
                            </Row>
                        </div>
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
