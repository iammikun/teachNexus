import React, { useEffect } from "react";
import classes from "./Contact.module.css";
import { FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  return (
    <div className={classes.contact_Container}>
      <div className={classes.contact_Word} data-aos="zoom-in">
        <h2>Contact Us</h2>
        <p>Find out more.</p>
        <Link to="mailto:">
          <FaEnvelope />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
