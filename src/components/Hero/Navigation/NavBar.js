import NavBarMenu from "./NavBarMenu";
import UserAvatar from "./UserAvatar";

const NavBar = () => {
  return (
    <nav className="navigation">
      <section className="primary-navigation">
        <h1>Wineflix</h1>
        <NavBarMenu />
      </section>
      <section className="secondary-navigation">
        <UserAvatar />
      </section>
    </nav>
  );
};

export default NavBar;