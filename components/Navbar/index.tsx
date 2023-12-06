"use client"
import Link from "next/link";
import Menus from "../Menus";
import "./style.css";
import Image from "next/image";
import ThemeSwitcher from "../ThemeSwitcher";
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "@/providers/ThemeProvider";

const menus = [
  { content: "Home", href: "/" },
  { content: "About", href: "/about" },
  { content: "Projects", href: "/projects" },
];

function Navbar() {
  const {theme} = useContext(ThemeContext) as ThemeContextType;

  const icons = [
    {
      src: `/assets/icons/github-${theme}.svg`,
      alt: "Github",
      href: "https://github.com/raihanyuwono",
    },
    {
      src: `/assets/icons/linkedin-${theme}.svg`,
      alt: "Linkedin",
      href: "https://www.linkedin.com/in/muhammad-raihan-wahyu-yuwono-226518103/",
    },
  ];

  return (
    <header className="w-full">
      <nav className="nav">
        <Menus>
          {menus.map((menu) => (
            <Link className="menu" href={menu.href} key={menu.content}>
              {menu.content}
            </Link>
          ))}
        </Menus>
        <Menus classes="gap-1">
          {icons.map((icon) => (
            <Link href={icon.href} target="_blank" key={icon.alt}>
              <Image src={icon.src} alt={icon.alt} width={36} height={36} />
            </Link>
          ))}
          <ThemeSwitcher />
        </Menus>
      </nav>
    </header>
  );
}

export default Navbar;
