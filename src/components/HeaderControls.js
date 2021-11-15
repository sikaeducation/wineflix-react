import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import HeaderControl from "./HeaderControl"

// TODO: No hardcoded data

const HeaderControls = () => {
  return (
    <ul className="controls">
      <HeaderControl className="primary-action"
        text="Drink"
        iconImg={faPlay} />
      <HeaderControl className="secondary-action"
        text="More Info"
        iconImg={faInfoCircle} />
    </ul>
  )
}

export default HeaderControls
