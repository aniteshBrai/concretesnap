import React from 'react';
import ProjectsPage from '../components/projectspage'
import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'
const projectspage = () => {
  return (
        <>
          <HeaderComponent/>
          <ProjectsPage/>          
          <FooterComponent/>


        </>
  );
};

export default projectspage;
