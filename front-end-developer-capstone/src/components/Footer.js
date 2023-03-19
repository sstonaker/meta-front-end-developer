import React from "react";

const Footer = () => {
  return (
    <footer className="footer-row">
      <img
        src={require("../images/logo-color.png")}
        alt="lemon logo in color"
        width="100"
      ></img>
      <div className="row">
        <div className="column">
          <h3>Doormat Navigation</h3>
          <p>lorem ipsum</p>
        </div>
        <div className="column">
          <h3>Contact</h3>
          <p>lorem ipsum</p>
        </div>
        <div className="column">
          <h3>Social Media</h3>
          <p>lorem ipsum</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
