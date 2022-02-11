import React from 'react';

import ContactUs from '../components/contact_us'
import ContactUsForm from '../components/contact_us/form'
import HeaderComponent from '../components/header'

import FooterComponent from '../components/footer'

const contact_us = () => {
  return (
      <>
          <HeaderComponent/>
          <ContactUs/>  
          <ContactUsForm/>       
          <FooterComponent/>
      </>

    );
};

export default contact_us;
