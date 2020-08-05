import React from 'react';
// import sections
import Welcome from '../components/sections/Welcome';
import SkillsTiles from '../components/sections/SkillsTiles';
import ExperiencesSplit from '../components/sections/ExperiencesSplit';
import Testimonial from '../components/sections/Testimonial';

const Home = () => {

  return (
    <>
      <Welcome />
      <SkillsTiles topDivider />
      <ExperiencesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
    </>
  );
}

export default Home;