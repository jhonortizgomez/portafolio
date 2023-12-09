import React, { useContext } from "react";
import { appContext } from "@context/appContext";

import { ContactDescription } from "../../components/ContactDescription";
import { Networks } from "../../components/Networks";
import "../InformationHome/style.scss";

export const InfoContact = () => {
  const { darkMode } = useContext(appContext);
  return (
    <section className="Information">
      <ContactDescription />
      <Networks />
    </section>
  );
};
