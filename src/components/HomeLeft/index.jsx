import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export const HomeLeft = () => {
  return (
    <div className="HomeLeft">
      <span className="wrapper-title">
        <p className="HomeLeft-greeting">Hola,</p>
        <p className="HomeLeft-name">Mi nombre es Jhon y soy:</p>
      </span>
      <span className="wrapper-description">
        <p className="HomeLeft-position">Front-end Developer</p>
        <p className="HomeLeft-description">
          🚀 Soy un profesional en mercadeo y desarrollador front-end con más de
          un año de experiencia. Mis habilidades abarcan React, React Native,
          Firebase, VITEX, TypeScript, y tecnologías web como Sass, JavaScript,
          HTML, y CSS. Aprendí de manera autodidacta en Platzi, donde consolidé
          mis conocimientos. Mi entusiasmo por nuevas tecnologías y la creación
          continúa impulsando mi carrera. Si buscas colaborar en proyectos
          emocionantes, contáctame. ¡Estoy emocionado por construir algo
          increíble juntos! 🌟
        </p>
        <Link to="/portafolio/projects">
          <button className="HomeLeft-button">Proyectos</button>
        </Link>
      </span>
    </div>
  );
};
