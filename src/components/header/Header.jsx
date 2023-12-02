/* eslint-disable react/prop-types */
import { useMediaQuery } from "react-responsive";
import { logo, hamburgerIcon } from "../../assets/images";
import { useState } from "react";

import "./Header.css";

const NavLinks = ({ className }) => {
  return (
    <ul className={`header__nav ${className ? className : "header__nav--text-white"}`}>
      <li>
        <a href="#about" className="header__nav__link">
          About
        </a>
      </li>
      <li>
        <a href="#services" className="header__nav__link">
          Services
        </a>
      </li>
      <li>
        <a href="#projects" className="header__nav__link">
          Projects
        </a>
      </li>
      <li className="header__nav__button">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

const Header = () => {
  const [active, setActive] = useState(false);
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <header className="header">
      <a href="#home">
        <img src={logo} alt="Sunnyside logo" className="header__logo" />
      </a>
      {isMobile ? (
        <>
          <figure>
            <img
              src={hamburgerIcon}
              alt="hamburger"
              className="header__icon"
              onClick={() => setActive((prev) => !prev)}
            />
          </figure>
          {active && <NavLinks className="header__nav--mobile" />}
        </>
      ) : (
        <NavLinks />
      )}
    </header>
  );
};

export default Header;
