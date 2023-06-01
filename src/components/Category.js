// Category.js
import WineList from "./WineList";

const Category = ({ title, wines }) => {
  return (
    <section className="category">
      <h2>{title}</h2>
      <WineList wines={wines} />
    </section>
  );
};

export default Category;
