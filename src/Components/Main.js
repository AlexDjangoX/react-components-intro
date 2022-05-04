import React from "react";

import MainImage from "./MainImage";

import classes from "./Main.module.css";

const Main = () => {
  return (
    <main>
      <MainImage />
      <input className={classes["search-bar"]} type="search" />
      <div className={classes.buttons}>
        <button>Google Search</button>
        <button>Feeling Lucky</button>
      </div>
    </main>
  );
};

export default Main;
