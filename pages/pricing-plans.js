import React from 'react';
import PricingPlans from '../components/pricing_plans'
import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'
const pricing_plans = () => {
  return (
        <>
          <HeaderComponent/>
          <PricingPlans/>                                                                     
          <FooterComponent/>


        </>
  );
};

export default pricing_plans;
