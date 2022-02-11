import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string().required().email("Invalid email format"),
});

const index = () => {
  return (
    <>
      <div className="banner_add innerbanner">
        <div className="banner_panel" style={{ backgroundImage: `` }}>
          <Container>
            <Row>
              <Col sm={12}>
                <div className="banner_cont">
                  <h2>
                    <span>FORGOT PASSWORD</span>
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
              initialValues={{
                email: "",
              }}
              validate={(values) => {
                const errors = {};
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
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
                      <div className="from_contentblock modf_cont_block ">
                        <h2 className="from_title">Forgot Password</h2>
                        <p className="inp_desc_cont">
                          Lorem ipsum dolor sit amet, consectetur
                        </p>

                        <div className="form-group def_inp_text inp_from">
                          <label htmlFor="email" className="form-label">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Enter email id / username"
                            className="form-control"
                          />
                          <p className="error">
                            {errors.email && touched.email && errors.email}
                          </p>
                        </div>
                        <div className="def_from_btn">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="def_btn"
                          >
                            Submit
                          </button>
                        </div>

                        <div className="def_cont_center modf_opt">
                          <a href="#">
                            <strong className="linkopt">Login</strong>
                          </a>
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
