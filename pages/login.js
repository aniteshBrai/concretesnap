import React from 'react';
import Login from "../components/login"
import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'
const login = () => {
  return (
        <>
          <HeaderComponent/> 
            <Login />
          <FooterComponent/> 
        </>
      );
};

export default login;
