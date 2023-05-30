// Header.js
import React from "react";
import Navigation from "./Navigation";
import HeroContent from "./HeroContent";

const Header = ({ heroContent }) => {
  return (
    <header className="hero">
      <img className="hero-image" src="/wine-hero.webp" alt="Wine bottles" />
      <Navigation />
      <HeroContent {...heroContent} />
    </header>
  );
};

export default Header;
