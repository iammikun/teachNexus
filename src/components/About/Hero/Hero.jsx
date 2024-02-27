import React, { useEffect } from "react";
import classes from "./Hero.module.css";
import aboutHero from "../../../Images/aboutHero.jpg";
// import { FaFacebookF, FaInstagram } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1700 });
  }, []);

  return (
    <div className={classes.hero_About} data-aos="zoom-in">
      <div className={classes.About_Wrapper}>
        <div className={classes.about_Word}>
          <h1 data-aos="fade-down">About Us</h1>
          <p data-aos="fade-left">
            At TeachNexus, we're driven by a deep-seated passion for education
            and a firm belief in the transformative power of teaching. Our
            dedicated team is committed to bridging the gap between talented
            educators and schools in search of exceptional teaching
            professionals. We understand the importance of finding the right fit
            for both teachers and schools, and we're here to facilitate those
            connections with efficiency and integrity.
          </p>
          {/* <div className={classes.socials}>
            <FaFacebookF className={classes.icons} />
            <FaInstagram className={classes.icons} />
            <FaXTwitter className={classes.icons} />
          </div> */}
        </div>
        <div className={classes.about_Img}>
          <img
            src={aboutHero}
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
