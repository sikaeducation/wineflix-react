import HeroContent from "./HeroContent";
import Navbar from "./Navbar";

const Hero = ({ imageUrl, imageLabel, navbarLinks, heroContent }) => {
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
