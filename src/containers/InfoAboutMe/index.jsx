import React, { useContext } from "react";
import { appContext } from "@context/appContext";

import { AboutMeDescription } from "../../components/AboutMeDescription";
import { Technologies } from "../../components/Technologies";

export const InfoAboutMe = () => {
  const { darkMode } = useContext(appContext);
  return (
    <section className={`Information ${darkMode ? "darkMode" : "lightMode"}`}>
      <AboutMeDescription />
      <Technologies />
    </section>
  );
};
