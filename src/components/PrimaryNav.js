import { links } from '../state'
import NavLink from './NavLink'

const PrimaryNav = () => {
    return (
        <section className="primary-navigation">
            <h1>WineFlix</h1>
            
            <ul className="navigation-links">
                {
                    links.map(link => {
                       return <NavLink key={link.label} link={link} />
                    })
                }
            </ul>
               
            
            {/* <ul className="navigation-links">
                <li className="active">
                <a href="https://developer.mozilla.org">Home</a>
                </li>
                <li>
                <a href="https://developer.mozilla.org">Whites</a>
                </li>
                <li>
                <a href="https://developer.mozilla.org">Reds</a>
                </li>
                <li>
                <a href="https://developer.mozilla.org">Blends</a>
                </li>
            </ul> */}
        </section>
    )
}

export default PrimaryNav
