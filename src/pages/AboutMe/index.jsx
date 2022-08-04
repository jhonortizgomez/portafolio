import React from "react";
import { Header } from "../../components/Header";
import { MainAboutMe } from "../../containers/MainAboutMe";

export const AboutMe = () => {
  const titleNav = "Sobre mi";

  return (
    <>
      <Header />
      <MainAboutMe title={titleNav} />
    </>
  );
};
