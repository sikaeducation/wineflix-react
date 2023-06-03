
const NavContentItem = (props) => {
    return (
        <li className={props.isActive ? "active" : ""}>
            <a href={props.linkUrl}>{props.label}</a>
        </li>
    )
}

export default NavContentItem;