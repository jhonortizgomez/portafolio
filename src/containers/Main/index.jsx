import React from "react";
import { Nav } from "../../components/Nav";
import { InformationHome } from "../InformationHome";
import "./styles.scss";

export const Main = ({ title }) => {
  return (
    <main className="Main">
      {<Nav title={title} />}
      {<InformationHome />}
    </main>
  );
};
