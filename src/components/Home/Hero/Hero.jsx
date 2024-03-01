import React, { useEffect } from "react";
import classes from "./Hero.module.css";
import { Link } from "react-router-dom";
import heroTwo from "../../../Images/heroTwo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1700 });
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
              <button>Create Account</button>
            </Link>
            <Link to="/about">
              <button className={classes.hero_Trans}>Learn More</button>
            </Link>
          </div>
        </div>
        <div className={classes.hero_Img}>
          <img
            src={heroTwo}
            alt=""
            data-aos="zoom-in"
            data-aos-duration="1900"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
