import React from 'react';
import ProfileContractor from '../components/profile_contractor'

import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'

const profile_contractor = () => {
  return (
    <>
      <HeaderComponent/>
       <ProfileContractor/>
      <FooterComponent/>
    </> 
  );
};

export default profile_contractor;
