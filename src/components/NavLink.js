import React from 'react'

const NavLink = ({link: { url, label }}) => {
    return (
        <li className="active">
            <a href={url}>{label}</a>
        </li>
    )
}

export default NavLink
