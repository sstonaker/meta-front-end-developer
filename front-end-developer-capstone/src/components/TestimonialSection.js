import React from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    rating: "⭐⭐⭐⭐⭐",
    name: "Sue",
    comments: "lorem",
    getImageSrc: () => require("../images/pasta.jpg"),
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    name: "Joe",
    comments: "lorem",
    getImageSrc: () => require("../images/pasta.jpg"),
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    name: "Bob",
    comments: "lorem",
    getImageSrc: () => require("../images/salad.jpg"),
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    name: "Steve",
    comments: "lorem",
    getImageSrc: () => require("../images/salad.jpg"),
  },
];

const TestimonialSection = () => {
  return (
    <section>
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
