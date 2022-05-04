import React from "react";

import classes from "./Header.module.css";

const NaveLeft = () => {
  return (
    <nav className={classes["left-menu"]}>
      <ul>
        <li>About</li>
        <li>Store</li>
      </ul>
    </nav>
  );
};

export default NaveLeft;
