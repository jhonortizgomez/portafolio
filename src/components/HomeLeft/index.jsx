import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export const HomeLeft = () => {
  return (
    <div className="HomeLeft">
      <p className="HomeLeft-greeting">Hola,</p>
      <p className="HomeLeft-name">Mi nombre es Jhon y soy:</p>
      <p className="HomeLeft-position">Front-end Developer</p>
      <Link to="/dist/projects">
        <button className="HomeLeft-button">Proyectos</button>
      </Link>
    </div>
  );
};
