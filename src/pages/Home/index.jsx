import React, { useContext } from "react";
import { appContext } from "@context/appContext";

import { Header } from "../../components/Header";
import { Main } from "../../containers/Main";

export const Home = () => {
  const titleNavHome = "Inicio";
  return (
    <>
      <Header />
      <Main title={titleNavHome} />
    </>
  );
};
