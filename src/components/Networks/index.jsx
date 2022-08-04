import React from "react";
import { BsGithub } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import "animate.css";
import "./styles.scss";
import { Link } from "react-router-dom";

export const Networks = () => {
  return (
    <section className="Networks animate__animated animate__bounceInDown">
      <div className="Networks-container">
        <a href="https://bit.ly/wsppweb" target="_blank">
          <span className="Networks-container__whatsapp icon ">
            <IoLogoWhatsapp />
          </span>
        </a>
        <a href="https://bit.ly/linkedinjhonweb" target="_blank">
          <span className="Networks-container__linkedin icon">
            <BsLinkedin />
          </span>
        </a>
        <a href="https://bit.ly/github-jhon-web" target="_blank">
          <span className="Networks-container__github icon">
            <BsGithub />
          </span>
        </a>
        <a href="https://bit.ly/twitter-web-jhon" target="_blank">
          <span className="Networks-container__twitter icon">
            <BsTwitter />
          </span>
        </a>
        <a href="https://bit.ly/instagram-web-jhon" target="_blank">
          <span className="Networks-container__instagram icon">
            <BsInstagram />
          </span>
        </a>
      </div>
    </section>
  );
};
