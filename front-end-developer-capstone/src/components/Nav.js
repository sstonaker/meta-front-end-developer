import React from "react";

const Nav = () => {
  return (
    <nav className="nav">
      <img
        src={require("../images/logo.png")}
        alt="little lemon logo"
        width="400"
      ></img>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#home">Reservations</a>
        </li>
        <li>
          <a href="#home">Order Online</a>
        </li>
        <li>
          <a href="#home">Login</a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
