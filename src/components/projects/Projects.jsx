import { useMediaQuery } from "react-responsive";

import {
  desktopGalleryConeImage,
  desktopGalleryMilkbottlesImage,
  desktopGalleryOrangeImage,
  desktopGallerySugarcubesImage,
} from "../../assets/images/desktop";

import {
  mobileGalleryConeImage,
  mobileGalleryMilkbottlesImage,
  mobileGalleryOrangeImage,
  mobileGallerySugarCubesImage,
} from "../../assets/images/mobile";

import "./Projects.css";

const Projects = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:640px)",
  });

  const projects = {
    desktop: [
      desktopGalleryMilkbottlesImage,
      desktopGalleryOrangeImage,
      desktopGalleryConeImage,
      desktopGallerySugarcubesImage,
    ],
    mobile: [
      mobileGalleryMilkbottlesImage,
      mobileGalleryOrangeImage,
      mobileGalleryConeImage,
      mobileGallerySugarCubesImage,
    ],
  };

  return (
    <section className="projects" id="projects">
      {isMobile ? (
        <>
          {projects.mobile.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={index}
              className="projects__images"
            />
          ))}
        </>
      ) : (
        <>
          {projects.desktop.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={index}
              className="projects__images"
            />
          ))}
        </>
      )}
    </section>
  );
};

export default Projects;
