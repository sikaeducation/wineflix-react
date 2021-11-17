import { useHeroContext } from "../../contexts/HeroContext";
import Image from "../Image";

const HeroTitle = () => {
  const [heroState] = useHeroContext();

  return (    
    <h2>
      <Image alt={heroState.title} src={heroState.imageUrl} />
    </h2>
  );
};

export default HeroTitle;