import React, { useContext } from "react";
import { appContext } from "@context/appContext";

import { Nav } from "../../components/Nav";
import { InformationHome } from "../InformationHome";
import "./styles.scss";

export const Main = ({ title }) => {
  const { menuMobile, darkMode } = useContext(appContext);
  return (
    <main className={`Main ${darkMode ? "modeDark" : "modeLight"}`}>
      {!menuMobile && <Nav title={title} />}
      {!menuMobile && <InformationHome />}
    </main>
  );
};
