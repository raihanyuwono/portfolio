import CardSkill, { ISkill } from "@/app/components/Cards/CardSkill";
import "./style.css";

const skills:Array<ISkill> = [
  { src: "", alt: "" },
  { src: "", alt: "" },
];

function About() {
  return (
    <div className="content">
      <div>About</div>
      {/* About */}

      {/* Skills */}
      <section>
        <h1 className="title">Skills</h1>
        {skills.map((skill) => (
          <CardSkill skill={skill} />
        ))}
      </section>
    </div>
  );
}

export default About;
