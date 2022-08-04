import React from "react";
import projectPracticoJs from "../../images/project-practicojs.jpeg";
import projectBootstrap from "../../images/project-bootstrap.jpeg";
import projectApiCats from "../../images/project-apicats.jpeg";
import projectDibujoCss from "../../images/project-dibujocss.jpeg";
import projectMagistv from "../../images/project-magistv.jpeg";
import projectAnimaciones from "../../images/project-animaciones.jpeg";
import "./styles.scss";

export const CardsProjects = () => {
  return (
    <section className="Cards">
      <article className="Card row1">
        <img className="Card-img" src={projectPracticoJs} />
        <div className="Card-text">
          <h2>Calculadora de promedios</h2>
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
        <img className="Card-img" src={projectBootstrap} />
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
        <img className="Card-img" src={projectApiCats} />
        <div className="Card-text">
          <h2>Gatos Aleatorios</h2>
          <p>CONSUMO DE API</p>
          <a href="https://jhonortizgomez.github.io/Cats/" target="_blank">
            <button>Ver Proyecto</button>
          </a>
        </div>
      </article>
      <article className="Card row2">
        <img className="Card-img" src={projectMagistv} />
        <div className="Card-text">
          <h2>Magis TV</h2>
          <p>RESPONSING DESING</p>
          <a href="https://mymagistv.com/" target="_blank">
            <button>Ver Proyecto</button>
          </a>
        </div>
      </article>
      <article className="Card row2">
        <img className="Card-img" src={projectDibujoCss} />
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
        <img className="Card-img" src={projectAnimaciones} />
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
