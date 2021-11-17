import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types";

const HeroButton = ({ text, icon, isPrimary }) => {
  const getClassName = () => isPrimary 
    ? "primary-action"
    : "secondary-action"; 

  return (    
    <button className={getClassName()}>
      {
        icon && <FontAwesomeIcon icon={icon} />
      }      
      <span>{text}</span>
    </button>
  );
};

HeroButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.any,
  isPrimary: PropTypes.bool
};

export default HeroButton;