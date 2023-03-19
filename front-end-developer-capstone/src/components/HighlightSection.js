import React from "react";
import DishCard from "./DishCard";

const dishes = [
  {
    title: "Penne Pasta",
    price: "$12.00",
    description:
      "Perfect al-dente penne tossed in our homemade tomato-based bolognese accompanied by a garlic toast wedge.",
    getImageSrc: () => require("../images/pasta.jpg"),
  },
  {
    title: "Chicken Kebabs",
    price: "$15.00",
    description:
      "Tender pieces of marinated chicken skewered between sweet onion and bell pepper pieces. Grilled to perfection.",
    getImageSrc: () => require("../images/grill.jpg"),
  },
  {
    title: "Greek Salad",
    price: "$8.00",
    description:
      "Rich green romaine in large chunks tossed with olives and peppers. Topped with chunk feta and fresh herbs.",
    getImageSrc: () => require("../images/salad.jpg"),
  },
];

const HighlightSection = () => {
  return (
    <section className="specials">
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
