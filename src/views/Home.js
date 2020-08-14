import React from 'react';
// import sections
import Welcome from '../components/sections/Welcome';
import SkillsTiles from '../components/sections/SkillsTiles';
import Experiences from '../components/sections/Experiences';
import ProjectsTabs from '../components/sections/ProjectsTabs';
import ContactMe from '../components/sections/ContactMe';

const Home = () => {

  return (
    <>
      <Welcome />
      <SkillsTiles id="skills" topDivider />
      <Experiences id="experiences" invertMobile topDivider imageFill />
      <ProjectsTabs id="projects" invertMobile topDivider imageFill />
      <ContactMe id="contact" topDivider />
    </>
  );
}

export default Home;