import React from 'react';
// import sections
import Welcome from '../components/sections/Welcome';
import SkillsTiles from '../components/sections/SkillsTiles';
import Experiences from '../components/sections/Experiences';
import ProjectsSplit from '../components/sections/ProjectsSplit';
import Testimonial from '../components/sections/Testimonial';

const Home = () => {

  return (
    <>
      <Welcome />
      <SkillsTiles topDivider />
      <Experiences invertMobile topDivider imageFill />
      <ProjectsSplit invertMobile topDivider imageFill />
      <Testimonial topDivider />
    </>
  );
}

export default Home;