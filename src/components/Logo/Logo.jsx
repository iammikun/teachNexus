import React from "react";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.logo_Container}>
      <div className={classes.logo_Wrapper}>
        <h2>
          <span>teach</span>Nexus.
        </h2>
      </div>
    </div>
  );
};

export default Logo;
