import NavBar from "./Navigation/NavBar";
import HeroContent from "./HeroContent";
import Image from "../Image";
import { HeroContextProvider } from "../../contexts/HeroContext";

const Hero = () => {
  return (
    <header className="hero">
      <Image className="hero-image" src="/wine-hero.webp" alt="Wine bottles" />
      <NavBar />
      <HeroContextProvider>        
        <HeroContent />
      </HeroContextProvider>
    </header>
  );
};

export default Hero;