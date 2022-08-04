import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoSass } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import "./styles.scss";

export const Technologies = () => {
  return (
    <div className="Technologies">
      <div className="Technologies-icons">
        <span className="react box">
          <FaReact />
        </span>
        <span className="js box">
          <IoLogoJavascript />
        </span>
      </div>
      <div className="Technologies-icons box">
        <span className="webpack box">
          <SiBootstrap />
        </span>
        <span className="sass box">
          <IoLogoSass />
        </span>
      </div>
      <div className="Technologies-icons box">
        <span className="webpack box">
          <SiReactrouter />
        </span>
        <span className="sass box">
          <SiWebpack />
        </span>
      </div>

      <div className="Technologies-icons box">
        <span className="html box">
          <AiFillHtml5 />
        </span>
        <span className="css box">
          <FaCss3Alt />
        </span>
      </div>
    </div>
  );
};
