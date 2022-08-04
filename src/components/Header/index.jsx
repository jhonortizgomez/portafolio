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
          src="https://media-exp1.licdn.com/dms/image/C5603AQHSCMq3mg-olg/profile-displayphoto-shrink_200_200/0/1654816551674?e=1665014400&v=beta&t=nUHhaLZq1TPM2f0ad6C_YMSB0i0ZYqMJ6FMuRi5I1lo"
        />
        <div className="Header-photo__title">
          <h1>Jhon Ortiz Gomez</h1>
          <h2>Front-end Developer</h2>
        </div>
      </section>
      <section className="Header-list">
        <ul>
          <Link to="/">
            <li>Inicio</li>
          </Link>
          <Link to="/about-me">
            <li>Sobre mi</li>
          </Link>
          <Link to="/projects">
            <li>Proyectos</li>
          </Link>
          <Link to="/contact">
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
        <Link to="/">
          <img src={logo} />
        </Link>
      </section>
    </header>
  );
};
