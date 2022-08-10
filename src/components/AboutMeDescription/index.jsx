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
          Soy Jhon Ortiz Gómez, profesional en mercadeo egresado de la
          Universidad de Ibagué en la ciudad musical de Colombia. Descubri una
          pasión por la programación cuando por hobbie en mis tiempos libres
          construi mi primera landing page.
        </p>
        <p>
          Entonces, decidí empezar a aprender sobre tecnologías web
          capacitándome de forma independiente con cursos online y realizando
          proyectos personales.
        </p>
        <p>
          Actualmente sigo avanzado en mi aprendizaje, enfocandome en el
          desarrollo Frontend, he adquirido habilidades muy profundas en este
          perfil, que deseo pasar al siguiente nivel y seguir conociendo y
          utilizando a nivel laboral las siguientes tegnologias.
        </p>
      </div>
    </section>
  );
};
