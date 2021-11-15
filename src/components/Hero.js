import HeroContent from "./HeroContent";
import Navbar from "./Navbar";

// TODO: No hardcoded data

const Hero = ({ imageUrl, imageLabel, navbarLinks, heroContent, headerControls }) => {
  return (
    <header className="hero">
      <img className="hero-image" src={imageUrl} alt={imageLabel} />
      <Navbar title="WineFlix"
        data={navbarLinks} />
      <HeroContent data={heroContent}
        headerControlsData={headerControls} />
    </header>
  )
};

export default Hero
