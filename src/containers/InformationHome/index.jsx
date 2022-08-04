import React from "react";
import { HomeLeft } from "../../components/HomeLeft";
import { Technologies } from "../../components/Technologies";
import "./style.scss";

export const InformationHome = () => {
  return (
    <section className="Information">
      <HomeLeft />
      <Technologies />
    </section>
  );
};
