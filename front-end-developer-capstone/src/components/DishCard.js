import React from "react";

const DishCard = ({ title, price, description, imageSrc }) => {
  return (
    <div className="dish">
      <div>
        <img src={imageSrc} alt="pasta dish" width="200"></img>
        <div className="card-title">
          <h3>{title}</h3>
          <p className="price">{price}</p>
        </div>
        <p>{description}</p>
        <h4>🛵 Order a delivery</h4>
      </div>
    </div>
  );
};
export default DishCard;
