import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getWines } from "../../services/winesService";
import Wine from "./Wine";

const Category = ({ category }) => {
  const [wineList, setWineList] = useState([]);
  useEffect(() => {
    // IRL this would be async but I am keeping things simple for this
    setWineList(getWines(category));
  }, [category]);
  
  return (
    <section className="category">
        <h2>{category}</h2>
        <ul>
          {
            wineList.map(wine => 
              <li key={`${category}_${wine.id}`}>
                <Wine wine={wine} />
              </li>
            )
          }
        </ul>
      </section>
  );
};

Category.propTypes = {
  category: PropTypes.string.isRequired
};

export default Category;