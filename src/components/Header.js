import React from 'react'
import PrimaryNav from './PrimaryNav'
import SecondaryNav from './SecondaryNav'

const Header = () => {
    return (
    <header className="hero">
        <nav className="navigation">
            <PrimaryNav />
            <SecondaryNav url='https://developer.mozilla.org'/>
        </nav>
    </header>
    )
}

export default Header
