import React from "react";
import Login from "../components/login";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import ProtectedAuth from "../components/ProtectedRoutes/ProtectedAuth";
const login = () => {
  return (
    <>
      <ProtectedAuth>
        <HeaderComponent />
        <Login />
        <FooterComponent />
      </ProtectedAuth>
    </>
  );
};

export default login;
