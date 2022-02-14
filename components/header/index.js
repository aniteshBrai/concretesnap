import React, { useState } from "react";
import { Container, Row, Col, Navbar, Nav, Dropdown } from "react-bootstrap";
import clientlogo from "../../assets/images/logo.png";
import proFileimg from "../../assets/images/prof_img.png";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { handleLogout } from "../../store/actions/authAction";

const index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const { isLoggedIn } = auth;

  const Logout = () => {
    dispatch(handleLogout);
  };

  return (
    <>
      <header className="header_outer">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="headeinfo">
                <div className="header_left">
                  <Navbar.Brand href="#home">
                    <img src={clientlogo.src} alt="logo" />
                  </Navbar.Brand>
                </div>

                <div className="header_right">
                  <Navbar bg="light1" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="mr-auto">
                        <Link href="/about-us">About</Link>
                        <Link href="/pricing-plans">Pricing</Link>
                        <Link href="/contact-us">Contact Us</Link>
                        <Link href="#link">Concrete Calculator</Link>
                      </Nav>
                      <div className="login_option deflogin">
                        {isLoggedIn && (
                          <Link suppressHydrationWarning href="/logout">
                            Logout
                          </Link>
                        )}

                        {!isLoggedIn && (
                          <>
                            <Link href="/login">Login</Link>

                            <Link href="/signup">Register</Link>
                          </>
                        )}
                      </div>
                      <div
                        className="login_option iflogin"
                        style={{ display: "none" }}
                      >
                        <div className="prof_login_pic">
                          <img
                            src={proFileimg.src}
                            className="upload_pic"
                            alt="Profile image"
                          />
                        </div>
                        <div className="prof_login_des">
                          <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                              John Doe
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                Edit Profile
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Change Password
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                Logout
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </Navbar.Collapse>
                  </Navbar>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default index;
