import PropTypes from "prop-types";
import AmountConsumed from "./AmountConsumed";
import Image from "../Image";

const Wine = ({ wine }) => {
  return (
    <div className="wine">
      <Image src={wine.imageUrl} alt={wine.label} />
      {
        wine.isNew && <span className="new-badge">New!</span>
      }
      {
        wine.progress && <AmountConsumed amount={wine.progress} />
      }
    </div>
  );
};

Wine.propTypes = {
  wine: PropTypes.shape({
    label: PropTypes.string,
    imageUrl: PropTypes.string,
    isNew: PropTypes.bool,
    progress: PropTypes.number
  })  
};

export default Wine;