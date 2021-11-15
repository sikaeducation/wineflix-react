// TODO: This should be passed from `App` component (same place as other data imports)
import { heroContent, navbarLinks } from "../data";
import HeroContent from "./HeroContent";
import Navbar from "./Navbar";

const Hero = ({ imageUrl, imageLabel }) => {
  return (
    <header className="hero">
      <img className="hero-image" src={imageUrl} alt={imageLabel} />
      <Navbar title="WineFlix"
        data={navbarLinks} />
      <HeroContent data={heroContent} />
    </header>
  )
};

export default Hero
