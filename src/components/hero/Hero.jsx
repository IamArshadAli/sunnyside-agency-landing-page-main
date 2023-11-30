import { useMediaQuery } from "react-responsive";
import { desktopHeaderImage } from "../../assets/images/desktop";
import { mobileHeaderImage } from "../../assets/images/mobile";
import { ArrowDown } from "../../utils/svgIcons";

import "./Hero.css"

const Hero = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:640px)",
  });

  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `url("${
          isMobile ? mobileHeaderImage : desktopHeaderImage
        }")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 className="hero__title">We are Creatives</h1>
      <ArrowDown className="hero__icon" />
    </section>
  );
};

export default Hero;
