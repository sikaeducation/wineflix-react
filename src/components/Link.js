import PropTypes from 'prop-types';

const Link = ({url, text}) => {
  return (
    <a href={url}>{text}</a>
  );
};

Link.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string
};

export default Link;