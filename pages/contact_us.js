import React from 'react';

import ContactUs from '../components/contact_us'
import HeaderComponent from '../components/header'

import FooterComponent from '../components/footer'

const contact_us = () => {
  return (
      <>
          <HeaderComponent/>
          <ContactUs/>         
          <FooterComponent/>
      </>

    );
};

export default contact_us;
