import React, { useContext } from "react";
import { appContext } from "@context/appContext";

import "./styles.scss";

export const AboutMeDescription = () => {
  const { darkMode } = useContext(appContext);
  return (
    <section
      className={`AboutMeDescription ${darkMode ? "darkMode" : "modeLight"}`}
    >
      <div>
        <p>
          Soy profesional en mercadeo y desarrollador front-end con
          conocimientos en React, siempre me ha gustado aprender, así que hace
          un tiempo comencé a aprender sobre tecnologías web por mi cuenta con
          Platzi.
        </p>
        <p>
          Actualmente tengo un año avanzando en mis estudios de tecnología donde
          he consolidado todos mis conocimientos, mejorando mis habilidades de
          desarrollo web.
        </p>
        <p>
          Por todo este aprendizaje he adquirido conocimientos y habilidades muy
          solidas en React, Redux, Sass, JavaScript, HTML, CSS.
        </p>
      </div>
    </section>
  );
};
