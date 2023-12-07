import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { appContext } from "@context/appContext";

import { MdDarkMode } from "react-icons//md";
import logo from "@images/logo.png";
import logoBlack from "@images/logo-black.png";
import "./style.scss";

export const Header = () => {
  const { menuMobile, toggleHeader, darkMode, toggleDarkMode } =
    useContext(appContext);

  return (
    <header
      className={`${menuMobile ? "Header active" : "Header"} ${
        darkMode ? "modeDark" : "modeLight"
      }`}
    >
      <section className="Header-photo">
        <img
          className="Header-photo__img"
          src="https://pbs.twimg.com/profile_images/1555332067524763648/ZCRoMb40_400x400.jpg"
        />
        <div className="Header-photo__title">
          <h1>Jhon Ortiz Gomez</h1>
          <h2>Front-end Developer</h2>
        </div>
      </section>
      <section className="Header-list">
        <ul>
          <Link to="/" onClick={() => toggleHeader()}>
            <li>Inicio</li>
          </Link>
          <Link to="/portafolio/projects" onClick={() => toggleHeader()}>
            <li>Proyectos</li>
          </Link>
          <Link to="/portafolio/contact" onClick={() => toggleHeader()}>
            <li>Contacto</li>
          </Link>
        </ul>
        <div className={`Header-list__button`}>
          <span onClick={() => toggleDarkMode()}>
            <MdDarkMode />
          </span>
        </div>
      </section>
      <section className="Header-footer">
        <Link to="/portafolio" onClick={() => toggleHeader()}>
          {darkMode ? <img src={logo} /> : <img src={logoBlack} />}
        </Link>
      </section>
    </header>
  );
};
