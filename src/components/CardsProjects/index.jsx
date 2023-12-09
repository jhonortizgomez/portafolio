import React from "react";

import "./styles.scss";

export const CardsProjects = () => {
  return (
    <section className="Cards">
      <article className="Card row1">
        <h2>Calculadora</h2>
        <div className="Card-text">
          <p className="p">JS | HTML | CSS</p>
          <p className="descrition-proyects">
            About Bienvenido/a a la Calculadora, tu herramienta online para
            realizar una variedad de cálculos útiles. Este sitio web responsive
            te permite calcular el perímetro y área de cuadrados y más.
          </p>
        </div>
        <a
          href="https://jhonortizgomez.github.io/cursoPracticoJS/"
          target="_blank"
        >
          <button>Ver Proyecto</button>
        </a>
      </article>
      <article className="Card row1">
        <h2>Landing Page</h2>
        <div className="Card-text">
          <p className="p"> BOOTSTRAP </p>
          <p className="descrition-proyects">
            Esta página es creada con tecnologías modernas, garantiza una
            presentación elegante y accesible, destacando la versatilidad de las
            herramientas disponibles para desarrolladores educativos.
          </p>
        </div>
        <a href="https://jhonortizgomez.github.io/bootstrap52/" target="_blank">
          <button>Ver Proyecto</button>
        </a>
      </article>
      <article className="Card row1">
        <h2>theBunnies</h2>
        <div className="Card-text">
          <p className="p">ANIMACIÓN CON CSS</p>
          <p className="descrition-proyects">
            ¡Bienvenid@ a "Conejos Animados"! Este es un juego interactivo donde
            la diversión comienza al hacer clic sobre un conejo, desencadenando
            un contador emocionante.
          </p>
        </div>
        <a href="https://jhonortizgomez.github.io/theBunnies/" target="_blank">
          <button>Ver Proyecto</button>
        </a>
      </article>
      <article className="Card row2">
        <h2>prueba-itglobers</h2>
        <div className="Card-text">
          <p className="p">RESPONSING DESING</p>
          <p className="descrition-proyects">
            ¡Bienvenido/a al proyecto "Prueba ItGlobers"! estoy emocionado de
            presentarte este proyecto en el que he trabajado con dedicación.
            Aquí, te proporciono una visión general de las tecnologías
            utilizadas.
          </p>
        </div>
        <a
          href="https://jhonortizgomez.github.io/prueba-itglobers/"
          target="_blank"
        >
          <button>Ver Proyecto</button>
        </a>
      </article>
      <article className="Card row2">
        <h2>Una vista a la galaxia</h2>
        <div className="Card-text">
          <p className="p">DIBUJO EN CSS</p>
          <p className="descrition-proyects">
            Bienvenido a la tranquila serenidad de "Ventana con Vista a la
            Luna". Este proyecto es un dibujo que captura la magia de una
            ventana abierta a la inmensidad del espacio lunar.
          </p>
        </div>
        <a
          href="https://jhonortizgomez.github.io/ventanaCssGrid/"
          target="_blank"
        >
          <button>Ver Proyecto</button>
        </a>
      </article>
      <article className="Card row2">
        <h2>googleClon</h2>
        <div className="Card-text">
          <p className="p">HTML | CSS </p>
          <p className="descrition-proyects">
            ¡Bienvenido al clon de Google Web! Este proyecto recrea la
            experiencia visual de la conocida página de inicio de Google. esta
            pagina fue creada con HTML 5 y CSS.
          </p>
        </div>
        <a href="https://jhonortizgomez.github.io/googleClon/" target="_blank">
          <button>Ver Proyecto</button>
        </a>
      </article>
    </section>
  );
};
