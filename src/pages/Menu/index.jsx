import React from "react";
import { Header } from "../../components/Header";
import "./styles.scss";

export const Menu = () => {
  const active = true;
  return (
    <section className="Menu">
      <Header display={active} />
    </section>
  );
};
