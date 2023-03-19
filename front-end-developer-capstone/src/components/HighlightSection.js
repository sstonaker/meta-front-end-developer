import React from "react";
import DishCard from "./DishCard";

const dishes = [
  {
    title: "pasta",
    price: "$12.00",
    description: "pasta",
    getImageSrc: () => require("../images/pasta.jpg"),
  },
  {
    title: "kebabs",
    price: "$15.00",
    description: "kebabs",
    getImageSrc: () => require("../images/grill.jpg"),
  },
  {
    title: "salad",
    price: "$8.00",
    description: "salad",
    getImageSrc: () => require("../images/salad.jpg"),
  },
];

const HighlightSection = () => {
  return (
    <section>
      <h1 className="section-title">Specials</h1>
      <div className="dishes">
        {dishes.map((dish) => (
          <DishCard
            key={dish.title}
            title={dish.title}
            price={dish.price}
            description={dish.description}
            imageSrc={dish.getImageSrc()}
          />
        ))}
      </div>
    </section>
  );
};
export default HighlightSection;
