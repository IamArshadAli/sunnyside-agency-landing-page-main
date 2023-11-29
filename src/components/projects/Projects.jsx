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
    <section className="flex min-h-[23.25rem] flex-wrap outline" id="projects">
      {isMobile ? (
        <>
          {projects.mobile.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={index}
              className="w-1/2 object-cover object-center md:max-h-[22rem] lg:w-[25%]"
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
              className="w-1/2 object-cover object-center md:max-h-[22rem] lg:w-[25%]"
            />
          ))}
        </>
      )}
    </section>
  );
};

export default Projects;
