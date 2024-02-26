import React, { useEffect } from "react";
import classes from "./Why.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Why = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={classes.why_Container}>
      <div className={classes.why_Wrapper}>
        <h2>
          Why
          <span> teach</span>Nexus?
        </h2>
        <div className={classes.why_Content} data-aos="zoom-in">
          <div className={classes.why_Words}>
            <h3>Passion</h3>
            <p>
              We are passionate about connecting educators with rewarding
              teaching opportunities
            </p>
          </div>
          <div className={classes.why_Words}>
            <h3>Find Jobs</h3>
            <p>
              We empower teachers to find their ideal jobs while helping schools
              discover talented prefessionals who shhare their educational
              values.
            </p>
          </div>
          <div className={classes.why_Words}>
            <h3>Supportive ecosystem</h3>
            <p>
              We strive to create a supportive ecosystem where educators can
              thrive and schools can flourish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
