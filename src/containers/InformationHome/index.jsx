import React, { useContext } from "react";
import { appContext } from "@context/appContext";

import { HomeLeft } from "@components/HomeLeft";
import { Technologies } from "@components/Technologies";
import "./style.scss";

export const InformationHome = () => {
  const { darkMode } = useContext(appContext);
  console.log("Info Darkmode", darkMode);
  return (
    <section className={`Information ${darkMode ? "darkMode" : "lightMode"}`}>
      <HomeLeft />
      <Technologies />
    </section>
  );
};
