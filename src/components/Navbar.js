// TODO: No hardcoded data

import NavbarLink from "./NavbarLink";

const Navbar = ({ title, data }) => {
  return (
    <nav className="navigation">
      <section className="primary-navigation">
        <h1>{title}</h1>
        <ul className="navigation-links">
          {data.map((item) => (
            <NavbarLink item={item} />
          ))}
        </ul>
      </section>
      <section className="secondary-navigation">
        <span className="user-avatar">
          <a href="https://developer.mozilla.org">S</a>
        </span>
      </section>
    </nav>
  )
};

export default Navbar
