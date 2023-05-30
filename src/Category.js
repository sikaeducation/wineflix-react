// Category.js
import React from "react";
import Wine from "./Wine";

const Category = ({ title, wines }) => {
  return (
    <section className="category">
      <h2>{title}</h2>
      <ul>
        {wines.map((wine) => (
          <Wine
            key={wine.id}
            imageUrl={wine.imageUrl}
            isNew={wine.isNew}
            label={wine.label}
            isFinished={wine.isFinished}
            progress={wine.progress}
          />
        ))}
      </ul>
    </section>
  );
};

export default Category;
