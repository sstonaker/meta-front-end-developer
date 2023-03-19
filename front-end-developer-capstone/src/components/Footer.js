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
          <p>Home</p>
          <p>Specials</p>
          <p>About</p>
        </div>
        <div className="column">
          <h3>Contact</h3>
          <p>+1 555 555 5555</p>
          <p>contact@littlelemon.com</p>
        </div>
        <div className="column">
          <h3>Social Media</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Linked In</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
