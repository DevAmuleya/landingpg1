import React, { useState, useEffect } from "react";
import LightButton from "../assets/website/light-mode-button.png";
import DarkButton from "../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; // html element

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className=" top-14 right-4 lg:right-8 w-10 h-5 absolute">
      {/* Light Mode Button */}
      <img
        src={LightButton}
        alt="Light Mode"
        onClick={() => setTheme("dark")}
        className={`absolute top-0 left-0 w-full h-full cursor-pointer transition-opacity duration-300 ${
          theme === "dark" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />
      {/* Dark Mode Button */}
      <img
        src={DarkButton}
        alt="Dark Mode"
        onClick={() => setTheme("light")}
        className={`absolute top-0 left-0 w-full h-full cursor-pointer transition-opacity duration-300 ${
          theme === "dark" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
    </div>
  );
};

export default DarkMode;
