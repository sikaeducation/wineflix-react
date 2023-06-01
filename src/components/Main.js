// Main.js
import Category from "./Category";
const Main = ({ winesData }) => {
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