/* eslint-disable react/prop-types */
import { emilyImage, thomasImage, jennieImage } from "../../assets/images";

import "./Testimonials.css"

const Feedback = ({ avatar, name, designation, message }) => {
  return (
    <article className="testimonials__feedback__article">
      <figure>
        <img src={avatar} alt={name} className="testimonials__feedback__article__avatar" />
      </figure>
      <p className="testimonials__feedback__article__message">{message}</p>
      <h4 className="testimonials__feedback__article__name">{name}</h4>
      <p className="testimonials__feedback__article__designation">{designation}</p>
    </article>
  );
};

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h3 className="testimonials__heading">
        Client Testimonials
      </h3>
      <div className="testimonials__feedback">
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
