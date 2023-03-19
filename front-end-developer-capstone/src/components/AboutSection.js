import React from "react";

const AboutSection = () => {
  return (
    <section className="about">
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Ex nostrud nisi ipsum sit eu tempor enim nostrud aliqua laboris
          nostrud minim. Aliqua ad laborum non quis occaecat et cupidatat
          ullamco. Laborum aliquip non aliqua quis tempor magna. Commodo
          consequat nulla id aliqua cillum deserunt sunt irure officia.
        </p>
      </div>
      <img
        src={require("../images/chef.jpg")}
        alt="little lemon logo"
        width="500"
      ></img>
    </section>
  );
};
export default AboutSection;
