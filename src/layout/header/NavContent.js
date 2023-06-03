import NavContentItem from "./NavContentItem";

const NavContent = () => {
    return (
    <nav className="navigation">
        <section className="primary-navigation">
          <h1>WineFlix</h1>
          <ul className="navigation-links">
            <NavContentItem isActive={true} linkUrl="https://developer.mozilla.org" label="Home" />
            <NavContentItem isActive={false} linkUrl="https://developer.mozilla.org" label="Whites" />
            <NavContentItem isActive={false} linkUrl="https://developer.mozilla.org" label="Reds" />
            <NavContentItem isActive={false} linkUrl="https://developer.mozilla.org" label="Blends" />
          </ul>
        </section>
        <section className="secondary-navigation">
          <span className="user-avatar">
            <a href="https://developer.mozilla.org">S</a>
          </span>
        </section>
    </nav>
    )
}

export default NavContent;