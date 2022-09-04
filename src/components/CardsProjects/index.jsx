import React, { useContext } from "react";
import { appContext } from "@context/appContext";

import "./styles.scss";

export const CardsProjects = () => {
  const { darkMode } = useContext(appContext);
  return (
    <section className={`Cards ${darkMode ? "darkMode" : "lightMode"}`}>
      <article className="Card row1">
        <div className="Card-text">
          <h2>Calculadora</h2>
          <p>JS | HTML | CSS</p>
          <a
            href="https://jhonortizgomez.github.io/cursoPracticoJS/"
            target="_blank"
          >
            <button>Ver Proyecto</button>
          </a>
        </div>
      </article>
      <article className="Card row1">
        <div className="Card-text">
          <h2>Landing Page</h2>
          <p> BOOTSTRAP </p>
          <a
            href="https://jhonortizgomez.github.io/bootstrap52/"
            target="_blank"
          >
            <button>Ver Proyecto</button>
          </a>
        </div>
      </article>
      <article className="Card row1">
        <div className="Card-text">
          <h2>Gatos Aleatorios</h2>
          <p>CONSUMO DE API</p>
          <a href="https://jhonortizgomez.github.io/Cats/" target="_blank">
            <button>Ver Proyecto</button>
          </a>
        </div>
      </article>
      <article className="Card row2">
        <div className="Card-text">
          <h2>Magis TV</h2>
          <p>RESPONSING DESING</p>
          <a href="https://mymagistv.com/" target="_blank">
            <button>Ver Proyecto</button>
          </a>
        </div>
      </article>
      <article className="Card row2">
        <div className="Card-text">
          <h2>Una vista a la galaxia</h2>
          <p>DIBUJO EN CSS</p>
          <a
            href="https://jhonortizgomez.github.io/ventanaCssGrid/"
            target="_blank"
          >
            <button>Ver Proyecto</button>
          </a>
        </div>
      </article>
      <article className="Card row2">
        <div className="Card-text">
          <h2>Landing Page Animada</h2>
          <p>HTML | CSS | ANIMACIONES</p>
          <a
            href="https://jhonortizgomez.github.io/asopaticas/"
            target="_blank"
          >
            <button>Ver Proyecto</button>
          </a>
        </div>
      </article>
    </section>
  );
};
