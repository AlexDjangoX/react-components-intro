import React from "react";

import classes from "./Main.module.css";

const Main = () => {
  return (
    <main>
      <img
        className={classes.logo}
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="Google logo"
      />
      <input className={classes["search-bar"]} type="search" />
      <div className={classes.buttons}>
        <button>Google Search</button>
        <button>Feeling Lucky</button>
      </div>
    </main>
  );
};

export default Main;
