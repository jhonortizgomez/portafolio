import React from "react";
import { AboutMeDescription } from "../../components/AboutMeDescription";
import { Technologies } from "../../components/Technologies";

export const InfoAboutMe = () => {
  return (
    <section className="Information">
      <AboutMeDescription />
      <Technologies />
    </section>
  );
};
