"use client";
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "@/providers/ThemeProvider";
import Image from "next/image";
import "./style.css";

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;
  const toggleClass = theme === "dark" ? "left-[30px]" : "left-[4px]";

  const icons = [
    { src: "/assets/icons/moon.svg", alt: "moon", hidden: theme === "dark" },
    { src: "/assets/icons/sun.svg", alt: "sun", hidden: theme === "light" },
  ];

  function switchTheme() {
    const changed = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", changed);
    localStorage.setItem("theme", changed);
    setTheme(changed);
  }

  return (
    <div className="theme-switcher" onClick={switchTheme}>
      {icons.map((icon) => (
        <Image
          src={icon.src}
          alt={icon.alt}
          key={icon.alt}
          width={24}
          height={24}
        />
      ))}
      <div className={`switch-toggle ${toggleClass}`}></div>
    </div>
  );
}

export default ThemeSwitcher;
