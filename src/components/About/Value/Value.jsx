import React, { useEffect } from "react";
import classes from "./Value.module.css";
import AOS from "aos";
import { FaLightbulb } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FcApproval } from "react-icons/fc";
import { SiBookstack } from "react-icons/si";
import { FcFeedback } from "react-icons/fc";
import "aos/dist/aos.css";

const Value = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <div className={classes.value_Container} data-aos="fade-down">
      <div className={classes.value_Wrapper}>
        <h2>Our Values</h2>
        <p>
          At <span>teach</span>Nexus, these core principles shape everything we
          do.
        </p>
        <div
          className={classes.core_Values}
          data-aos="zoom-in"
          data-aos-duration="600"
        >
          <div
            className={classes.Value}
            data-aos="fade-right"
            data-aos-duration="700"
          >
            <FaLightbulb className={classes.icon} />
            <h3>Empowerment</h3>
            <p>
              We empower educators to take control of their careers and find
              fulfilling teaching opportunities.
            </p>
          </div>
          <div
            className={classes.Value}
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <FaPeopleGroup className={classes.iconTwo} />
            <h3>Community</h3>
            <p>
              We foster a sense of community among educators, schools, and
              administrators, creating a supportive network for collaboration
              and learning.
            </p>
          </div>
          <div
            className={classes.Value}
            data-aos="fade-down"
            data-aos-duration="900"
          >
            <SiBookstack className={classes.iconThree} />
            <h3>Transparency</h3>
            <p>
              We prioritize transparency in our processes and communications,
              providing clear and honest information to both teachers and
              schools.
            </p>
          </div>
          <div
            className={classes.Value}
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <FcApproval className={classes.iconFour} />
            <h3>Quality</h3>
            <p>
              We uphold high standards of quality in our job listings and
              services, ensuring that teachers have access to reputable schools
              and that schools can recruit qualified and passionate educators
              who meet their needs.
            </p>
          </div>
          <div
            className={classes.Value}
            data-aos="zoom-in"
            data-aos-duration="1100"
          >
            <FcFeedback className={classes.iconFour} />
            <h3>Support</h3>
            <p>
              We are committed to providing ongoing support to educators and
              schools, offering resources, guidance, and assistance to help them
              succeed in their roles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
