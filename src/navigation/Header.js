// Header.js
import React from "react";
import Navigation from "./Navigation";
import HeroContent from "../components/HeroContent";

const Header = ({ heroContent }) => {
  return (
    <header className="hero">
      <img className="hero-image" src="/beer-hero.webp" alt="Pub bar" />
      <Navigation />
      <HeroContent {...heroContent} />
    </header>
  );
};

export default Header;
