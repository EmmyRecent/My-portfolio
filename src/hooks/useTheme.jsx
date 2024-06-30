import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("mode") || "light");

  // A side effect to add the class name dark to the html tag and setting the modes to dark || light mode.
  useEffect(() => {
    const html = document.querySelector("html");

    if (theme === "dark") {
      html.classList.add("dark");
      localStorage.setItem("mode", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("mode", "light");
    }
  }, [theme]);

  // This function handles the toggling of light and dark mode state.
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === "light" ? "dark" : "light";
    });
  };

  return { theme, toggleTheme };
};

export default useTheme;
