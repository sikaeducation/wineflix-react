import HeroContent from "./HeroContent";
import Navbar from "./Navbar";

const Hero = ({ imageUrl, imageLabel, siteTitle, navbarLinks, heroContent, headerControls }) => {
  return (
    <header className="hero">
      <img className="hero-image" src={imageUrl} alt={imageLabel} />
      <Navbar title={siteTitle}
        data={navbarLinks} />
      <HeroContent data={heroContent}
        headerControlsData={headerControls} />
    </header>
  )
};

export default Hero
