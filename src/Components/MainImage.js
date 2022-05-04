import React from "react";

import classes from "./Main.module.css";

const MainImage = () => {
  return (
    <img
      className={classes.logo}
      src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      alt="Google logo"
    />
  );
};

export default MainImage;
