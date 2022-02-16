import React, { useEffect } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import profileBanner1 from "../../assets/images/profile_banner1.png";
import proFileimg from "../../assets/images/prof_img.png";
import proCam from "../../assets/images/cam.png";
import { handleUserInfo } from "../../store/actions/profileAction";
import { updateUserInfo } from "../../store/actions/profileAction";

const schema = Yup.object().shape({
  business_name: Yup.string().required(),
  email_address: Yup.string().required().email("Invalid email format"),
  phone_number: Yup.string().required(),
  business_address: Yup.string().required(),
  state: Yup.string().required(),
  city: Yup.string().required(),
  zip_code: Yup.string().required(),
});

const index = () => {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.userProfile);
  console.log(info);
  const {
    businessname,
    email,
    businessaddress,
    city,
    phone,
    zip,
    state,
    type,
  } = info.userInfo;

  useEffect(() => {
    dispatch(handleUserInfo());
  }, []);

  return (
    <>
      <div className="banner_add innerbanner">
        <div
          className="banner_panel"
          style={{ backgroundImage: `url("${profileBanner1.src}")` }}
        >
          <Container>
            <Row>
              <Col sm={12}>
                <div className="banner_cont">
                  <h2>
                    <span>ACCOUNT PROFILE</span>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla quam velit,
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="main_content_wrap fromdetails">
        <div className="main_content_block">
          <div className="from_contentblock modf_cont_block from_width_lg">
            <Container>
              <h2 className="from_title">Edit Profile</h2>
              <p className="inp_desc_cont">
                Lorem ipsum dolor sit amet,consectetur
              </p>
              <Formik
                validationSchema={schema}
                initialValues={{
                  business_name: "",

                  email_address: "",
                  phone_number: "",
                  business_address: "",
                  state: "",
                  city: "",
                  zip_code: "",
                  //   brand_color: "",
                  //   currency: "",
                }}
                validate={(values) => {
                  const errors = {};
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    dispatch(updateUserInfo(values));
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
                  setFieldValue,
                  isSubmitting,
                  /* and other goodies */
                }) => {
                  useEffect(() => {
                    setFieldValue("business_name", businessname, false);
                    setFieldValue("email_address", email, false);
                    setFieldValue("phone_number", phone, false);
                    setFieldValue("business_address", businessaddress, false);
                    setFieldValue("city", city, false);
                    setFieldValue("zip_code", zip, false);
                    setFieldValue("state", state, false);
                    setFieldValue("business_address", businessaddress, false);
                  }, [
                    businessname,
                    email,
                    businessaddress,
                    phone,
                    city,
                    zip,
                    state,
                  ]);
                  return (
                    <Form>
                      <Row>
                        <Col sm={12}>
                          <div className="prof_image">
                            <img
                              src={proFileimg.src}
                              className="upload_pic"
                              alt="Profile image"
                            />
                            <img
                              src={proCam.src}
                              className="upload_pic_cam"
                              alt=""
                            />
                            <Field
                              id="file"
                              name="file"
                              type="file"
                              className="upload_profile_pic"
                            />
                          </div>
                        </Col>
                        <Col sm={6}>
                          <div className="form-group def_inp_text inp_from">
                            <label
                              htmlFor="business_name"
                              className="form-label"
                            >
                              Business Name
                            </label>
                            <Field
                              type="text"
                              name="business_name"
                              placeholder="Enter Business Name"
                              className="form-control"
                            />
                            <p className="error">
                              {errors.business_name &&
                                touched.business_name &&
                                errors.business_name}
                            </p>
                          </div>
                        </Col>
                        <Col sm={6}>
                          <div className="form-group def_inp_text inp_from">
                            <label
                              htmlFor="phone_number"
                              className="form-label"
                            >
                              Phone Number
                            </label>
                            <Field
                              type="text"
                              name="phone_number"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.phone_number}
                              placeholder="Enter Phone Number"
                              className="form-control"
                            />
                            <p className="error">
                              {errors.phone_number &&
                                touched.phone_number &&
                                errors.phone_number}
                            </p>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={6}>
                          <div className="form-group def_inp_text inp_from">
                            <label
                              htmlFor="email_address"
                              className="form-label"
                            >
                              Email Address
                            </label>
                            <Field
                              type="email"
                              name="email_address"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              disabled
                              placeholder="Enter email address"
                              className="form-control"
                            />
                            <p className="error">
                              {errors.email_address &&
                                touched.email_address &&
                                errors.email_address}
                            </p>
                          </div>
                        </Col>
                        <Col sm={6}>
                          <div className="form-group def_inp_text inp_from">
                            <label
                              htmlFor="business_address"
                              className="form-label"
                            >
                              Business Address
                            </label>
                            <Field
                              type="text"
                              name="business_address"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.business_address}
                              placeholder="Enter Business Address"
                              className="form-control"
                            />
                            <p className="error">
                              {errors.business_address &&
                                touched.business_address &&
                                errors.business_address}
                            </p>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={6}>
                          <div className="form-group def_inp_text inp_from">
                            <label htmlFor="state" className="form-label">
                              State
                            </label>
                            <select
                              name="state"
                              value={values.state}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="form-control"
                            >
                              <option value="" label="Select a state" />
                              <option value="WB" label="WB" />
                              <option value="Jharkhand" label="Jharkhand" />
                              <option value="Bihar" label="Bihar" />
                            </select>
                            <div className="error">
                              {" "}
                              {errors.state && touched.state && (
                                <div className="input-feedback">
                                  {errors.state}
                                </div>
                              )}
                            </div>
                          </div>
                        </Col>
                        <Col sm={6}>
                          <div className="form-group def_inp_text inp_from">
                            <label htmlFor="city" className="form-label">
                              City
                            </label>
                            <Field
                              type="text"
                              name="city"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.city}
                              placeholder="Enter City"
                              className="form-control"
                            />
                            <p className="error">
                              {errors.city && touched.city && errors.city}
                            </p>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={6}>
                          <div className="form-group def_inp_text inp_from">
                            <label htmlFor="zip_code" className="form-label">
                              Zip Code
                            </label>
                            <Field
                              type="text"
                              name="zip_code"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.zip_code}
                              placeholder="Enter Zip Code"
                              className="form-control"
                            />
                            <p className="error">
                              {errors.zip_code &&
                                touched.zip_code &&
                                errors.zip_code}
                            </p>
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={12}>
                          <div className="def_from_btn">
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="def_btn"
                            >
                              Update Profile
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  );
                }}
              </Formik>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
