import React from "react";
import Hero from "../../components/Home/Hero/Hero";
import Search from "../../components/Home/Search/Search";
import Why from "../../components/Home/Why/Why";
import How from "../../components/Home/How/How";

const Home = () => {
  return (
    <div>
      <Hero />
      <Search />
      <Why />
      <How />
    </div>
  );
};

export default Home;
