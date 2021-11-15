import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons"

const Hero = ({content: {title, subtitle, imageUrl, description}}) => {
    return (
           <div className="hero hero-content">
                <h2>
                <img alt={title} src={imageUrl} />
                </h2>
                <h3>{subtitle}</h3>
                <p>{description}</p>
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

export default Hero
