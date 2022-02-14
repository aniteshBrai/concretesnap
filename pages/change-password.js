import React from "react";

import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import ChangePassword from "../components/change_password";
import { useSelector } from "react-redux";

const change_password = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <HeaderComponent />
      {auth.isLoggedIn ? <ChangePassword /> : ""}

      <FooterComponent />
    </>
  );
};

export default change_password;
