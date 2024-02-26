import React from "react";
import classes from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={classes.nav_Container}>
      <nav className={classes.nav_Wrapper}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/job-listings">Job Listings</Link>
          </li>

          <Link to="">
            <button>Apply</button>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
