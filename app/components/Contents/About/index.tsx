"use client";
import CardSkill, { ISkill } from "@/app/components/Cards/CardSkill";
import "./style.css";
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "@/app/providers/ThemeProvider";

function About() {
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  const skills: Array<ISkill> = [
    { src: `/assets/icons/javascript.svg`, alt: "JavaScript" },
    { src: `/assets/icons/typescript.svg`, alt: "TypeScript" },
    { src: `/assets/icons/reactjs.svg`, alt: "ReactJS" },
    { src: `/assets/icons/nextjs-${theme || "light"}.svg`, alt: "NextJS" },
    { src: `/assets/icons/tailwind.svg`, alt: "Tailwind CSS" },
    { src: `/assets/icons/python.svg`, alt: "Python" },
  ];

  return (
    <div className="content">
      {/* About */}

      {/* Skills */}
      <section>
        <h1 className="title">Skills</h1>
        <div className="skill-container">
          {skills.map((skill) => (
            <CardSkill skill={skill} key={skill.alt} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
