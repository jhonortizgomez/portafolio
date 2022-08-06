import React from "react";
import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons//md";
import { BsTranslate } from "react-icons/bs";
import logo from "../../images/logo.png";
import "./style.scss";

export const Header = ({ display }) => {
  let on;
  if (display === true) {
    on = "on";
  }
  return (
    <header className={`Header ${on}`}>
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
          <Link to="/portafolio">
            <li>Inicio</li>
          </Link>
          <Link to="/portafolio/about-me">
            <li>Sobre mi</li>
          </Link>
          <Link to="/portafolio/projects">
            <li>Proyectos</li>
          </Link>
          <Link to="/portafolio/contact">
            <li>Contacto</li>
          </Link>
        </ul>
        <div className={`Header-list__button ${on}`}>
          <span>
            <BsTranslate />
          </span>
          <span>
            <MdDarkMode />
          </span>
        </div>
      </section>
      <section className="Header-footer">
        <Link to="/portafolio">
          <img src={logo} />
        </Link>
      </section>
    </header>
  );
};
