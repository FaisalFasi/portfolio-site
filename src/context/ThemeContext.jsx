import React, { useEffect, createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // ?? means if the value is null or undefined, it will use the value after ??
  const initialIsDarkMode =
    JSON.parse(localStorage.getItem("isDarkMode")) ?? true; // Change false to true

  // JSON.parse(localStorage.getItem("isDarkMode")) || false;

  const [isDarkMode, setIsDarkMode] = useState(initialIsDarkMode);

  const toggleDarkMode = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };
  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
