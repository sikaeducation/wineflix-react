import "./App.css";
import { wines } from "./data";
import Category from "./components/Category";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <main>
        <Category title="Drink Again"
          data={wines.filter(wine => wine.isFinished === true)} />
        <Category title="Keep Drinking"
          data={wines.filter(wine => wine.progress !== undefined)} />
      </main>
    </div>
  )
}

export default App
