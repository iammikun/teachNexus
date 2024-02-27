import React, { useEffect } from "react";
import Hero from "../../components/Home/Hero/Hero";
import Search from "../../components/Home/Search/Search";
import Why from "../../components/Home/Why/Why";
import How from "../../components/Home/How/How";
import Contact from "../../components/Home/Contact/Contact";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <Search />
      <Why />
      <How />
      <Contact />
    </div>
  );
};

export default Home;
