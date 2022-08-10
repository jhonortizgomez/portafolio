import { useState } from "react";

export const useInicialState = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenuMobile = () => {
    setMenuMobile(!menuMobile);
  };

  const toggleHeader = () => {
    setMenuMobile(false);
  };

  return {
    menuMobile,
    darkMode,
    toggleDarkMode,
    toggleMenuMobile,
    toggleHeader,
  };
};
