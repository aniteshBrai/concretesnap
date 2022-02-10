import React from 'react';
import CheckoutComponent from '../components/checkout'
import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'
const checkout = () => {
  return (
        <>
          <HeaderComponent/>
            <CheckoutComponent/>                                                                     
          <FooterComponent/>


        </>
  );
};

export default checkout;

