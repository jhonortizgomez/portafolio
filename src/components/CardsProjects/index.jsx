import React, { useContext } from "react";
import { appContext } from "@context/appContext";

import "./styles.scss";

export const CardsProjects = () => {
  const { darkMode } = useContext(appContext);
  return (
    <section className={`Cards ${darkMode ? "darkMode" : "lightMode"}`}>
      <article className="Card row1">
        <img
          className="Card-img"
          src="https://scontent.fbog2-4.fna.fbcdn.net/v/t39.30808-6/296121990_112368534899331_2944470622512320019_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=YZJNumu2Z5EAX8r9LPd&_nc_ht=scontent.fbog2-4.fna&oh=00_AT_7v6jx9jUG-9SrAxeucUDKFoW1ibtArKsyGfNl1N5uvg&oe=62F7F43F"
        />
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
        <img
          className="Card-img"
          src="https://scontent.fbog2-4.fna.fbcdn.net/v/t39.30808-6/295931358_112368564899328_1908043341024543142_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=3lZunSSQdOUAX_qaXBA&_nc_oc=AQmlLS-EVfxn9HGK9SSRzs2G4dzrAKVAInVTjhF1_P9YReatVE_8KkOoVydrBADQNZXm2UA9X5tLOnrkqJX-gOhd&_nc_ht=scontent.fbog2-4.fna&oh=00_AT_lCHvSMbIO9k_CcdyTuNdcpaXcdqpG1jIdDNkKzIKFBw&oe=62F2EFC0"
        />
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
        <img
          className="Card-img"
          src="https://scontent.fbog2-5.fna.fbcdn.net/v/t39.30808-6/296317251_112368521565999_3059262881062379588_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=TyKDMy45gsUAX-w9zuh&_nc_ht=scontent.fbog2-5.fna&oh=00_AT_tS8JihNh31E-W6hvULYeadi1AJjc7GROXyXd9gdi-Wg&oe=62F835E1"
        />
        <div className="Card-text">
          <h2>Gatos Aleatorios</h2>
          <p>CONSUMO DE API</p>
          <a href="https://jhonortizgomez.github.io/Cats/" target="_blank">
            <button>Ver Proyecto</button>
          </a>
        </div>
      </article>
      <article className="Card row2">
        <img
          className="Card-img"
          src="https://scontent.fbog2-4.fna.fbcdn.net/v/t39.30808-6/296954390_112368468232671_2847830249486249198_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=iXsD3a_4angAX-hvaE4&_nc_ht=scontent.fbog2-4.fna&oh=00_AT9xdybfAgVYQSDcXXAYE-XTAydNzKDGD2cOzONqJ_Y-4w&oe=62F7F1E0"
        />
        <div className="Card-text">
          <h2>Magis TV</h2>
          <p>RESPONSING DESING</p>
          <a href="https://mymagistv.com/" target="_blank">
            <button>Ver Proyecto</button>
          </a>
        </div>
      </article>
      <article className="Card row2">
        <img
          className="Card-img"
          src="https://scontent.fbog2-4.fna.fbcdn.net/v/t39.30808-6/296472743_112368448232673_4184994046860488159_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=va4TrlaVQoEAX88Ybem&_nc_ht=scontent.fbog2-4.fna&oh=00_AT9nu6npSYfCDyqFZP_87f75-tMIdOT-Yvqu-sFH3Q_yxw&oe=62F95B33"
        />
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
        <img
          className="Card-img"
          src="https://scontent.fbog2-4.fna.fbcdn.net/v/t39.30808-6/297585577_112368464899338_2375240055097170737_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=TR9ZdfjvIoQAX9qdk8n&_nc_ht=scontent.fbog2-4.fna&oh=00_AT8g2jRiG3uq5d4m5wNWVsCcSbAgTiwX7Jh3p9US0IuaSQ&oe=62F94696"
        />
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
