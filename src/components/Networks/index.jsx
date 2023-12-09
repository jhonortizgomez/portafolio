import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import "animate.css";
import "./styles.scss";

export const Networks = () => {
  return (
    <section className="Networks animate__animated animate__bounceInDown">
      <div className="Networks-container">
        <a href="https://bit.ly/linkedinjhonweb" target="_blank">
          <span className="Networks-container__linkedin icon">
            <BsLinkedin fontSize={35} />
          </span>
        </a>
        <a href="https://bit.ly/github-jhon-web" target="_blank">
          <span className="Networks-container__github icon">
            <BsGithub fontSize={35} />
          </span>
        </a>
      </div>
      <p className="title-contact">Escribeme al correo</p>
      <div className="wrapper-form-contact">
        <form
          className="form-contact"
          action="https://formspree.io/f/mnqkdepg"
          method="POST"
        >
          <div className="container-form-name-email">
            <label className="label label-name">
              <input
                type="text"
                placeholder="Tu Nombre"
                name="Nombre"
                required
              />
            </label>
            <label className="label label-gmail">
              <input
                type="email"
                name="Email"
                placeholder="Tu Correo electrónico"
                required
              />
            </label>
          </div>

          <label className="label">
            <textarea
              placeholder="Escribeme un mensaje..."
              name="Mensaje"
              required
            ></textarea>
          </label>

          <button className="button-submit-form" value="Enviar" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};
