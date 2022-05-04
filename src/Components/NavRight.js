import React from "react";
import classes from "./Header.module.css";

import Svg from "./Svg";
import NavRightImage from "./NavRightImage";

const NavRight = () => {
  return (
    <nav className={classes["right-menu"]}>
      <ul>
        <li>Gmail</li>
        <li>Images</li>
        <li>
          <Svg />
        </li>
        <li>
          <NavRightImage />
        </li>
      </ul>
    </nav>
  );
};

export default NavRight;
