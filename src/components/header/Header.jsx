/* eslint-disable react/prop-types */
import { useMediaQuery } from "react-responsive";
import { logo, hamburgerIcon } from "../../assets/images";
import { useState } from "react";

const NavLinks = ({ className }) => {
  return (
    <ul
      className={`flex flex-col gap-7 items-center md:flex-row lg:pr-2 lg:text-lg lg:gap-12 lg:mt-[.1rem] ${
        className ? className : "text-White"
      }`}
    >
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li className="rounded-full bg-Yellow px-8 py-5 font-Fraunces text-sm uppercase text-VeryDarkDesaturatedBlue md:bg-White lg:py-[1.15rem] lg:px-[2.15rem]">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

const Header = () => {
  const [active, setActive] = useState(false);
  const isMobile = useMediaQuery({
    query: "(max-width:640px)",
  });

  return (
    <header className="absolute flex w-full items-center justify-between px-6 pt-8 lg:px-10">
      <a href="#home">
        <img src={logo} alt="Sunnyside logo" className="lg:w-[10.58rem]" />
      </a>
      {isMobile ? (
        <>
          <figure>
            <img
              src={hamburgerIcon}
              alt="hamburger"
              className="h-5"
              onClick={() => setActive((prev) => !prev)}
            />
          </figure>
          {active && (
            <NavLinks className="absolute top-[6.65rem] w-full max-w-[20.45rem] items-center bg-White py-10 text-lg font-semibold text-DarkGrayishBlue after:absolute after:-top-6 after:right-0 after:h-0 after:w-0  after:border-r-[1.5rem] after:border-t-[1.5rem] after:border-r-White after:border-t-transparent" />
          )}
        </>
      ) : (
        <NavLinks />
      )}
    </header>
  );
};

export default Header;
