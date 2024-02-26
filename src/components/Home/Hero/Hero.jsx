import React, { useEffect } from "react";
import classes from "./Hero.module.css";
import { Link } from "react-router-dom";
import hero from "../../../Images/hero.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className={classes.hero_Container} data-aos="zoom-in">
      <div className={classes.hero_Wrapper}>
        <div className={classes.hero_Words}>
          <h1 data-aos="fade-down">Connecting Teachers, Empowering Futures </h1>
          <p data-aos="fade-left">
            At TeachNexus, we believe in empowering educators to find their
            perfect teaching opportunities.
          </p>
          <div className={classes.hero_Btns} data-aos="fade-up">
            <Link to="">
              <button>Apply</button>
            </Link>
            <Link to="">
              <button className={classes.hero_Trans}>About</button>
            </Link>
          </div>
        </div>
        <div className={classes.hero_Img}>
          <img src={hero} alt="" data-aos="zoom-in" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
