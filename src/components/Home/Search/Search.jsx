import React, { useEffect } from "react";
import classes from "./Search.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Search = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={classes.search_Container} data-aos="fade-up">
      <div className={classes.search_Wrapper}>
        <h2>Search for your preferred job</h2>
        <form action="">
          <input type="text" placeholder="Browse Job Listings..." />
          <button>Apply</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
