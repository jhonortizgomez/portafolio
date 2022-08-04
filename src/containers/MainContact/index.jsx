import React from "react";
import { Nav } from "../../components/Nav";
import { InfoContact } from "../InfoContact";

export const MainContact = () => {
  const titleContact = "Contacto";
  return (
    <main className="Main">
      <Nav title={titleContact} />
      <InfoContact />
    </main>
  );
};
