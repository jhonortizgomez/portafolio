import React, { useContext } from "react";
import { appContext } from "@context/appContext";

import { Nav } from "../../components/Nav";
import { InfoAboutMe } from "../InfoAboutMe";
import "../Main/styles.scss";

export const MainAboutMe = ({ title }) => {
  const { menuMobile, darkMode } = useContext(appContext);

  return (
    <section className={`Main ${darkMode ? "modeDark" : "modeLight"}`}>
      {!menuMobile && <Nav title={title} />}
      {!menuMobile && <InfoAboutMe />}
    </section>
  );
};
