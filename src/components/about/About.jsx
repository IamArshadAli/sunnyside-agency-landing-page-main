/* eslint-disable react/prop-types */
import { useMediaQuery } from "react-responsive";
import {
  desktopTransformImage,
  desktopStandOutImage,
} from "../../assets/images/desktop";
import {
  mobileTransformImage,
  mobileStandOutImage,
} from "../../assets/images/mobile";

import "./About.css";

const Details = ({
  isMobile,
  mobileImage,
  desktopImage,
  title,
  description,
  className,
  highlight,
  articleStyle,
}) => {
  return (
    <div className={`about ${className}`}>
      <figure
        className="about__image"
        style={{
          backgroundImage: `url("${isMobile ? mobileImage : desktopImage}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></figure>
      <div className="about__article">
        <article className={articleStyle}>
          <h3 className="about__article__title">{title}</h3>
          <p className="about__article__description">{description}</p>
          <a href="#" className={`about_article__link ${highlight}`}>
            Learn More
          </a>
        </article>
      </div>
    </div>
  );
};

const About = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:640px)",
  });

  return (
    <section id="about">
      <Details
        isMobile={isMobile}
        mobileImage={mobileTransformImage}
        desktopImage={desktopTransformImage}
        className="about--transform"
        articleStyle="about__article--transform"
        highlight="about_article__link--transform"
        title="Transform your brand"
        description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
      />
      <Details
        isMobile={isMobile}
        mobileImage={mobileStandOutImage}
        desktopImage={desktopStandOutImage}
        className="about--stand-out"
        articleStyle="about__article--stand-out"
        highlight="about_article__link--stand-out"
        title="Stand out to the right audience"
        description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
      />
    </section>
  );
};

export default About;
