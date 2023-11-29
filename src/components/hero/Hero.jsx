import { useMediaQuery } from "react-responsive";
import { desktopHeaderImage } from "../../assets/images/desktop";
import { mobileHeaderImage } from "../../assets/images/mobile";

const Hero = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:640px)",
  });

  return (
    <section
      id="home"
      className="flex min-h-[33.65rem] flex-col items-center justify-center px-8 lg:min-h-[50rem]"
      style={{
        backgroundImage: `url("${
          isMobile ? mobileHeaderImage : desktopHeaderImage
        }")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 className="my-2 text-center font-Fraunces text-4xl font-black uppercase leading-snug tracking-[.25em] text-White lg:-mt-[8.3rem] lg:text-[3.15rem]">
        We are Creatives
      </h1>
      <svg
        width="36"
        height="114"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-10 lg:mt-[5.2rem]"
      >
        <g
          stroke="#FFF"
          strokeWidth="6"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 3v100M3 95.484l15 15 15-15" />
        </g>
      </svg>
    </section>
  );
};

export default Hero;
