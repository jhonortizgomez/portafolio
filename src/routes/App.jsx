import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { appContext } from "../context/appContext";
import { useInicialState } from "@hooks/useInicialState";

import { Home } from "@pages/Home";
import { AboutMe } from "@pages/AboutMe";
import { Projects } from "@pages/Projects";
import { Contact } from "@pages/Contact";
import "@styles/App.scss";

export const App = () => {
  const incialState = useInicialState();
  return (
    <appContext.Provider value={incialState}>
      <BrowserRouter>
        <Routes>
          <Route path="/portafolio/" element={<Home />} />
          <Route path="/portafolio/about-me" element={<AboutMe />} />
          <Route path="/portafolio/projects" element={<Projects />} />
          <Route path="/portafolio/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </appContext.Provider>
  );
};
