import React, { useEffect } from "react";
import Hero from "../../components/About/Hero/Hero";
import Why from "../../components/Home/Why/Why";
import Value from "../../components/About/Value/Value";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <Value />
      <Why />
    </div>
  );
};

export default About;
