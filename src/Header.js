// Header.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const NavigationLink = ({ href, text }) => {
  return (
    <li>
      <a href={href}>{text}</a>
    </li>
  );
};

const Navigation = () => {
  return (
    <nav className="navigation">
      <section className="primary-navigation">
        <h1>WineFlix</h1>
        <ul className="navigation-links">
          <NavigationLink href="https://developer.mozilla.org" text="Home" />
          <NavigationLink href="https://developer.mozilla.org" text="Whites" />
          <NavigationLink href="https://developer.mozilla.org" text="Reds" />
          <NavigationLink href="https://developer.mozilla.org" text="Blends" />
        </ul>
      </section>
      <section className="secondary-navigation">
        <span className="user-avatar">
          <a href="https://developer.mozilla.org">S</a>
        </span>
      </section>
    </nav>
  );
};

const HeroContent = ({ title, subtitle, imageUrl, description }) => {
  return (
    <div className="hero-content">
      <h2>
        <img alt={title} src={imageUrl} />
      </h2>
      <h3>{subtitle}</h3>
      <p>{description}</p>
      <ul className="controls">
        <li>
          <button className="primary-action">
            <FontAwesomeIcon icon={faPlay} />
            <span>Drink</span>
          </button>
        </li>
        <li>
          <button className="secondary-action">
            <FontAwesomeIcon icon={faInfoCircle} />
            <span>More Info</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default function Header({ heroContent }) {
  return (
    <header className="hero">
      <img className="hero-image" src="/wine-hero.webp" alt="Wine bottles" />
      <Navigation />
      <HeroContent {...heroContent} />
    </header>
  );
}
