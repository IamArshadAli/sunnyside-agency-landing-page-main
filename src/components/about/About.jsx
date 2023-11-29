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

const Details = ({
  isMobile,
  mobileImage,
  desktopImage,
  title,
  description,
  className,
  highlight,
  articleStyle,
  titleStyle,

}) => {
  return (
    <div className={`flex flex-col ${className} lg:w-full outline`}>
      <figure
        className="min-h-[19.5rem] md:w-[50%] lg:min-h-[37.5rem]"
        style={{
          backgroundImage: `url("${isMobile ? mobileImage : desktopImage}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></figure>
      <article
        className={`flex-1 px-6 py-16 text-center lg:text-left ${articleStyle} outline`}
      >
        <h3 className={`font-Fraunces text-4xl font-bold text-VeryDarkDesaturatedBlue lg:text-[2.45rem] lg:font-black lg:leading-[3rem] ${titleStyle}`}>
          {title}
        </h3>
        <p className="pb-9 pt-6 text-lg leading-[1.6] text-DarkGrayishBlue lg:pt-4">
          {description}
        </p>
        <a
          href="#"
          className={`font-Fraunces uppercase ${highlight} relative font-bold after:absolute after:-bottom-[.1rem] after:-left-1.5 after:z-[-1] after:h-2 after:w-[110%] after:rounded-full after:bg-opacity-40 after:content-[""]`}
        >
          Learn More
        </a>
      </article>
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
        className="md:flex-row-reverse"
        articleStyle="lg:max-w-[450px] -ml-44 self-center"
        highlight="after:bg-Yellow hover:after:bg-opacity-100"
        title="Transform your brand"
        description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
      />
      <Details
        isMobile={isMobile}
        mobileImage={mobileStandOutImage}
        desktopImage={desktopStandOutImage}
        className="md:flex-row"
        highlight="after:bg-SoftRed hover:after:bg-opacity-100"
        title="Stand out to the right audience"
        description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
      />
    </section>
  );
};

export default About;
