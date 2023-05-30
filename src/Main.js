// Main.js
import React from "react";
import Category from "./Category";

const Main = ({ groupedWines }) => {
  return (
    <main>
      {Object.entries(groupedWines).map(([category, wines]) => (
        <Category key={category} title={category} wines={wines} />
      ))}
    </main>
  );
};

export default Main;
