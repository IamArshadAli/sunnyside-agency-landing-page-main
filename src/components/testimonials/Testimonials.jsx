/* eslint-disable react/prop-types */
import { emilyImage, thomasImage, jennieImage } from "../../assets/images";

const Feedback = ({ avatar, name, designation, message }) => {
  return (
    <article className="flex flex-col items-center gap-8 md:max-w-xs md:mx-auto">
      <figure>
        <img src={avatar} alt={name} className="w-[4.5rem] rounded-full" />
      </figure>
      <p className="text-lg leading-8 text-DarkGrayishBlue">{message}</p>
      <h4 className="font-Fraunces text-xl font-bold">{name}</h4>
      <p className="-mt-6 text-sm text-GrayishBlue">{designation}</p>
    </article>
  );
};

const Testimonials = () => {
  return (
    <section className="px-6 pb-[5.5rem] pt-16 text-center">
      <h3 className="font-Fraunces text-lg font-bold uppercase tracking-[.18em] text-GrayishBlue">
        Client Testimonials
      </h3>
      <div className="mt-14 flex flex-col gap-16 md:flex-row md:flex-wrap md:gap-10">
        <Feedback
          avatar={emilyImage}
          name="Emily R."
          designation="Marketing Director"
          message="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
        />
        <Feedback
          avatar={thomasImage}
          name="Thomas S."
          designation="Chief Operating Officer"
          message="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
        />
        <Feedback
          avatar={jennieImage}
          name="Jennie F."
          designation="Business Owner"
          message="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
        />
      </div>
    </section>
  );
};

export default Testimonials;
