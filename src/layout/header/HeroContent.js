import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons"

const HeroContent = (props) => {

    return (
        <div className="hero-content">
        <h2>
          <img alt={props.title} src={props.imageUrl} />
        </h2>
        <h3>{props.subtitle}</h3>
        <p>
          {props.description}
        </p>
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
      </div>
    )
}

export default HeroContent;