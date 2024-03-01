import React from "react";
import classes from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className={classes.logo_Container}>
      <div className={classes.logo_Wrapper}>
        <Link to="/">
          <h2>
            <span>teach</span>Nexus.
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
