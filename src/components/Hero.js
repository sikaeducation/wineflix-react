import HeroContent from "./HeroContent";
import Navbar from "./Navbar";
import Image from "./Image";

const Hero = ({ imageUrl, imageLabel, siteTitle, navbarLinks, heroContent, headerControls }) => {
  return (
    <header className="hero">
      <Image
        className="hero-image"
        url={imageUrl}
        label={imageLabel}
      />
      <Navbar
        title={siteTitle}
        data={navbarLinks}
      />
      <HeroContent
        data={heroContent}
        headerControlsData={headerControls}
      />
    </header>
  )
}

export default Hero
