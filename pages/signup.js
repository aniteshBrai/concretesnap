import React from 'react';
import RegistrationHomeOwner from '../components/registration_home_owner'
//import RegistrationHomeOwnerForm from '../components/registration_home_owner'
import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'
const signup = () => {
  return (
      <>  
        <HeaderComponent />
          <RegistrationHomeOwner />
        <FooterComponent />

      </>
    );
};

export default signup;
