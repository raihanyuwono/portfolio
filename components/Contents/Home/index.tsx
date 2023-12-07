import Image from "next/image";
import "./style.css";
import Raining from "@/components/Backgrounds/Raining";

const photoProfile = { src: "/assets/images/profile.jpg", alt: "photo" };

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
          <span className="text-wrapper">"</span>As a dedicated learner with
          proficiency in web development, and problem-solving, I am eager to
          launch a career as a Backend or Frontend Developer. My knowledge spans
          software development and artificial intelligence, and I'm enthusiastic
          about leveraging these skills to contribute to cutting-edge projects
          in the field.
          <span className="text-wrapper">"</span>
        </p>
      </div>
      <Raining />
    </>
  );
}

export default Home;
