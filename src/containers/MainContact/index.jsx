import React, { useContext } from "react";
import { appContext } from "@context/appContext";

import { Nav } from "../../components/Nav";
import { InfoContact } from "../InfoContact";

export const MainContact = () => {
  const { menuMobile, darkMode } = useContext(appContext);
  const titleContact = "Contacto";
  return (
    <main className={`Main ${darkMode ? "modeDark" : "modeLight"}`}>
      {!menuMobile && <Nav title={titleContact} />}
      {!menuMobile && <InfoContact />}
    </main>
  );
};
