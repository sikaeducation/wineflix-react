// TODO: How to handle `active` class?

const NavbarLink = ({ item }) => {
  return (
    <li className={item.className}>
      <a href={item.url}>{item.title}</a>
    </li>
  )
};

export default NavbarLink
