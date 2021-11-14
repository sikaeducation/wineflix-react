import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons"

const HeaderControls = () => {
  return (
    <ul className="controls">
      <li>
        <button className="primary-action">
          <FontAwesomeIcon icon={faPlay} />
          <span>Drink</span>
        </button>
      </li>
      <li>
        <button className="secondary-action">
          <FontAwesomeIcon icon={faInfoCircle} />
          <span>More Info</span>
        </button>
      </li>
    </ul>
  )
}

export default HeaderControls
