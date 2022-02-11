import React from 'react';

import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'
import ChangePassword from '../components/change_password'

const change_password = () => {
  return (
    <>
      <HeaderComponent/>
      <ChangePassword/> 
      <FooterComponent/>

    </>
    );
};

export default change_password;
