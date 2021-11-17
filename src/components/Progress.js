import PropTypes from "prop-types";

const Progress = ({ value }) => {
  return (
    <progress min="0" max="100" value={value ? value : 0}></progress>
  );
};

Progress.propTypes = {
  value: PropTypes.number.isRequired
};

export default Progress;