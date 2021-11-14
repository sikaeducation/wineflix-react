import "./App.css";
import wines from "./data";
import Category from "./components/Category";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
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
