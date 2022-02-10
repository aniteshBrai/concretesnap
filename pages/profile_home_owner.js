import React from 'react';
import ProfileHomeOwner from '../components/profile_home_owner'
import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'

const profile_home_owner = () => {
  return (
      <>
        <HeaderComponent />
          <ProfileHomeOwner/>
        <FooterComponent/>
      </>
    );
};

export default profile_home_owner;
