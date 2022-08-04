import React from "react";
import { ContactDescription } from "../../components/ContactDescription";
import { Networks } from "../../components/Networks";
import "../InformationHome/style.scss";

export const InfoContact = () => {
  return (
    <section className="Information">
      <ContactDescription />
      <Networks />
    </section>
  );
};
