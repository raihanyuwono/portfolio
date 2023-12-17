import { Props } from "@/app/interfaces/IProps";
import Image from "next/image";

export interface ISkill {
  src: string;
  alt: string;
}

interface CardProps extends Props {
  skill?: ISkill;
}

function CardSkill({ skill }: CardProps) {
  return (
    <div className="card-skill">
      {/* <Image src={skill?.src} alt={skill?.alt} /> */}
    </div>
  );
}

export default CardSkill;
