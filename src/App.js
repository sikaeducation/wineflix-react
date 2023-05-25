import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons"

const App = () => {
  return (
  <div className="App">
    <header className="hero">
      <img className="hero-image" src="/beer.webp" alt="Beer glasses" />
      <nav className="navigation">
        <section className="primary-navigation">
          <h1>BeerFlix</h1>
          <ul className="navigation-links">
            <li className="active">
              <a href="https://developer.mozilla.org">Home</a>
            </li>
            <li>
              <a href="https://developer.mozilla.org">Stouts</a>
            </li>
            <li>
              <a href="https://developer.mozilla.org">IPAs</a>
            </li>
            <li>
              <a href="https://developer.mozilla.org">Ales</a>
            </li>
          </ul>
        </section>
        <section className="secondary-navigation">
          <span className="user-avatar">
            <a href="https://developer.mozilla.org">CW</a>
          </span>
        </section>
      </nav>
      <div className="hero-content">
        <h2>
          <img alt="Rex Goliath" src="/rex-goliath-logo.png" />
        </h2>
        <h3>Thaitin teach tábhairne maith Gaeilge aige.</h3>
        <p>
          
        </p>
        <ul className="controls">
          <li>
            <button className="primary-action">
            <FontAwesomeIcon icon={faPlay} />
            <span>Sláinte</span>
            </button>
          </li>
          <li>
            <button className="secondary-action">
              <FontAwesomeIcon icon={faInfoCircle} />
              <span>Info</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
    <main>
      <section className="category">
        <h2>Quaff</h2>
        <ul>
          <li>
            <div className="wine">
              <img src="/barrels.jpeg" alt="Beer" />
              <span className="new-badge">New!</span>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/barrels.jpeg" alt="Beer" />
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/barrels.jpeg" alt="Beer" />
              <span className="new-badge">New!</span>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/barrels.jpeg" alt="Beer" />
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/barrels.jpeg" alt="Beer" />
              <span className="new-badge">New!</span>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/barrels.jpeg" alt="Beer" />
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/barrels.jpeg" alt="Beer" />
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/barrels.jpeg" alt="Beer" />
            </div>
          </li>
        </ul>
      </section>
      <section className="category">
        <h2>Have a go</h2>
        <ul>
          <li>
            <div className="wine">
              <img src="/barrels.jpeg" alt="Beer" />
              <div className="amount-consumed">
                <progress min="0" max="100" value="22"></progress>
              </div>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/barrels.jpeg" alt="Beer" />
              <div className="amount-consumed">
                <progress min="0" max="100" value="22"></progress>
              </div>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/barrels.jpeg" alt="Beer" />
              <div className="amount-consumed">
                <progress min="0" max="100" value="22"></progress>
              </div>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/barrels.jpeg" alt="Beer" />
              <div className="amount-consumed">
                <progress min="0" max="100" value="22"></progress>
              </div>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/barrels.jpeg" alt="Beer" />
              <div className="amount-consumed">
                <progress min="0" max="100" value="22"></progress>
              </div>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/barrels.jpeg" alt="Beer" />
              <div className="amount-consumed">
                <progress min="0" max="100" value="22"></progress>
              </div>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/barrels.jpeg" alt="Beer" />
              <div className="amount-consumed">
                <progress min="0" max="100" value="22"></progress>
              </div>
            </div>
          </li>
          <li>
            <div className="wine">
              <img src="/barrels.jpeg" alt="Beer" />
              <div className="amount-consumed">
                <progress min="0" max="100" value="22"></progress>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  </div>
  )
}

export default App
