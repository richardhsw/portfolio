import React from 'react';
// import sections
import Welcome from '../components/sections/Welcome';
import SkillsTiles from '../components/sections/SkillsTiles';
import Experiences from '../components/sections/Experiences';
import Testimonial from '../components/sections/Testimonial';

const Home = () => {

  return (
    <>
      <Welcome />
      <SkillsTiles topDivider />
      <Experiences invertMobile topDivider imageFill />
      <Testimonial topDivider />
    </>
  );
}

export default Home;