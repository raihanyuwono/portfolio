import Image from "next/image";
import "./style.css";
import Raining from "@/components/Backgrounds/Raining";

const photoProfile = { src: "/assets/images/profile.jpg", alt: "photo" };
const tools = [
  {src:"", alt:"ReactJS"},
  {src:"", alt:"NextJS"},
  {src:"", alt:"Tailwind CSS"},
]

function Home() {
  return (
    <>
      <div className="content">
        <Image
          className="frame"
          src={photoProfile.src}
          alt={photoProfile.alt}
          width={256}
          height={256}
          priority={true}
        />
        <div className="separator" />
        <p className="greeting">
          <span className="title">Web Developer</span>
          <span className="quotes">Lalal</span>
        </p>
      </div>
      <Raining />
    </>
  );
}

export default Home;
