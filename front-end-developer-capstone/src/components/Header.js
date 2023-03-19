import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Velit aliqua eiusmod adipisicing labore nulla. Veniam cillum proident
          magna labore consequat tempor amet aliqua incididunt voluptate nostrud
          nostrud qui velit. Ex magna aliquip labore mollit proident aliquip
          amet. Enim aute esse anim ullamco elit sint velit labore ad nisi sit.
          Deserunt aliquip proident cupidatat ea consequat magna sit officia
          deserunt in fugiat incididunt. Est eu aliqua aliquip pariatur
          reprehenderit minim fugiat eiusmod cillum elit dolore cupidatat.
        </p>
        <p>
          Ex nostrud nisi ipsum sit eu tempor enim nostrud aliqua laboris
          nostrud minim. Aliqua ad laborum non quis occaecat et cupidatat
          ullamco. Laborum aliquip non aliqua quis tempor magna. Commodo
          consequat nulla id aliqua cillum deserunt sunt irure officia.
        </p>
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
