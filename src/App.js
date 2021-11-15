import "./App.css";
import Header from './components/Header'
import Hero from './components/Hero'
import WineList from "./components/WineList";

const App = () => {
  const heroContent = {
    title: 'Rex Goliath',
    subtitle: 'His Royal Majesty is back.',
    imageUrl: '/rex-goliath-logo.png',
    description: `America's most unhinged rooster is out of retirement, and this time? He's mad
    as hell.  Experience the unapologetic flavor burst of Rex Goliath.`,
  }

  const wines = [{
    id: 1,
    imageUrl: '/red-wine.jpg',
    isNew: true,
    label: 'Wine',
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

  const winesFinished = wines.filter(wine => wine.isFinished);
  const winesDrinking = wines.filter(wine => !wine.isFinished);

  return (
  <div className="App">
    <img className="hero-image" src="/wine-hero.webp" alt="Wine bottles" />
     <Header />
     <Hero content={heroContent}/>
     <main>
        <section className="category">
          <h2>Drink Again</h2>
          <WineList wines={winesFinished} />
        </section>
        <section className="category">
          <h2>Keep Drinking</h2>
          <WineList wines={winesDrinking} />
        </section>
     </main>
      
  </div>
  )
}

export default App
