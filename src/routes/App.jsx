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
        <Route path="/dist" element={<Home />} />
        <Route path="/dist/about-me" element={<AboutMe />} />
        <Route path="/dist/projects" element={<Projects />} />
        <Route path="/dist/contact" element={<Contact />} />
        <Route path="/dist/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
};
