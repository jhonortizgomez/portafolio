import React, { useContext } from "react";
import { appContext } from "@context/appContext";

import { Nav } from "../../components/Nav";
import { InfoProjects } from "../InfoProjects";

export const MainProjects = () => {
  const { menuMobile, darkMode } = useContext(appContext);
  const title = "Proyectos";
  return (
    <section className={`Main ${darkMode ? "modeDark" : "modeLight"}`}>
      {!menuMobile && <Nav title={title} />}
      {!menuMobile && <InfoProjects />}
    </section>
  );
};
