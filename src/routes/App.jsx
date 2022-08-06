import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { AboutMe } from "../pages/AboutMe";
import { Projects } from "../pages/Projects";
import { Contact } from "../pages/Contact";
import { Menu } from "../pages/Menu";
import "../styles/App.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portafolio" element={<Home />} />
        <Route path="/portafolio/about-me" element={<AboutMe />} />
        <Route path="/portafolio/projects" element={<Projects />} />
        <Route path="/portafolio/contact" element={<Contact />} />
        <Route path="/portafolio/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
};
