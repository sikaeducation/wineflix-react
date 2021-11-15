import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const HeaderControl = ({ className, text, iconImg }) => {
  return (
    <li>
      <button className={className}>
        <FontAwesomeIcon icon={iconImg} />
        <span>{text}</span>
      </button>
    </li>
  )
}

export default HeaderControl
