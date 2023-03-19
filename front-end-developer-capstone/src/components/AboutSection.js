import React from "react";

const AboutSection = () => {
  return (
    <section className="about">
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>lorem ipsum</p>
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
