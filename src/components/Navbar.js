import { userData } from "../data";
import NavbarLink from "./NavbarLink";
import UserAvatar from "./UserAvatar";

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
        <UserAvatar userData={userData} />
      </section>
    </nav>
  )
};

export default Navbar
