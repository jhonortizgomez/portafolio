import React from "react";
import { Nav } from "../../components/Nav";
import { InfoAboutMe } from "../InfoAboutMe";
import "../Main/styles.scss";

export const MainAboutMe = ({ title }) => {
  return (
    <section className="Main">
      <Nav title={title} />
      <InfoAboutMe />
    </section>
  );
};
