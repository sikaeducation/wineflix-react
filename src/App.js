import "./App.css";
import Header from './components/Header'
import Hero from './components/Hero'
import WineList from "./components/WineList";
import { wines, heroContent } from './state'

const App = () => {
  
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
