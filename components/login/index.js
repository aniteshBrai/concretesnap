import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import loginbanner from "../../assets/images/loginbanner.png";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import { handleLogin } from "../../store/actions/authAction";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const index = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <div className="banner_add innerbanner">
        <div
          className="banner_panel"
          style={{ backgroundImage: `url("${loginbanner.src}")` }}
        >
          <Container>
            <Row>
              <Col sm={12}>
                <div className="banner_cont">
                  <h2>
                    <span>Login / register</span>
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
          <Container>
            <Formik
              validationSchema={schema}
              initialValues={{ email: "", password: "" }}
              validate={(values) => {
                const errors = {};
                return errors;
              }}
              onSubmit={(values) => {
                const { email, password } = values;
                dispatch(handleLogin({ email, password }));
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
                isvalid,
                /* and other goodies */
              }) => (
                <form noValidate onSubmit={handleSubmit}>
                  <Row>
                    <Col sm={12}>
                      <div className="from_contentblock modf_cont_block logincontent">
                        <h2 className="from_title">Login</h2>
                        <p className="inp_desc_cont">
                          Lorem ipsum dolor sit amet, consectetur
                        </p>
                        <div className="form-group def_inp_text inp_from">
                          <label className="form-label">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Enter email id / username"
                            className="form-control inp_text"
                            id="email"
                          />
                          <p className="error">
                            {errors.email && touched.email && errors.email}
                          </p>
                        </div>
                        <div className="form-group def_inp_text inp_from">
                          <label htmlFor="email" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder="Enter password"
                            className="form-control"
                          />
                          <p className="error">
                            {errors.password &&
                              touched.password &&
                              errors.password}
                          </p>
                        </div>
                        <Link
                          href="/forgot-password"
                          className="def_cont_center"
                        >
                          Forgot Password?
                        </Link>
                        <div className="def_from_btn">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="def_btn"
                          >
                            Login
                          </button>
                        </div>

                        <div className="def_cont_center modf_opt">
                          Don’t have an account?{" "}
                          <Link href="/signup">
                            <strong className="linkopt">Register</strong>
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </form>
              )}
            </Formik>
          </Container>
        </div>
      </div>
    </>
  );
};

export default index;
