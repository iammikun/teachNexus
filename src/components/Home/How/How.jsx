import React, { useEffect } from "react";
import classes from "./How.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const How = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={classes.how_Container}>
      <div className={classes.how_Wrapper}>
        <h2 data-aos="fade-up">How It Works</h2>
        <div className={classes.how_Full} data-aos="fade-up">
          <div className={classes.how} data-aos="fade-up">
            <div className={classes.circle}>
              <span>01</span>
            </div>
            <h3>Create</h3>
            <p>Begin by creating your teacher profile on teachNexus.</p>
          </div>
          <div className={classes.how} data-aos="fade-up">
            <div className={classes.circle}>
              <span>02</span>
            </div>
            <h3>Browse Job Listings</h3>
            <p>
              Once your profile is complete, browse through our extensive list
              of job listings.
            </p>
          </div>
          <div className={classes.how} data-aos="fade-up">
            <div className={classes.circle}>
              <span>03</span>
            </div>
            <h3>Submit</h3>
            <p>
              Found a job that matches your criteria? Great! Submit your resume
              with just a few clicks.
            </p>
          </div>
          <div className={classes.how} data-aos="fade-up">
            <div className={classes.circle}>
              <span>04</span>
            </div>
            <h3>Connect With Schools</h3>
            <p>
              Once application is submitted, sit back and relax as we review
              your qualifications and connect you with schools that are
              interested in your profile.
            </p>
          </div>
          <div className={classes.how} data-aos="fade-up">
            <div className={classes.circle}>
              <span>05</span>
            </div>
            <h3>Land Your Dream Job</h3>
            <p>
              Congratulations! With teachNexus, you're one step closer to
              landing your dream teaching job.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
