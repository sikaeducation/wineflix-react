// Navigation.js
import React from "react";
import NavigationLink from "./NavigationLink";

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

export default Navigation;
