import PropTypes from "prop-types";
import Progress from "../Progress";

const AmountConsumed = ({ amount }) => {
  return (    
    <div className="amount-consumed">
      <Progress value={amount} />
    </div>
  );
};

AmountConsumed.propTypes = {
  amount: PropTypes.number.isRequired
};

export default AmountConsumed;