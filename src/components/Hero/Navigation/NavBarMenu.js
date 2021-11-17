import Link from "../../Link";

const NavBarMenu = () => {  
  // IRL these links would be routes defined somewhere else
  // they cld have just been hardcoded explicitly in the JSX in NavBarMenu for this exercise
  // but i took this approach as it felt a better way to handle the active class problem
  const links = [
    { url: "/", text: "Home" },
    { url: "/whites", text: "Whites" },
    { url: "/reds", text: "Reds" },
    { url: "/blends", text: "Blends" },
  ];

  const isCurrentPath = path => path === window.location.pathname;
  const getLinkClass = path => isCurrentPath(path) ? "active" : "";

  return (
    <ul className="navigation-links">
      {
        links.map(link => 
          <li className={getLinkClass(link.url)} key={link.text}>
            <Link url={link.url} text={link.text}></Link>
          </li>
        )
      }
    </ul>
  );
};

export default NavBarMenu;