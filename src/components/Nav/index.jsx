import React, { useContext } from "react";
import { appContext } from "@context/appContext";

import { FiMenu } from "react-icons/fi";
import "./styles.scss";

export const Nav = ({ title }) => {
  const { toggleMenuMobile, darkMode } = useContext(appContext);
  console.log("nav darkmode", darkMode);
  return (
    <nav className="Nav">
      <div className="Nav-left">
        <h1>{title} </h1>
      </div>
      <div className="Nav-right">
        <span className="menu-icon" onClick={() => toggleMenuMobile()}>
          <FiMenu color="#fff" />
        </span>
      </div>
    </nav>
  );
};
