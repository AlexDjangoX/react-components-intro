import React from "react";
import classes from "./Header.module.css";
import Svg from "./Svg";

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
          <img
            src="https://lh3.google.com/u/0/ogw/ADGmqu9SnLFSXSNhQekSAI8qQNn9h-VAhGGPPtNZefIQ=s64-c-mo"
            alt="avatar"
            className={classes.avatar}
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavRight;
