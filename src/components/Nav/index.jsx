import React, { useState } from "react";
import { MdDarkMode } from "react-icons//md";
import { BsTranslate } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./styles.scss";

export const Nav = ({ title }) => {
  return (
    <nav className="Nav">
      <div className="Nav-left">
        <h1>{title} </h1>
      </div>
      <div className="Nav-right">
        <span>
          <BsTranslate />
        </span>
        <span>
          <MdDarkMode />
        </span>
        <span>
          <Link to="/portafolio/menu">
            <FiMenu />
          </Link>
        </span>
      </div>
    </nav>
  );
};
