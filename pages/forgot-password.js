import React from 'react';
import ForgotPassword from '../components/forgot_password'
import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'

const forgot_password = () => {
  return (
      <>
        <HeaderComponent/>
          <ForgotPassword/>
        <FooterComponent/>
      </>
  );
};

export default forgot_password;
