import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { appContext } from "../context/appContext";
import { useInicialState } from "@hooks/useInicialState";

import { Home } from "@pages/Home";
import { Projects } from "@pages/Projects";
import { Contact } from "@pages/Contact";
import "./App.scss";

export const App = () => {
  const incialState = useInicialState();
  return (
    <appContext.Provider value={incialState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </appContext.Provider>
  );
};
