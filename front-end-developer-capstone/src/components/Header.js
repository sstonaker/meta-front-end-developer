import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>lorem ipsum</p>
      </div>
      <img
        src={require("../images/logo-vertical.png")}
        alt="little lemon logo"
        width="150"
      ></img>
    </header>
  );
};
export default Header;
