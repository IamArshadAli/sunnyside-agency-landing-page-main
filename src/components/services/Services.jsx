/* eslint-disable react/prop-types */
import { useMediaQuery } from "react-responsive";

import {
  desktopGraphicDesignImage,
  desktopPhotographyImage,
} from "../../assets/images/desktop";
import {
  mobileGraphicDesignImage,
  mobilePhotographyImage,
} from "../../assets/images/mobile";

import "./Services.css";

const Details = ({
  isMobile,
  mobileImage,
  desktopImage,
  title,
  description,
  className,
}) => {
  return (
    <article
      className={`services__article ${className}`}
      style={{
        backgroundImage: `url("${isMobile ? mobileImage : desktopImage}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      id="services"
    >
      <h3 className="services__article__title">{title}</h3>
      <p className="services__article__description">{description}</p>
    </article>
  );
};

const Services = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:640px)",
  });

  return (
    <section className="services">
      <Details
        isMobile={isMobile}
        mobileImage={mobileGraphicDesignImage}
        desktopImage={desktopGraphicDesignImage}
        className="services__article--graphic-design"
        title="Graphic Design"
        description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
      />
      <Details
        isMobile={isMobile}
        mobileImage={mobilePhotographyImage}
        desktopImage={desktopPhotographyImage}
        className="services__article--photography"
        title="Photography"
        description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
      />
    </section>
  );
};

export default Services;
