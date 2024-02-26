import React from "react";
import Logo from "../Logo/Logo";
import Nav from "../nav/Nav";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header_Container}>
      <div className={classes.header_Wrap}>
        <Logo />
        <Nav />
        <div className={classes.hamburger}>
          <span className={classes.horizontal}></span>
          <span className={classes.horizontal}></span>
          <span className={classes.horizontal}></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
