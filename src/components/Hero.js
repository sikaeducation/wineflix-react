// TODO: This should be passed from `App` component (same place as other data imports)
import { heroContent } from "../data";
import HeroContent from "./HeroContent";
import Navbar from "./Navbar";

// TODO: No hardcoded data

const Hero = () => {
  return (
    <header className="hero">
      <img className="hero-image" src="/wine-hero.webp" alt="Wine bottles" />
      <Navbar title="WineFlix" />
      <HeroContent data={heroContent} />
    </header>
  )
};

export default Hero
