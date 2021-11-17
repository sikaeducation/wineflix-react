import PropTypes from "prop-types";

const Image = ({ src, className, alt }) => {
  const getClassName = () => className ? className : "";
  const getAlt = () => alt ? alt : "";
  
  return (
    <img src={src} className={getClassName()} alt={getAlt()} />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  altText: PropTypes.string
};

export default Image;