import React, { useContext } from "react";
import { appContext } from "@context/appContext";

import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { BsTranslate } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import "./styles.scss";

export const Nav = ({ title }) => {
  const { toggleMenuMobile, toggleDarkMode, darkMode } = useContext(appContext);
  console.log("nav darkmode", darkMode);
  return (
    <nav className={`Nav ${darkMode ? "modeDark" : "modeLight"}`}>
      <div className="Nav-left">
        <h1>{title} </h1>
      </div>
      <div className="Nav-right">
        <span>
          <BsTranslate />
        </span>
        <span onClick={() => toggleDarkMode()}>
          {darkMode && <MdDarkMode />}
          {!darkMode && <MdOutlineLightMode />}
        </span>
        <span onClick={() => toggleMenuMobile()}>
          <FiMenu />
        </span>
      </div>
    </nav>
  );
};
