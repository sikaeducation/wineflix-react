// Navigation.js
import NavigationLink from "./NavigationLink";
const Navigation = () => {
  return (
    <nav className="navigation">
      <section className="primary-navigation">
        <h1>BeerFlix</h1>
        <ul className="navigation-links">
          <NavigationLink href="https://developer.mozilla.org" text="Home" />
          <NavigationLink href="https://developer.mozilla.org" text="Stout" />
          <NavigationLink href="https://developer.mozilla.org" text="Pale" />
          <NavigationLink href="https://developer.mozilla.org" text="Ale" />
        </ul>
      </section>
      <section className="secondary-navigation">
        <span className="user-avatar">
          <a href="https://developer.mozilla.org">CR</a>
        </span>
      </section>
    </nav>
  );
};

export default Navigation;
