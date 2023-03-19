import React from "react";

const TestimonialCard = ({ name, rating, comments, imageSrc }) => {
  return (
    <div className="testimonial">
      <h2>{rating}</h2>
      <div className="testimonial-row">
        <img src={imageSrc} alt="testimonial portrait" width="100"></img>
        <p>{name}</p>
      </div>
      <p>{comments}</p>
    </div>
  );
};
export default TestimonialCard;
