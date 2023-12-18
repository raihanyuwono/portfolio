import Image from "next/image";
import "./style.css";
import Raining from "@/app/components/Backgrounds/Raining";

const photoProfile = { src: "/assets/images/profile.jpg", alt: "photo" };

function Home() {
  return (
    <>
      <div className="content content-homepage">
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
          <span className="title-job">Web Developer</span>
          <span className="quotes">
            Hi, I am Raihan.
          </span>
        </p>
      </div>
      <Raining />
    </>
  );
}

export default Home;
