import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  PinterestIcon,
  SunnysideLogo,
} from "../../utils/svgIcons";

const Footer = () => {
  return (
    <footer
      className="flex min-h-[21.75rem] flex-col items-center bg-DarkModerateCyan bg-opacity-75 py-16"
      id="contact"
    >
      <SunnysideLogo
        width={124}
        height={24}
        className="mb-8 fill-DarkDesaturatedCyan"
      />
      <ul className="mb-24 flex gap-[3.5rem] text-lg text-DarkDesaturatedCyan">
        <li className="hover:text-White">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-White">
          <a href="#services">Services</a>
        </li>
        <li className="hover:text-White">
          <a href="#projects">Projects</a>
        </li>
      </ul>
      <div className="flex gap-8">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <PinterestIcon />
      </div>
    </footer>
  );
};

export default Footer;
