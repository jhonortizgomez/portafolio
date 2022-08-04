import React from "react";
import { Nav } from "../../components/Nav";
import { InfoProjects } from "../InfoProjects";

export const MainProjects = () => {
  const title = "Proyectos";
  return (
    <section className="Main">
      <Nav title={title} />
      <InfoProjects />
    </section>
  );
};
