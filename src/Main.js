// Main.js
import React from "react";
import Category from "./Category";

const Main = ({ winesData }) => {
  // Group the winesData based on category
  const groupedWines = winesData.reduce((acc, wine) => {
    if (acc[wine.category]) {
      acc[wine.category].push(wine);
    } else {
      acc[wine.category] = [wine];
    }
    return acc;
  }, {});

  return (
    <main>
      {Object.entries(groupedWines).map(([category, wines]) => (
        <Category key={category} title={category} wines={wines} />
      ))}
    </main>
  );
};

export default Main;