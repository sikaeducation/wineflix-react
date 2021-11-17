import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import HeroTitle from "./HeroTitle";
import HeroButton from "./HeroButton";
import { useHeroContext } from "../../contexts/HeroContext";

const HeroContent = () => {
  const [heroState] = useHeroContext();
  
  return (
    <div className="hero-content">
      <HeroTitle/>
      {
        heroState.subtitle && <h3>{heroState.subtitle}</h3>
      }
      {
        heroState.description && <p>{heroState.description}</p>
      }
      <ul className="controls">
        <li>
          <HeroButton text="Drink" icon={faPlay} isPrimary={true} />
        </li>
        <li>
          <HeroButton text="More Info" icon={faInfoCircle} />
        </li>
      </ul>
    </div>
  );
};

export default HeroContent;