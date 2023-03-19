import React from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    rating: "⭐⭐⭐⭐⭐",
    name: "Sue",
    comments:
      "Anim aute incididunt exercitation mollit dolor ipsum in cupidatat est. Cillum tempor esse occaecat aliquip enim laborum proident. Adipisicing laboris do magna nostrud culpa.",
    getImageSrc: () => "https://randomuser.me/api/portraits/lego/0.jpg",
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    name: "Joe",
    comments:
      "Cupidatat laboris id excepteur culpa pariatur aliqua sunt labore laboris reprehenderit culpa. Consectetur cillum laboris excepteur occaecat velit in non minim aute mollit eu minim consequat id.",
    getImageSrc: () => "https://randomuser.me/api/portraits/lego/1.jpg",
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    name: "Bob",
    comments:
      "Consectetur pariatur nostrud dolore ullamco est Lorem dolore dolor consectetur esse. Laborum ex excepteur magna proident irure adipisicing eiusmod dolore incididunt est. Do non consequat excepteur cupidatat minim.",
    getImageSrc: () => "https://randomuser.me/api/portraits/lego/2.jpg",
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    name: "Steve",
    comments:
      "Est ullamco veniam tempor excepteur fugiat dolore cupidatat pariatur aliquip. Cillum laborum anim do incididunt proident laboris sit aliquip enim eiusmod dolor. Culpa ex ea ad in commodo qui ea labore.",
    getImageSrc: () => "https://randomuser.me/api/portraits/lego/3.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <h1 className="section-title-center">Testimonials</h1>
      <div className="testimonials">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            name={testimonial.name}
            rating={testimonial.rating}
            comments={testimonial.comments}
            imageSrc={testimonial.getImageSrc()}
          />
        ))}
      </div>
    </section>
  );
};
export default TestimonialSection;
