import React from 'react';
import AboutUs from '../components/about_us'
import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'
const about_us = () => {
  return (
        <>
          <HeaderComponent/>
            <AboutUs/>          
          <FooterComponent/>


        </>
  );
};

export default about_us;
