import "./App.css";
import Hero from "./components/Hero/Hero";
import Category from "./components/Wines/Category";

const App = () => {
  return (
  <div className="App">
    <Hero />
    <main>
      <Category category="Drink Again" />
      <Category category="Keep Drinking" />
    </main>
  </div>
  )
}

export default App
