import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  PinterestIcon,
  SunnysideLogo,
} from "../../utils/svgIcons";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <SunnysideLogo width={124} height={24} className="footer__logo" />
      <ul className="footer__nav">
        <li className="footer__nav__link">
          <a href="#about">About</a>
        </li>
        <li className="footer__nav__link">
          <a href="#services">Services</a>
        </li>
        <li className="footer__nav__link">
          <a href="#projects">Projects</a>
        </li>
      </ul>
      <div className="footer__social">
        <a href="#">
          <FacebookIcon className="footer__social__icon" />
        </a>
        <a href="#">
          <InstagramIcon className="footer__social__icon" />
        </a>
        <a href="#">
          <TwitterIcon className="footer__social__icon" />
        </a>
        <a href="#">
          <PinterestIcon className="footer__social__icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
