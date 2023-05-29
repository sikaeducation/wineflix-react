import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const NavigationLink = ({ href, text }) => {
    return (
        <li>
            <a href={href}>{text}</a>
        </li>
    );
};

const Navigation = () => {
    return (
        <nav className="navigation">
            <section className="primary-navigation">
                <h1>WineFlix</h1>
                <ul className="navigation-links">
                    <NavigationLink href="https://developer.mozilla.org" text="Home" />
                    <NavigationLink href="https://developer.mozilla.org" text="Whites" />
                    <NavigationLink href="https://developer.mozilla.org" text="Reds" />
                    <NavigationLink href="https://developer.mozilla.org" text="Blends" />
                </ul>
            </section>
            <section className="secondary-navigation">
                <span className="user-avatar">
                    <a href="https://developer.mozilla.org">S</a>
                </span>
            </section>
        </nav>
    );
};

const HeroContent = ({ title, subtitle, imageUrl, description }) => {
    return (
        <div className="hero-content">
            <h2>
                <img alt={title} src={imageUrl} />
            </h2>
            <h3>{subtitle}</h3>
            <p>{description}</p>
            <ul className="controls">
                <li>
                    <button className="primary-action">
                        <FontAwesomeIcon icon={faPlay} />
                        <span>Drink</span>
                    </button>
                </li>
                <li>
                    <button className="secondary-action">
                        <FontAwesomeIcon icon={faInfoCircle} />
                        <span>More Info</span>
                    </button>
                </li>
            </ul>
        </div>
    );
};

const Wine = ({ imageUrl, isNew, label, isFinished, progress }) => {
    return (
        <li>
            <div className="wine">
                <img src={imageUrl} alt="Wine" />
                {isNew && <span className="new-badge">New!</span>}
                {isFinished && (
                    <div className="amount-consumed">
                        <progress min="0" max="100" value={progress}></progress>
                    </div>
                )}
            </div>
        </li>
    );
};

const Category = ({ title, wines }) => {
    return (
        <section className="category">
            <h2>{title}</h2>
            <ul>
                {wines.map((wine) => (
                    <Wine
                        key={wine.id}
                        imageUrl={wine.imageUrl}
                        isNew={wine.isNew}
                        label={wine.label}
                        isFinished={wine.isFinished}
                        progress={wine.progress}
                    />
                ))}
            </ul>
        </section>
    );
};

const App = () => {
    const wines = [
        {
            id: 1,
            imageUrl: "/red-wine.jpg",
            isNew: true,
            label: "Wine",
            isFinished: true,
        }, {
            id: 2,
            imageUrl: '/red-wine.jpg',
            label: 'Wine',
            isFinished: true,
        }, {
            id: 3,
            imageUrl: '/red-wine.jpg',
            label: 'Wine',
            isNew: true,
            isFinished: true,
        }, {
            id: 4,
            imageUrl: '/red-wine.jpg',
            label: 'Wine',
            isFinished: true,
        }, {
            id: 5,
            imageUrl: '/red-wine.jpg',
            label: 'Wine',
            isNew: true,
            isFinished: true,
        }, {
            id: 6,
            imageUrl: '/red-wine.jpg',
            label: 'Wine',
            isFinished: true,
        }, {
            id: 7,
            imageUrl: '/red-wine.jpg',
            label: 'Wine',
            isFinished: true,
        }, {
            id: 8,
            imageUrl: '/red-wine.jpg',
            label: 'Wine',
            isFinished: true,
        }, {
            id: 1,
            imageUrl: '/red-wine.jpg',
            progress: 22,
            label: 'Wine',
        }, {
            id: 2,
            imageUrl: '/red-wine.jpg',
            progress: 22,
            label: 'Wine',
        }, {
            id: 3,
            imageUrl: '/red-wine.jpg',
            progress: 22,
            label: 'Wine',
        }, {
            id: 4,
            imageUrl: '/red-wine.jpg',
            progress: 22,
            label: 'Wine',
        }, {
            id: 5,
            imageUrl: '/red-wine.jpg',
            progress: 22,
            label: 'Wine',
        }, {
            id: 6,
            imageUrl: '/red-wine.jpg',
            progress: 22,
            label: 'Wine',
        }, {
            id: 7,
            imageUrl: '/red-wine.jpg',
            progress: 22,
            label: 'Wine',
        }, {
            id: 8,
            imageUrl: '/red-wine.jpg',
            progress: 22,
            label: 'Wine',
        }];

    const heroContent = {
        title: "Rex Goliath",
        subtitle: "His Royal Majesty is back.",
        imageUrl: "/rex-goliath-logo.png",
        description: `America's most unhinged rooster is out of retirement, and this time? He's mad as hell. Experience the unapologetic flavor burst of Rex Goliath.`,
    };

    return (
        <div className="App">
            <header className="hero">
                <img className="hero-image" src="/wine-hero.webp" alt="Wine bottles" />
                <Navigation />
                <HeroContent {...heroContent} />
            </header>
            <main>
                <Category title="Drink Again" wines={wines} />
                <Category title="Keep Drinking" wines={wines} />
            </main>
        </div>
    );
};

export default App;
