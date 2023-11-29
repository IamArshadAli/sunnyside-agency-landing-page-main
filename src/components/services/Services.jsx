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

const Details = ({
  isMobile,
  mobileImage,
  desktopImage,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={`flex min-h-[37.5rem] flex-1 flex-col justify-end px-4 py-16 text-center md:max-h-[19.5rem] ${className}`}
      style={{
        backgroundImage: `url("${isMobile ? mobileImage : desktopImage}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      id="services"
    >
      <h3 className="font-Fraunces text-3xl font-bold">{title}</h3>
      <p className="mt-8 font-semibold">{description}</p>
    </div>
  );
};

const Services = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:640px)",
  });

  return (
    <section className="flex flex-col md:flex-row">
      <Details
        isMobile={isMobile}
        mobileImage={mobileGraphicDesignImage}
        desktopImage={desktopGraphicDesignImage}
        className="text-DarkDesaturatedCyan"
        title="Graphic Design"
        description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
      />
      <Details
        isMobile={isMobile}
        mobileImage={mobilePhotographyImage}
        desktopImage={desktopPhotographyImage}
        className="text-DarkDesaturatedCyan"
        title="Photography"
        description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
      />
    </section>
  );
};

export default Services;
